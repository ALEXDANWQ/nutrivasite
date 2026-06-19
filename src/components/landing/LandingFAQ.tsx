import { RUSTORE } from "./Header";
import { IconArrowDown } from "./Icons";
import { Reveal } from "./Section";
import { landingFaqs } from "@/lib/landing-faqs";

export function LandingFAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
        <Reveal className="mb-9 text-center sm:mb-12">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep sm:mb-5">
            — FAQ
          </p>
          <h2 className="font-display text-balance text-[32px] font-black leading-[1] sm:text-[42px] sm:leading-[0.98] md:text-[58px]">
            Коротко о питании, калориях и скачивании
          </h2>
        </Reveal>

        <div className="space-y-3">
          {landingFaqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <details className="group rounded-2xl border border-[color:var(--hairline)] bg-white p-5 shadow-soft open:shadow-elevated sm:rounded-3xl sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-bold sm:text-[17px]">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-primary-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center sm:mt-10">
          <p className="mb-4 text-[13px] font-medium text-muted-foreground">
            Android-приложение для ежедневного контроля питания
          </p>
          <a
            href={RUSTORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-6 text-[14px] font-bold text-white shadow-elevated transition-all hover:scale-[1.02] sm:w-auto sm:rounded-full sm:px-7 sm:text-[15px]"
            style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
          >
            <IconArrowDown className="h-4 w-4" />
            Скачать NUTRIVA
          </a>
        </Reveal>
      </div>
    </section>
  );
}
