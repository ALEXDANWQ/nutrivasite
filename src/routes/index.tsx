import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhyNutriva } from "@/components/landing/WhyNutriva";
import { Progress } from "@/components/landing/Progress";
import { Products } from "@/components/landing/Products";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { absoluteSiteUrl } from "@/lib/site-path";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUTRIVA — дневник питания, калории, БЖУ и прогресс" },
      {
        name: "description",
        content:
          "NUTRIVA помогает вести дневник питания, считать калории и БЖУ, контролировать воду, вес, ИМТ и прогресс в удобном минималистичном приложении.",
      },
      { property: "og:title", content: "NUTRIVA — дневник питания, калории, БЖУ и прогресс" },
      {
        property: "og:description",
        content:
          "Минималистичное приложение для контроля питания: калории, БЖУ, вода, вес и прогресс.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteSiteUrl("/") },
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
      <Header />
      <Hero />
      <Features />
      <WhyNutriva />
      <Progress />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}
