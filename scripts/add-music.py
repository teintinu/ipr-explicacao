#!/usr/bin/env python3
"""
Coloca música nos vídeos do feed de demonstração.

Cada clipe de 8 s recebe um trecho de uma das faixas de ../raw/. As faixas se
repetem (são nove para 68 vídeos), mas o trecho não: o script sorteia janelas de
8 s de cada faixa e só repete uma janela depois de esgotar as outras daquela
faixa.

O vídeo é copiado sem recodificar (`-c:v copy`); só o áudio é codificado em AAC,
com 0,5 s de fade-in e 0,9 s de fade-out para não estalar na emenda.

Uso:
    python3 scripts/add-music.py            # processa app/public/media/*.mp4
    python3 scripts/add-music.py --dry-run  # só mostra o plano
"""

import json
import pathlib
import random
import subprocess
import sys
import tempfile

RAIZ = pathlib.Path(__file__).resolve().parent.parent
RAW = RAIZ.parent / "raw"
MEDIA = RAIZ / "app" / "public" / "media"

DURACAO = 8
PASSO = 11  # distância mínima entre o início de dois trechos da mesma faixa


def duracao(caminho):
    saida = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(caminho)],
        capture_output=True, text=True, check=True).stdout
    return float(saida.strip())


def janelas(faixa, dur, rng):
    """Janelas de 8 s da faixa, embaralhadas."""
    inicios = list(range(0, max(1, int(dur) - DURACAO - 1), PASSO))
    rng.shuffle(inicios)
    return inicios


def main():
    seco = "--dry-run" in sys.argv

    faixas = sorted(RAW.glob("*.mp3"))
    if not faixas:
        sys.exit("nenhuma faixa .mp3 em raw/")

    rng = random.Random(11)
    plano = {}
    for f in faixas:
        plano[f] = janelas(f, duracao(f), rng)

    videos = sorted(MEDIA.glob("*.mp4"))
    print(f"{len(faixas)} faixas · {len(videos)} vídeos")

    usadas = {f: 0 for f in faixas}
    registro = []

    for i, video in enumerate(videos):
        # usa a faixa com mais janelas ainda disponíveis, para distribuir
        candidatas = [f for f in faixas if plano[f]]
        if not candidatas:
            # esgotou: reembaralha com deslocamento, evitando repetir o mesmo início
            for f in faixas:
                novas = janelas(f, duracao(f), rng)
                plano[f] = [x + 5 for x in novas if x + 5 + DURACAO < duracao(f)] or novas
            candidatas = list(faixas)
        # equilibra: primeiro a faixa menos usada; empate, a que tem mais janelas
        faixa = min(candidatas, key=lambda f: (usadas[f], -len(plano[f])))
        inicio = plano[faixa].pop()

        registro.append({"video": video.name, "faixa": faixa.name, "inicio": inicio})
        usadas[faixa] += 1

        if seco:
            print(f"  {video.name} ← {faixa.name} @{inicio}s")
            continue

        with tempfile.NamedTemporaryFile(suffix=".mp4", dir=MEDIA, delete=False) as tmp:
            saida = pathlib.Path(tmp.name)

        subprocess.run(
            ["ffmpeg", "-v", "error", "-y",
             "-i", str(video),
             "-ss", str(inicio), "-t", str(DURACAO), "-i", str(faixa),
             "-map", "0:v:0", "-map", "1:a:0",
             "-c:v", "copy", "-c:a", "aac", "-b:a", "128k", "-ar", "44100",
             "-af", f"afade=t=in:st=0:d=0.5,afade=t=out:st={DURACAO - 0.9}:d=0.9",
             "-movflags", "+faststart", "-shortest",
             str(saida)], check=True)

        saida.replace(video)
        if (i + 1) % 10 == 0:
            print(f"  {i + 1}/{len(videos)}")

    if not seco:
        (RAIZ / "app" / ".feed" / "musica.json").write_text(
            json.dumps(registro, ensure_ascii=False, indent=1))
        print(f"\n{len(videos)} vídeos com música")
        for f in faixas:
            print(f"  {usadas[f]:2d}× {f.name}")


if __name__ == "__main__":
    main()
