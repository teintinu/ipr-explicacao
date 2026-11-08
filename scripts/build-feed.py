#!/usr/bin/env python3
"""
Monta o feed de demonstração a partir dos posts escritos pelos agentes.

Lê os JSON em app/.feed/out/, recorta/transcodifica cada vídeo de raw/ na
proporção escolhida (ffmpeg), grava em app/public/media/ e gera
app/src/data/feed-posts.ts.

Uso:
    python3 scripts/build-feed.py [--keep-raw]

Sem --keep-raw, apaga de raw/ os vídeos que foram consumidos.
"""

import json
import pathlib
import random
import subprocess
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent          # explicacao/
RAW = RAIZ.parent / "raw"
OUT = RAIZ / "app" / ".feed" / "out"
MEDIA = RAIZ / "app" / "public" / "media"
DADOS = RAIZ / "app" / "src" / "data" / "feed-posts.ts"

PROPORCOES = {"1:1": (1, 1), "3:4": (3, 4), "4:5": (4, 5), "16:9": (16, 9), "9:16": (9, 16)}
DURACAO = 8


def recorte(w, h, rw, rh):
    if w / h > rw / rh:
        ch, cw = h, int(h * rw / rh)
    else:
        cw, ch = w, int(w * rh / rw)
    cw -= cw % 2
    ch -= ch % 2
    return min(cw, w), min(ch, h)


def posicao(total, alvo, foco):
    if foco == "top":
        return 0
    if foco == "bottom":
        return total - alvo
    return (total - alvo) // 2


def ffprobe(caminho):
    saida = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "v:0",
         "-show_entries", "stream=width,height:format=duration", "-of", "json", str(caminho)],
        capture_output=True, text=True, check=True).stdout
    d = json.loads(saida)
    st = (d.get("streams") or [{}])[0]
    return st["width"], st["height"], float(d.get("format", {}).get("duration") or 0)


def processar(video_id, ratio, foco, destino_base):
    origem = RAW / f"{video_id}.mp4"
    if not origem.exists():
        return None
    w, h, dur = ffprobe(origem)
    rw, rh = PROPORCOES[ratio]
    cw, ch = recorte(w, h, rw, rh)
    x = (w - cw) // 2
    y = posicao(h, ch, foco)

    escala = 640 / min(cw, ch)
    ow, oh = int(cw * escala) // 2 * 2, int(ch * escala) // 2 * 2
    vf = f"crop={cw}:{ch}:{x}:{y},scale={ow}:{oh}"

    inicio = min(2.0, max(0.0, dur * 0.15))
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-ss", f"{inicio:.2f}", "-i", str(origem),
         "-t", str(DURACAO), "-vf", vf, "-an", "-c:v", "libx264", "-crf", "32",
         "-preset", "veryfast", "-movflags", "+faststart", "-pix_fmt", "yuv420p",
         str(destino_base) + ".mp4"], check=True)
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-ss", f"{inicio:.2f}", "-i", str(origem),
         "-frames:v", "1", "-vf", vf, str(destino_base) + ".jpg"], check=True)
    return ow, oh, min(DURACAO, max(1, round(dur - inicio)))


def main():
    manter = "--keep-raw" in sys.argv
    arquivos = sorted(OUT.glob("*.json"))
    if not arquivos:
        sys.exit("nenhum JSON em .feed/out — rode o workflow antes")

    midia, texto = [], []
    for arq in arquivos:
        dados = json.loads(arq.read_text())
        for p in dados.get("posts", []):
            (midia if "videoId" in p else texto).append(p)

    MEDIA.mkdir(parents=True, exist_ok=True)
    rng = random.Random(42)
    rng.shuffle(midia)

    posts = []
    consumidos = []

    def com_likes(lista, semente):
        r = random.Random(semente)
        return [{**c, "likes": r.choice([0, 1, 2, 3, 5, 8, 12, 21, 34])} for c in lista]

    for i, p in enumerate(midia):
        base = MEDIA / p["videoId"].replace("-", "_")
        info = processar(p["videoId"], p["ratio"], p["focus"], base)
        if not info:
            print(f"  ! vídeo ausente: {p['videoId']}")
            continue
        w, h, dur = info
        consumidos.append(p["videoId"])
        midia_obj = {
            "src": f"/media/{base.name}.mp4" if p["kind"] == "video" else f"/media/{base.name}.jpg",
            "poster": f"/media/{base.name}.jpg",
            "ratio": p["ratio"],
        }
        if p["kind"] == "video":
            midia_obj["duration"] = dur
        posts.append({
            "id": f"m{i + 1:03d}",
            "authorId": p["authorId"],
            "kind": p["kind"],
            "text": p["text"],
            "media": midia_obj,
            "likes": p["likes"],
            "time": p["time"],
            "comments": com_likes(p["comments"], p["videoId"]),
        })
        print(f"  ✓ {base.name} {p['ratio']} {w}x{h}")

    for i, p in enumerate(texto):
        posts.append({
            "id": f"t{i + 1:03d}",
            "authorId": p["authorId"],
            "kind": p["kind"],
            "text": p["text"],
            "likes": p["likes"],
            "time": p["time"],
            "comments": com_likes(p["comments"], f"t{i}"),
        })

    # mistura: uma mídia, um texto, duas mídias, dois textos…
    rng2 = random.Random(7)
    rng2.shuffle(posts)

    def js(v, nivel=0):
        return json.dumps(v, ensure_ascii=False, indent=2)

    corpo = ",\n".join(js(p, 4) for p in posts)
    DADOS.write_text(
        "import type { FeedPost } from \"./feed\";\n\n"
        "/** Conteúdo de demonstração. Gerado por scripts/build-feed.py a partir de raw/. */\n"
        f"export const feedPosts: FeedPost[] = [\n{corpo}\n];\n"
    )
    print(f"\n{len(posts)} posts → {DADOS.name} ({len(midia)} com mídia, {len(texto)} de texto)")

    if not manter:
        for vid in consumidos:
            (RAW / f"{vid}.mp4").unlink(missing_ok=True)
        print(f"{len(consumidos)} vídeos removidos de raw/")


if __name__ == "__main__":
    main()
