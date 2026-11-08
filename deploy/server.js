/**
 * Servidor estático mínimo para o site explicativo (React + Vite).
 *
 * Roda dentro do container (Bun) e serve os arquivos extraídos do bundle em /app.
 * Sem dependências, sem build, sem telemetria.
 *
 * Como o site é uma SPA (React Router), qualquer rota sem extensão devolve o
 * index.html — o roteador decide o que mostrar. Arquivos com extensão que não
 * existem continuam dando 404 de verdade.
 *
 * Os endereços antigos terminavam em .html; eles redirecionam para o caminho
 * limpo, para que link salvo e busca não quebrem.
 *
 *   PORT       porta de escuta (padrão 8080)
 *   SITE_ROOT  raiz dos arquivos (padrão /app)
 */
const ROOT = (process.env.SITE_ROOT || "/app").replace(/\/+$/, "");
const PORT = Number(process.env.PORT || 8080);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
};

const NOT_FOUND = `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Página não encontrada</title>
<style>body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f7f8fc;color:#131a2b;
display:grid;place-items:center;min-height:100vh;margin:0;text-align:center;padding:2rem}
h1{font-size:clamp(2rem,6vw,3rem);margin:0 0 .5rem}
p{color:#4d5877;max-width:40ch;margin:0 0 1.5rem}
a{color:#3b5bdb;font-weight:600}</style></head>
<body><main><h1>404</h1>
<p>Esta página não existe. Pode ter sido removida ou o endereço está errado.</p>
<a href="/">Voltar ao início</a></main></body></html>`;

function resolvePath(pathname) {
  let path = pathname;
  try {
    path = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  if (path.includes("\0")) return null;
  if (path.endsWith("/")) path += "index.html";

  const full = `${ROOT}${path}`;
  // Impede sair da raiz (../, //, etc.).
  if (!full.startsWith(`${ROOT}/`)) return null;
  if (full.split("/").includes("..")) return null;
  return full;
}

function etagFor(file) {
  return `"${file.size.toString(16)}-${file.lastModified.toString(16)}"`;
}

Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/healthz") {
      return new Response("ok", { headers: { "content-type": "text/plain" } });
    }

    // Endereço antigo (…/pagina.html) → caminho limpo, 301.
    if (url.pathname.endsWith(".html") && url.pathname !== "/index.html") {
      const clean = url.pathname.replace(/\.html$/, "");
      return new Response(null, {
        status: 301,
        headers: { location: `${clean}${url.search}`, "cache-control": "public, max-age=3600" },
      });
    }

    const path = resolvePath(url.pathname);
    if (!path) return new Response(NOT_FOUND, { status: 404, headers: baseHeaders("text/html; charset=utf-8") });

    const file = Bun.file(path);
    if (!(await file.exists())) {
      // Rota da SPA: devolve o index e deixa o roteador decidir.
      if (!/\.[a-z0-9]+$/i.test(url.pathname)) {
        const index = Bun.file(`${ROOT}/index.html`);
        if (await index.exists()) {
          return new Response(index, {
            headers: { ...baseHeaders("text/html; charset=utf-8"), "cache-control": "no-cache" },
          });
        }
      }
      return new Response(NOT_FOUND, { status: 404, headers: baseHeaders("text/html; charset=utf-8") });
    }

    const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
    const type = TYPES[ext] || "application/octet-stream";
    const etag = etagFor(file);

    if (request.headers.get("if-none-match") === etag) {
      return new Response(null, { status: 304, headers: { etag } });
    }

    return new Response(file, {
      headers: {
        ...baseHeaders(type),
        etag,
        "cache-control": ext === ".html" ? "no-cache" : "public, max-age=300",
      },
    });
  },
});

function baseHeaders(type) {
  return {
    "content-type": type,
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
  };
}

console.log(`site explicativo servindo ${ROOT} na porta ${PORT}`);
