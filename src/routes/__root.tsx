import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { absoluteSiteUrl, sitePath } from "@/lib/site-path";
import { buildSeoKeywords, ROBOTS_DIRECTIVES } from "@/lib/seo";
import appCss from "../styles.css?url";

const defaultTitle = "NUTRIVA — счетчик калорий, дневник питания и БЖУ на Android";
const defaultDescription =
  "Скачайте NUTRIVA — Android-приложение для учета калорий, БЖУ, воды, веса и прогресса.";
const defaultKeywords = buildSeoKeywords([
  "лучший счетчик калорий",
  "скачать счетчик калорий",
  "скачать дневник питания",
  "Android приложение для контроля питания",
]);

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              reset();
              window.location.reload();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={sitePath("/")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultTitle },
      {
        name: "description",
        content: defaultDescription,
      },
      {
        name: "keywords",
        content: defaultKeywords,
      },
      { name: "robots", content: ROBOTS_DIRECTIVES },
      { name: "googlebot", content: ROBOTS_DIRECTIVES },
      { name: "yandex", content: ROBOTS_DIRECTIVES },
      { name: "author", content: "NUTRIVA" },
      { name: "application-name", content: "NUTRIVA" },
      { name: "apple-mobile-web-app-title", content: "NUTRIVA" },
      { name: "theme-color", content: "#19a45b" },
      { name: "msapplication-TileColor", content: "#19a45b" },
      { name: "msapplication-TileImage", content: sitePath("/mstile-150x150.png") },
      { name: "msapplication-config", content: sitePath("/browserconfig.xml") },
      { name: "format-detection", content: "telephone=no" },
      { name: "color-scheme", content: "light" },
      { property: "og:title", content: "NUTRIVA — счетчик калорий и дневник питания" },
      {
        property: "og:description",
        content:
          "Следите за калориями, БЖУ, водой, весом и прогрессом в удобном Android-приложении.",
      },
      { property: "og:url", content: absoluteSiteUrl("/") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteSiteUrl("/og-image.svg") },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NUTRIVA — счетчик калорий и дневник питания" },
      {
        name: "twitter:description",
        content: "Учет калорий, БЖУ, воды, веса и прогресса на Android.",
      },
      { name: "twitter:image", content: absoluteSiteUrl("/og-image.svg") },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: absoluteSiteUrl("/favicon.ico"),
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: sitePath("/apple-touch-icon.png"),
      },
      { rel: "mask-icon", href: sitePath("/safari-pinned-tab.svg"), color: "#19a45b" },
      { rel: "manifest", href: sitePath("/site.webmanifest") },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
