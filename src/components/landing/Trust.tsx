import { Reveal } from "./Section";
import { IconEye, IconLeaf } from "./Icons";

const trustItems = [
  "Без сложных диет",
  "Без перегруженного интерфейса",
  "Все основные показатели в одном месте",
  "Подходит для ежедневного использования",
];

export function Trust() {
  return (
    <section className="py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-[color:var(--hairline)] bg-white p-6 shadow-soft sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-primary-deep">
                <IconLeaf className="h-6 w-6" />
              </div>
              <h2 className="font-display text-balance text-[30px] font-black leading-[1.05] sm:text-[40px]">
                Не диета, а понятная система наблюдения
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                NUTRIVA не заставляет сидеть на жестких диетах. Приложение помогает видеть данные,
                понимать рацион и постепенно выстраивать более стабильные пищевые привычки.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-24 items-start gap-3 rounded-2xl border border-[color:var(--hairline)] bg-background/70 p-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-primary-deep shadow-soft">
                    <IconEye className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
