import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Pricing } from "@/components/landing/Pricing";
import { absoluteSiteUrl } from "@/lib/site-path";

export const Route = createFileRoute("/tarify")({
  head: () => ({
    meta: [
      { title: "Тарифы NUTRIVA — бесплатный доступ и Plus" },
      { name: "description", content: "Сравните бесплатный доступ NUTRIVA и подписку Plus: 199 ₽ в месяц или 1 899 ₽ в год." },
      { property: "og:title", content: "Тарифы NUTRIVA" },
      { property: "og:description", content: "Бесплатный доступ и NUTRIVA Plus для осознанного контроля питания." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteSiteUrl("/tarify") },
      { property: "og:locale", content: "ru_RU" },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/tarify") }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return <main className="min-h-screen overflow-x-clip bg-background"><Header /><div className="pt-16 sm:pt-20"><Pricing /></div><Footer /></main>;
}
