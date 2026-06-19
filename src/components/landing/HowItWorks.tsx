import { Reveal } from "./Section";

const steps = [
  {
    title: "Укажите цель и параметры",
    text: "Начните с базовых данных, чтобы приложение помогало держать ориентир по питанию и прогрессу.",
  },
  {
    title: "Добавляйте еду в дневник",
    text: "Записывайте приемы пищи, используйте избранное, свои продукты и сканирование штрихкодов.",
  },
  {
    title: "Следите за показателями",
    text: "Смотрите калории, БЖУ, воду и вес в одном месте, без ручных таблиц и лишних расчетов.",
  },
  {
    title: "Анализируйте прогресс",
    text: "Замечайте динамику и постепенно корректируйте привычки, когда появляются реальные данные.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep sm:mb-5">
            — Как это работает
          </p>
          <h2 className="font-display text-balance text-[32px] font-black leading-[1] sm:text-[42px] sm:leading-[0.98] md:text-[58px]">
            Начните с малого: запишите первый прием пищи
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[color:var(--hairline)] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-6">
                <span className="font-serif text-[34px] italic leading-none text-primary-deep/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[17px] font-bold leading-snug">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
