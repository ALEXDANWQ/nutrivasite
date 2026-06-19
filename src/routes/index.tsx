import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhyNutriva } from "@/components/landing/WhyNutriva";
import { Progress } from "@/components/landing/Progress";
import { Products } from "@/components/landing/Products";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteSiteUrl } from "@/lib/site-path";
import { RUSTORE } from "@/components/landing/Header";
import { landingFaqs } from "@/lib/landing-faqs";

const homeTitle = "NUTRIVA — счетчик калорий, дневник питания и БЖУ на Android";
const homeDescription =
  "Скачайте NUTRIVA — удобное Android-приложение для учета калорий, БЖУ, воды, веса и прогресса. Дневник питания, сканер штрихкодов и статистика в одном месте.";
const homeOgTitle = "NUTRIVA — счетчик калорий и дневник питания";
const homeOgDescription =
  "Следите за калориями, БЖУ, водой, весом и прогрессом в удобном Android-приложении.";
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${absoluteSiteUrl("/")}#organization`,
      name: "NUTRIVA",
      url: absoluteSiteUrl("/"),
      logo: absoluteSiteUrl("/og-image.svg"),
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteSiteUrl("/")}#website`,
      name: "NUTRIVA",
      url: absoluteSiteUrl("/"),
      inLanguage: "ru-RU",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${absoluteSiteUrl("/")}#app`,
      name: "NUTRIVA",
      operatingSystem: "Android",
      applicationCategory: "HealthApplication",
      description: "Android-приложение для учета питания, калорий, БЖУ, воды, веса и прогресса.",
      downloadUrl: RUSTORE,
      url: absoluteSiteUrl("/"),
    },
    {
      "@type": "FAQPage",
      "@id": `${absoluteSiteUrl("/")}#faq`,
      mainEntity: landingFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeTitle },
      {
        name: "description",
        content: homeDescription,
      },
      {
        name: "keywords",
        content:
          "счетчик калорий, дневник питания, БЖУ, приложение для похудения, контроль веса, учет воды, калории Android, NUTRIVA",
      },
      { property: "og:title", content: homeOgTitle },
      {
        property: "og:description",
        content: homeOgDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteSiteUrl("/") },
      { property: "og:image", content: absoluteSiteUrl("/og-image.svg") },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: homeOgTitle },
      {
        name: "twitter:description",
        content: "Учет калорий, БЖУ, воды, веса и прогресса на Android.",
      },
      { name: "twitter:image", content: absoluteSiteUrl("/og-image.svg") },
      { name: "application-name", content: "NUTRIVA" },
    ],
    links: [
      { rel: "canonical", href: absoluteSiteUrl("/") },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      <JsonLd data={homeJsonLd} />
      <Header />
      <Hero />
      <Features />
      <WhyNutriva />
      <Progress />
      <Products />
      <CTA />
      <LandingFAQ />
      <Footer />
    </main>
  );
}
