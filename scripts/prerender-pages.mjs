import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const clientDir = join(projectRoot, "dist", "client");
const basePath = normalizeBasePath(process.env.VITE_BASE_PATH ?? "/");
const siteOrigin = process.env.SITE_ORIGIN ?? "https://nutrivalife.ru";
const siteDomain = process.env.SITE_DOMAIN?.trim();
const server = (await import("../dist/server/server.js")).default;
const lastmod = process.env.SITEMAP_LASTMOD ?? new Date().toISOString().slice(0, 10);

const articleSlugs = [
  "kak-schitat-kalorii",
  "defitsit-kaloriy-dlya-pohudeniya",
  "bzhu-prostymi-slovami",
  "pochemu-ves-stoit-na-meste",
  "dnevnik-pitaniya",
  "kak-nachat-hudet",
  "kontrol-vody",
  "pitanie-dlya-nabora-massy",
  "kak-ne-sryvatsya-na-diete",
  "luchshee-prilozhenie-dlya-pitaniya",
];

const routes = [
  { route: "/", output: "index.html" },
  { route: "/bmi", output: "bmi/index.html" },
  ...articleSlugs.map((slug) => ({
    route: `/articles/${slug}`,
    output: `articles/${slug}/index.html`,
  })),
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
if (siteDomain) {
  await writeFile(join(clientDir, "CNAME"), `${siteDomain}\n`);
}
await writeFile(join(clientDir, "404.html"), await serverHtmlFor("/"));
await writeFile(join(clientDir, "sitemap.xml"), buildSitemap());
await writeFile(join(clientDir, "robots.txt"), buildRobotsTxt());

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

function absoluteUrl(route) {
  return new URL(`${basePath}${route.replace(/^\//, "")}`, siteOrigin).toString();
}

function buildSitemap() {
  const sitemapRoutes = [
    { route: "/", priority: "1.0", changefreq: "weekly" },
    { route: "/bmi", priority: "0.6", changefreq: "monthly" },
    ...articleSlugs.map((slug) => ({
      route: `/articles/${slug}`,
      priority: slug === "kak-schitat-kalorii" ? "0.8" : "0.7",
      changefreq: "monthly",
    })),
  ];

  const urls = sitemapRoutes
    .map(
      ({ route, priority, changefreq }) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
Host: ${siteDomain ?? new URL(siteOrigin).host}
`;
}
