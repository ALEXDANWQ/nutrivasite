import { Reveal } from "./Section";
import { IconScan, IconPlus, IconStar, IconDiary, IconBottle } from "./Icons";

const cards = [
  { icon: IconScan, t: "Сканируйте штрихкод" },
  { icon: IconPlus, t: "Добавляйте свои продукты" },
  { icon: IconStar, t: "Сохраняйте избранное" },
  { icon: IconDiary, t: "Повторяйте частые приемы пищи" },
];

export function Products() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:gap-14 sm:px-5 md:px-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary-deep font-bold mb-4 sm:mb-5">
            — База продуктов
          </p>
          <h2 className="font-display text-balance text-[32px] sm:text-[42px] md:text-[58px] leading-[1] sm:leading-[0.98] font-black tracking-[-0.035em]">
            Добавляйте продукты{" "}
            <span className="font-serif italic font-normal text-primary-deep">так, как удобно.</span>
          </h2>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cards.map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="group relative rounded-2xl bg-white border border-[color:var(--hairline)] p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl flex items-center justify-center text-primary-deep transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{
                    background: "linear-gradient(150deg, #F2FBF5 0%, #DDF2E5 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px -12px rgba(21,153,87,0.35)",
                  }}
                >
                  <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                </div>
                <span className="text-[13.5px] sm:text-[14px] font-semibold tracking-tight leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 -m-8 rounded-[3rem] -z-10 blur-3xl opacity-70"
              style={{ background: "radial-gradient(circle at 70% 30%, #D9F1E3 0%, transparent 60%)" }}
            />
            <div className="rounded-3xl sm:rounded-[2rem] bg-white border border-[color:var(--hairline)] shadow-elevated p-5 sm:p-7 md:p-9 max-w-md mx-auto">
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-primary-deep"
                  style={{
                    background: "linear-gradient(150deg, #F2FBF5 0%, #DDF2E5 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 10px 24px -12px rgba(21,153,87,0.35)",
                  }}
                >
                  <IconBottle className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold truncate">
                    Молочные продукты
                  </p>
                  <p className="font-bold text-[17px] sm:text-[19px] leading-tight tracking-tight mt-0.5 truncate">
                    Греческий йогурт
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground mt-0.5">120 ккал · 100 г</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6 sm:mt-7">
                {[
                  { l: "Белки", v: "10 г" },
                  { l: "Жиры", v: "4 г" },
                  { l: "Углеводы", v: "6 г" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-xl p-2.5 sm:p-3 text-center border border-[color:var(--hairline)]"
                    style={{ background: "linear-gradient(180deg, #FAFBFC 0%, #F4F6F7 100%)" }}
                  >
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">{m.l}</p>
                    <p className="font-bold mt-0.5 text-[13px] sm:text-base">{m.v}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 sm:mt-5">
                <button
                  className="min-h-11 rounded-2xl py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.02] sm:rounded-xl sm:py-3 sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
                >
                  Добавить
                </button>
                <button className="min-h-11 rounded-2xl border border-[color:var(--hairline)] bg-white py-2.5 text-[13px] font-semibold transition-colors hover:bg-secondary sm:rounded-xl sm:py-3 sm:text-sm">
                  В избранное
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
