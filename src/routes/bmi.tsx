import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/landing/Footer";
import { Header, RUSTORE } from "@/components/landing/Header";
import { IconArrowDown, IconBolt, IconLeaf, IconScale } from "@/components/landing/Icons";

export const Route = createFileRoute("/bmi")({
  head: () => ({
    meta: [
      { title: "Расчет ИМТ - NUTRIVA" },
      {
        name: "description",
        content:
          "Удобный калькулятор индекса массы тела: рассчитайте ИМТ, категорию веса и ориентир по диапазону.",
      },
      { property: "og:title", content: "Расчет ИМТ - NUTRIVA" },
      { property: "og:description", content: "Калькулятор индекса массы тела от NUTRIVA." },
    ],
  }),
  component: BMIPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

type Category = {
  label: string;
  color: string;
  note: string;
};

const categories = [
  { label: "Недостаточный вес", color: "#60A5FA", note: "Ниже рекомендуемого диапазона." },
  {
    label: "Нормальный вес",
    color: "#159957",
    note: "Комфортный диапазон для большинства взрослых.",
  },
  { label: "Избыточный вес", color: "#F59E0B", note: "Выше рекомендуемого диапазона." },
  { label: "Ожирение", color: "#EF4444", note: "Лучше сверить показатель со специалистом." },
] satisfies Category[];

function categorize(bmi: number) {
  if (bmi < 18.5) {
    return categories[0];
  }
  if (bmi < 25) {
    return categories[1];
  }
  if (bmi < 30) {
    return categories[2];
  }
  return categories[3];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getBmiIndicatorPosition(bmi: number) {
  if (bmi <= 18.5) {
    return clamp((bmi / 18.5) * 24, 4, 24);
  }
  if (bmi <= 25) {
    return 24 + ((bmi - 18.5) / 6.5) * 26;
  }
  if (bmi <= 30) {
    return 50 + ((bmi - 25) / 5) * 24;
  }
  return clamp(74 + ((bmi - 30) / 10) * 26, 74, 96);
}

function BMIPage() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [hasEditedValues, setHasEditedValues] = useState(false);
  const [showWeightPlanNotice, setShowWeightPlanNotice] = useState(false);

  const bmi = height > 0 ? weight / (height / 100) ** 2 : 0;
  const safeBmi = Number.isFinite(bmi) ? bmi : 0;
  const category = categorize(safeBmi || 22);
  const indicator = getBmiIndicatorPosition(safeBmi);
  const isBelowNorm = safeBmi > 0 && safeBmi < 18.5;
  const isAboveNorm = safeBmi >= 25;
  const isOutsideNorm = isBelowNorm || isAboveNorm;

  useEffect(() => {
    if (!hasEditedValues || !isOutsideNorm) {
      setShowWeightPlanNotice(false);
      return;
    }

    setShowWeightPlanNotice(false);
    const timeoutId = window.setTimeout(() => {
      setShowWeightPlanNotice(true);
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [height, weight, hasEditedValues, isOutsideNorm]);

  const handleHeightChange = (nextValue: number) => {
    setHeight(nextValue);
    setHasEditedValues(true);
  };

  const handleWeightChange = (nextValue: number) => {
    setWeight(nextValue);
    setHasEditedValues(true);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <Header />

      <section className="relative pb-12 pt-20 sm:pt-30 md:pb-24 md:pt-34">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-5 md:px-8">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="mx-auto max-w-xl text-center sm:max-w-2xl"
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-primary-deep">
              Калькулятор
            </p>
            <h1 className="font-display text-balance text-[32px] font-black leading-none tracking-tight sm:text-[44px] md:text-[52px]">
              Расчет <span className="font-serif font-normal italic text-primary-deep">ИМТ</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
              Введите рост и вес. NUTRIVA покажет индекс массы тела и здоровый ориентир.
            </p>
          </motion.div>

          <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mx-auto mt-7 w-full max-w-[360px] overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/94 shadow-[0_22px_70px_-48px_rgba(17,24,39,0.28)] backdrop-blur-xl sm:mt-9 sm:max-w-full sm:rounded-[1.9rem]"
          >
            <div className="grid min-w-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="min-w-0 p-4 sm:p-7 lg:p-8">
                <div className="mb-6 sm:mb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Параметры
                  </p>
                  <h2 className="mt-2 text-[24px] font-black tracking-tight">Ваши данные</h2>
                </div>

                <Field
                  label="Рост"
                  unit="см"
                  value={height}
                  min={120}
                  max={220}
                  onChange={handleHeightChange}
                />
                <div className="my-5 h-px bg-[color:var(--hairline)] sm:my-6" />
                <Field
                  label="Вес"
                  unit="кг"
                  value={weight}
                  min={30}
                  max={200}
                  onChange={handleWeightChange}
                />
              </div>

              <div className="min-w-0 border-t border-[color:var(--hairline)] p-4 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Ваш ИМТ
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <span
                        className="font-display text-[52px] font-black leading-none tracking-tight sm:text-[72px]"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {safeBmi.toFixed(1)}
                      </span>
                      <span className="pb-2 text-[13px] font-semibold text-muted-foreground">
                        кг/м²
                      </span>
                    </div>
                  </div>

                  <div
                    className="inline-flex w-fit rounded-full px-3.5 py-2 text-[12px] font-black sm:px-4 sm:text-[13px]"
                    style={{ background: `${category.color}16`, color: category.color }}
                  >
                    {category.label}
                  </div>
                </div>

                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-slate-600">
                  {category.note}
                </p>

                <div className="mt-8 min-w-0">
                  <div className="relative h-9">
                    <div
                      className="absolute inset-x-0 top-[13px] h-1.5 rounded-full sm:top-3 sm:h-2"
                      style={{
                        background:
                          "linear-gradient(90deg,#60A5FA 0% 24%,#159957 24% 50%,#F59E0B 50% 74%,#EF4444 74% 100%)",
                      }}
                    />
                    <motion.div
                      className="absolute top-0 h-8 w-8 -translate-x-1/2 rounded-full border-[5px] border-white shadow-[0_16px_34px_-18px_rgba(17,24,39,0.55)] sm:border-[6px]"
                      style={{ background: category.color, left: `${indicator}%` }}
                      animate={{ left: `${indicator}%` }}
                      transition={{ duration: 0.7, ease }}
                    />
                  </div>

                  <div className="relative mt-1 h-4 text-[10px] font-semibold text-muted-foreground">
                    <span className="absolute -translate-x-1/2" style={{ left: "24%" }}>
                      18.5
                    </span>
                    <span className="absolute -translate-x-1/2" style={{ left: "50%" }}>
                      25
                    </span>
                    <span className="absolute -translate-x-1/2" style={{ left: "74%" }}>
                      30
                    </span>
                    <span className="absolute right-0">40</span>
                  </div>
                </div>

                <p className="mt-7 max-w-lg text-[12px] leading-relaxed text-muted-foreground">
                  ИМТ не учитывает состав тела и индивидуальные особенности. Используйте показатель
                  как общий ориентир.
                </p>
              </div>
            </div>
          </motion.section>

          <AnimatePresence initial={false}>
            {showWeightPlanNotice ? (
              <BmiPlanNotice tone={isBelowNorm ? "below" : "above"} />
            ) : null}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function BmiPlanNotice({ tone }: { tone: "below" | "above" }) {
  const copy =
    tone === "below"
      ? {
          eyebrow: "ИМТ ниже нормы",
          title: "Соберите мягкий план восстановления",
          body: "NUTRIVA поможет следить за питанием, добирать калории и белок, видеть воду, вес и динамику в одном месте. Так проще составить спокойный план для грамотной нормализации веса без хаотичных решений.",
        }
      : {
          eyebrow: "ИМТ выше нормы",
          title: "Нормализуйте вес без резких ограничений",
          body: "NUTRIVA поможет держать питание под контролем: калории, БЖУ, воду, привычки и прогресс. Приложение подскажет понятный план действий для грамотной нормализации веса без жестких диет.",
        };

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.5, ease }}
      className="relative mx-auto mt-4 w-full max-w-[360px] overflow-hidden rounded-[1.55rem] border border-emerald-100/80 bg-white/92 p-4 shadow-[0_18px_56px_-36px_rgba(21,153,87,0.32)] backdrop-blur-xl sm:mt-5 sm:max-w-full sm:rounded-[1.75rem] sm:p-6 md:p-7"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(247,253,249,0.96) 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary-deep/30 to-transparent sm:inset-x-8"
      />

      <div className="relative grid gap-4 sm:gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-mint/60 text-primary-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_28px_-24px_rgba(21,153,87,0.65)] sm:h-12 sm:w-12">
          <IconLeaf className="h-5 w-5" />
        </div>

        <div className="min-w-0 max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-deep sm:text-[11px]">
            {copy.eyebrow}
          </p>
          <h3 className="mt-2 max-w-xl font-display text-[22px] font-black leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[28px] md:text-[32px]">
            {copy.title}
          </h3>
          <p className="bmi-notice-copy mt-2.5 text-[13.5px] leading-relaxed text-slate-600 sm:text-[15px]">
            {copy.body}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { icon: IconScale, label: "вес" },
              { icon: IconBolt, label: "БЖУ" },
              { icon: IconLeaf, label: "план" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/70 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:px-3 sm:text-[11px]"
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            ))}
          </div>

        </div>

        <a
          href={RUSTORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 text-[14px] font-black text-white shadow-soft transition-all hover:-translate-y-0.5 hover:scale-[1.01] sm:w-auto sm:px-6 sm:text-[15px]"
          style={{ background: "linear-gradient(135deg, #0B1B2A 0%, #102016 100%)" }}
        >
          <IconArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
          Скачать NUTRIVA
        </a>
      </div>
    </motion.div>
  );
}

function Field({
  label,
  unit,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  onChange: (nextValue: number) => void;
}) {
  const progress = clamp(((value - min) / (max - min)) * 100, 0, 100);

  return (
    <div className="min-w-0">
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </label>
          <p className="mt-1 text-[13px] text-slate-500">
            {min}-{max} {unit}
          </p>
        </div>
        <div className="flex shrink-0 items-baseline gap-1">
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(event) => onChange(clamp(Number(event.target.value) || min, min, max))}
            className="w-[70px] bg-transparent text-right font-display text-[26px] font-black leading-none tracking-tight outline-none transition-colors focus:text-primary-deep sm:w-[88px] sm:text-[32px]"
          />
          <span className="pb-1 text-[13px] font-semibold text-muted-foreground">{unit}</span>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="nutriva-range mt-4 w-full min-w-0 cursor-pointer appearance-none rounded-full bg-secondary accent-[color:var(--primary-deep)]"
        style={{
          background: `linear-gradient(90deg, var(--primary-deep) ${progress}%, var(--secondary) ${progress}%)`,
        }}
      />

      <div className="mt-2 flex justify-between text-[10px] font-semibold text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
