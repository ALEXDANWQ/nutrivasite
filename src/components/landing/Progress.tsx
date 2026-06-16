import { Reveal } from "./Section";
import { WeightTrendCard } from "./WeightTrendCard";

export function Progress() {
  return (
    <section id="progress" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:gap-14 sm:px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep sm:mb-5">
            - Прогресс
          </p>
          <h2 className="font-display text-balance text-[32px] font-black leading-[1] tracking-[-0.035em] sm:text-[42px] sm:leading-[0.98] md:text-[58px]">
            Видите прогресс,
            <br />
            <span className="font-serif font-normal italic text-primary-deep">а не просто цифры.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-[17px]">
            Следите за весом, водой, калориями и БЖУ в понятной статистике. NUTRIVA помогает замечать динамику и
            держать питание под контролем.
          </p>
          <div className="mt-7 grid max-w-md grid-cols-3 gap-2.5 sm:mt-8 sm:gap-4">
            {[
              { value: "7", label: "дней подряд" },
              { value: "-1.2кг", label: "за месяц" },
              { value: "92%", label: "норма воды" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold tracking-tight sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <WeightTrendCard
            value="72.4 кг"
            delta="-1.2 кг"
            points={[74.3, 73.8, 73.6, 72.9, 73.1, 72.5, 72.3, 72.0, 72.4]}
            stats={[
              { label: "Калории", value: "71%", color: "#36C978", width: "71%" },
              { label: "Вода", value: "1.4л", color: "#7BD9A6", width: "56%" },
              { label: "Белки", value: "78г", color: "#159957", width: "70%" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
