const rawBasePath = import.meta.env.BASE_URL ?? "/";

export const SITE_BASE_PATH = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");
export const SITE_ORIGIN = "https://alexdanwq.github.io";

export function sitePath(path: string) {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  if (path.startsWith("#")) {
    return `${SITE_BASE_PATH}/${path}`;
  }

  return `${SITE_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteSiteUrl(path: string) {
  return `${SITE_ORIGIN}${sitePath(path)}`;
}
