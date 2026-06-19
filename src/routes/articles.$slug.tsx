import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header, RUSTORE } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { IconArrowDown, IconArrowRight } from "@/components/landing/Icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { absoluteSiteUrl, sitePath } from "@/lib/site-path";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);

    if (!article) {
      throw notFound();
    }

    return article;
  },
  head: ({ loaderData }) => {
    const article = loaderData;

    if (!article) {
      return {};
    }

    const articleUrl = absoluteSiteUrl(`/articles/${article.slug}`);

    return {
      meta: [
        { title: article.title },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: articleUrl },
        { property: "og:image", content: absoluteSiteUrl("/og-image.svg") },
        { property: "og:locale", content: "ru_RU" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.description },
        { name: "twitter:image", content: absoluteSiteUrl("/og-image.svg") },
      ],
      links: [{ rel: "canonical", href: articleUrl }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const relatedArticles = getRelatedArticles(article);
  const articleUrl = absoluteSiteUrl(`/articles/${article.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.h1,
        description: article.description,
        inLanguage: "ru-RU",
        mainEntityOfPage: articleUrl,
        datePublished: "2026-06-19",
        dateModified: "2026-06-19",
        author: {
          "@type": "Organization",
          name: "NUTRIVA",
        },
        publisher: {
          "@type": "Organization",
          name: "NUTRIVA",
          logo: {
            "@type": "ImageObject",
            url: absoluteSiteUrl("/og-image.svg"),
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "NUTRIVA",
            item: absoluteSiteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: article.h1,
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: article.faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: article.faq.answer,
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background pb-16 sm:pb-0">
      <JsonLd data={jsonLd} />
      <Header />

      <article className="mx-auto max-w-4xl px-4 pb-10 pt-24 sm:px-5 sm:pb-16 sm:pt-32 md:px-8">
        <a
          href={sitePath("/")}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary-deep transition-colors hover:text-foreground"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          На главную
        </a>

        <header className="mt-8">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep">
            Материал NUTRIVA
          </p>
          <h1 className="font-display text-balance text-[34px] font-black leading-[1.03] sm:text-[48px] md:text-[62px]">
            {article.h1}
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-slate-600 sm:text-[18px]">
            {article.intro}
          </p>
          <div className="mt-6 rounded-2xl border border-[color:var(--hairline)] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Главная мысль
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-foreground sm:text-[16px]">
              {article.mainIdea}
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-12">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-[26px] font-black leading-tight sm:text-[34px]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.78] text-slate-600 sm:text-[16px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-[color:var(--hairline)] bg-white p-5 shadow-soft sm:mt-16 sm:rounded-3xl sm:p-7">
          <h2 className="font-display text-[26px] font-black leading-tight sm:text-[34px]">FAQ</h2>
          <h3 className="mt-5 text-[17px] font-bold">{article.faq.question}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {article.faq.answer}
          </p>
        </section>

        <section
          className="mt-8 rounded-2xl border border-[color:var(--hairline)] p-6 text-center shadow-elevated sm:mt-10 sm:rounded-3xl sm:p-9"
          style={{ background: "linear-gradient(135deg, #EEF8F1 0%, #FFFFFF 56%, #D9F1E3 100%)" }}
        >
          <h2 className="font-display text-[28px] font-black leading-tight sm:text-[38px]">
            Удобнее следить за питанием в NUTRIVA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
            Скачайте NUTRIVA на Android, чтобы вести дневник питания, считать калории, отслеживать
            БЖУ, воду, вес и видеть прогресс в одном месте.
          </p>
          <a
            href={RUSTORE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-6 text-[14px] font-bold text-white shadow-elevated transition-all hover:scale-[1.02] sm:w-auto sm:rounded-full sm:px-7 sm:text-[15px]"
            style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
          >
            <IconArrowDown className="h-4 w-4" />
            Скачать NUTRIVA
          </a>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-[26px] font-black leading-tight sm:text-[34px]">
            Читайте также
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {relatedArticles.map((related) => (
              <a
                key={related.slug}
                href={sitePath(`/articles/${related.slug}`)}
                className="group flex h-full flex-col justify-between rounded-2xl border border-[color:var(--hairline)] bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated sm:rounded-3xl"
              >
                <span className="text-[14px] font-bold leading-snug group-hover:text-primary-deep">
                  {related.h1}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary-deep">
                  Читать статью
                  <IconArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </article>

      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
