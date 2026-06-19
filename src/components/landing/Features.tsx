import { Reveal } from "./Section";
import {
  IconDiary,
  IconFlame,
  IconRing,
  IconScan,
  IconPlus,
  IconStar,
  IconDrop,
  IconScale,
} from "./Icons";

const items = [
  {
    icon: IconDiary,
    title: "Дневник питания",
    text: "Быстро добавляйте завтраки, обеды, ужины и перекусы.",
  },
  {
    icon: IconFlame,
    title: "Счетчик калорий",
    text: "Следите за дневной нормой и остатком калорий.",
  },
  {
    icon: IconRing,
    title: "БЖУ",
    text: "Контролируйте белки, жиры и углеводы без сложных расчетов.",
  },
  { icon: IconScan, title: "Сканер штрихкодов", text: "Быстро находите продукты по упаковке." },
  {
    icon: IconPlus,
    title: "Свои продукты",
    text: "Добавляйте блюда и продукты, которых нет в базе.",
  },
  { icon: IconStar, title: "Избранное", text: "Сохраняйте частые продукты для быстрого доступа." },
  { icon: IconDrop, title: "Контроль воды", text: "Отслеживайте дневную норму воды." },
  { icon: IconScale, title: "Вес и ИМТ", text: "Следите за динамикой веса и изменением ИМТ." },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mb-10 max-w-3xl sm:mb-14 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary-deep font-bold mb-4 sm:mb-5">
            — Возможности
          </p>
          <h2 className="font-display text-balance text-[32px] sm:text-[42px] md:text-[58px] leading-[1] sm:leading-[0.98] font-black tracking-[-0.035em]">
            Все для контроля питания —<br className="hidden sm:block" />{" "}
            <span className="font-serif italic font-normal text-primary-deep">
              в одном приложении.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={(i % 4) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white p-4 shadow-soft transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-elevated sm:rounded-3xl sm:p-6 md:p-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(600px circle at 0% 0%, rgba(54,201,120,0.07), transparent 40%)",
                    }}
                  />

                  <div className="relative mb-4 sm:mb-6 md:mb-7">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-deep transition-all duration-500 group-hover:scale-[1.06]"
                      style={{
                        background: "linear-gradient(150deg, #F2FBF5 0%, #DDF2E5 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(17,24,39,0.04), 0 10px 24px -12px rgba(21,153,87,0.35)",
                      }}
                    >
                      <Icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-[14px] sm:text-[15.5px] tracking-tight leading-snug">
                    {it.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[12.5px] sm:text-[13.5px] text-muted-foreground leading-relaxed">
                    {it.text}
                  </p>

                  <div
                    aria-hidden
                    className="absolute left-4 right-4 sm:left-7 sm:right-7 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(21,153,87,0.4), transparent)",
                    }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
