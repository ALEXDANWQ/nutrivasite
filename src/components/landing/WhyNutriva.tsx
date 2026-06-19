import { Reveal } from "./Section";
import { IconBolt, IconEye, IconLeaf } from "./Icons";

const items = [
  {
    icon: IconBolt,
    title: "Понимайте рацион",
    text: "Видите, что вы едите, сколько калорий получаете и где рацион чаще всего выходит за цель.",
    n: "01",
  },
  {
    icon: IconEye,
    title: "Следите за динамикой",
    text: "Вес, вода, БЖУ и прогресс находятся рядом, поэтому картину проще оценивать целиком.",
    n: "02",
  },
  {
    icon: IconLeaf,
    title: "Действуйте спокойно",
    text: "NUTRIVA помогает наблюдать и корректировать привычки без жестких обещаний и давления.",
    n: "03",
  },
];

export function WhyNutriva() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#EEF8F1]/50 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary-deep font-bold mb-4 sm:mb-5">
            — Зачем нужен NUTRIVA
          </p>
          <h2 className="font-display text-balance text-[32px] sm:text-[42px] md:text-[58px] leading-[1] sm:leading-[0.98] font-black tracking-[-0.035em] max-w-3xl mx-auto">
            Понимайте рацион, а не гадайте
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Когда питание не записано, сложно понять, почему вес стоит, почему не хватает белка или
            почему дневная норма постоянно превышается. NUTRIVA помогает видеть картину целиком: что
            вы едите, сколько калорий получаете, как меняется вес и насколько стабильно вы
            двигаетесь к цели.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.1}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 text-left backdrop-blur-md transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-elevated sm:rounded-3xl sm:p-8"
                  style={{
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.8) inset, 0 12px 40px -16px rgba(17,24,39,0.10)",
                  }}
                >
                  <div className="flex items-start justify-between mb-6 sm:mb-8">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-primary-deep transition-transform duration-500 group-hover:scale-[1.06]"
                      style={{
                        background: "linear-gradient(150deg, #FFFFFF 0%, #EAF6EF 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,1), 0 1px 2px rgba(17,24,39,0.04), 0 14px 30px -14px rgba(21,153,87,0.35)",
                      }}
                    >
                      <Icon className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <span className="font-serif italic text-2xl sm:text-3xl text-primary-deep/40 leading-none">
                      {it.n}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 text-[13.5px] sm:text-[14px] text-muted-foreground leading-relaxed">
                    {it.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
