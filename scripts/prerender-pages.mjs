import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const clientDir = join(projectRoot, "dist", "client");
const basePath = normalizeBasePath(process.env.VITE_BASE_PATH ?? "/");
const siteOrigin = process.env.SITE_ORIGIN ?? "https://alexdanwq.github.io";
const server = (await import("../dist/server/server.js")).default;

const routes = [
  { route: "/", output: "index.html" },
  { route: "/bmi", output: "bmi/index.html" },
];

for (const page of routes) {
  const requestUrl = new URL(`${basePath}${page.route.replace(/^\//, "")}`, siteOrigin);
  const response = await server.fetch(new Request(requestUrl), {}, {});

  if (!response.ok) {
    throw new Error(`Failed to prerender ${page.route}: ${response.status} ${response.statusText}`);
  }

  const html = sanitizeHtml(await response.text());
  const outputPath = join(clientDir, page.output);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

await writeFile(join(clientDir, ".nojekyll"), "");
await writeFile(join(clientDir, "404.html"), await serverHtmlFor("/"));

async function serverHtmlFor(route) {
  const requestUrl = new URL(`${basePath}${route.replace(/^\//, "")}`, siteOrigin);
  const response = await server.fetch(new Request(requestUrl), {}, {});

  if (!response.ok) {
    throw new Error(
      `Failed to prerender fallback ${route}: ${response.status} ${response.statusText}`,
    );
  }

  return sanitizeHtml(await response.text());
}

function normalizeBasePath(value) {
  if (!value || value === "/") {
    return "/";
  }

  return `/${value.replace(/^\/+|\/+$/g, "")}/`;
}

function sanitizeHtml(html) {
  return html.replaceAll("\0", "\\u0000");
}
