import { Reveal } from "./Section";
import { RUSTORE } from "./Header";
import { IconArrowDown } from "./Icons";

export function CTA() {
  return (
    <section id="download" className="px-4 py-16 sm:px-5 sm:py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] p-6 text-center shadow-elevated sm:rounded-[2.5rem] sm:p-12 md:p-20"
            style={{
              background: "linear-gradient(135deg, #EEF8F1 0%, #FFFFFF 50%, #D9F1E3 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-50"
              style={{ background: "radial-gradient(circle, #36C978 0%, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, #159957 0%, transparent 70%)" }}
            />

            <div className="relative">
              <h2 className="font-display text-balance text-[32px] sm:text-[44px] md:text-[64px] lg:text-[78px] leading-[1] sm:leading-[0.96] font-black tracking-[-0.04em] max-w-4xl mx-auto">
                Начните контроль питания{" "}
                <span className="font-serif italic font-normal text-primary-deep">
                  уже сегодня.
                </span>
              </h2>
              <p className="mt-4 sm:mt-5 text-[14px] sm:text-base text-muted-foreground max-w-xl mx-auto text-balance">
                Скачайте NUTRIVA и ведите калории, БЖУ, воду, вес и прогресс в одном удобном
                приложении.
              </p>
              <a
                href={RUSTORE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-6 text-[14px] font-semibold text-white shadow-elevated transition-all hover:scale-[1.03] sm:mt-10 sm:w-auto sm:rounded-[22px] sm:px-8 sm:py-4 sm:text-base"
                style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
              >
                <IconArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                Скачать NUTRIVA
              </a>
              <p className="mt-3 text-[12.5px] font-medium text-muted-foreground">
                Скачивание займет меньше минуты
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
