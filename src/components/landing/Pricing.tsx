import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, LockKeyhole, Sparkles } from "lucide-react";
import { RUSTORE } from "./Header";

const ease = [0.22, 1, 0.36, 1] as const;

const freeFeatures = [
  "Дневник питания и калорий",
  "Учёт БЖУ и воды",
  "База продуктов и сканер",
  "Базовая динамика веса",
];

const plusFeatures = [
  "Расширенная аналитика прогресса",
  "Персональные рекомендации",
  "Умное планирование питания",
  "Приоритетная поддержка",
];

type BillingPeriod = "month" | "year";

export function Pricing({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>("year");
  const isYear = period === "year";
  const price = useMemo(
    () => (isYear ? { value: "1 899", suffix: "₽ / год" } : { value: "199", suffix: "₽ / месяц" }),
    [isYear],
  );

  return (
    <section id="pricing" className={compact ? "relative" : "relative py-14 sm:py-20 lg:py-28"}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[22%] -z-10 h-[58%] bg-[radial-gradient(ellipse_at_center,rgba(184,232,195,0.28),transparent_67%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-8">
        {!compact ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-balance text-[34px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[48px] md:text-[58px]">
              Выберите свой <span className="font-serif font-normal italic text-primary-deep">ритм</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-[17px]">
              Начните бесплатно — и переходите на Plus, когда захотите получить больше ясности и опоры на пути к цели.
            </p>
          </motion.div>
        ) : null}

        <div className={`${compact ? "" : "mt-9 sm:mt-12"} grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:gap-6`}>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="flex min-w-0 flex-col rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_24px_80px_-52px_rgba(17,24,39,0.32)] sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-deep">Свободный доступ</p>
            <h3 className="mt-4 font-serif text-[46px] leading-none tracking-[-0.05em] text-[#11372c] sm:text-[56px]">Бесплатно</h3>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">Всё нужное, чтобы спокойно начать и собрать первые привычки.</p>
            <div className="my-6 h-px bg-[color:var(--hairline)] sm:my-7" />
            <ul className="space-y-3.5 sm:space-y-4">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[14px] font-medium text-slate-700 sm:text-[15px]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-primary-deep"><Check className="h-4 w-4 stroke-[2.4]" /></span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={RUSTORE} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border border-[#17684f] px-5 py-3 text-[15px] font-bold text-[#17684f] transition-all hover:-translate-y-0.5 hover:bg-[#effaf3] active:translate-y-0">
              Начать бесплатно <ChevronRight className="h-4 w-4" />
            </a>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.78, delay: 0.08, ease }}
            className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-[2rem] bg-[#0c382a] p-5 text-white shadow-[0_32px_100px_-42px_rgba(11,55,42,0.72)] sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(177,245,203,0.19),transparent_30%),radial-gradient(circle_at_0%_100%,rgba(42,146,101,0.18),transparent_35%)]" />
            <div aria-hidden className="absolute right-[15%] top-0 -z-10 h-40 w-40 rounded-full bg-[#a7f3c1]/10 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b7f2c9]">Подписка</p>
                <h3 className="mt-4 font-serif text-[46px] leading-none tracking-[-0.05em] sm:text-[56px]">NUTRIVA <span className="text-[#b7f2c9]">Plus</span></h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-[#d8ffe4] backdrop-blur-sm"><Sparkles className="h-3.5 w-3.5" /> Рекомендуем</span>
            </div>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/70 sm:text-[15px]">Больше понимания, мягкая поддержка и инструменты, которые помогают держать курс.</p>
            <div className="my-6 h-px bg-white/15 sm:my-7" />
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <div>
                <motion.span key={price.value} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, ease }} className="block font-serif text-[48px] leading-none tracking-[-0.05em] text-[#b7f2c9] sm:text-[58px]">{price.value}</motion.span>
                <span className="mt-1 block text-[13px] font-medium text-white/70">{price.suffix}</span>
              </div>
              {isYear ? <span className="mb-1 rounded-full bg-[#b7f2c9] px-3 py-1.5 text-[12px] font-black text-[#0c382a]">Выгоднее на 489 ₽</span> : null}
            </div>
            <div className="mt-6">
              <div className="relative h-10 px-1">
                <div className="absolute left-1 right-1 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/20" />
                <motion.div className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#b7f2c9]" animate={{ left: isYear ? "50%" : "0.25rem", right: isYear ? "0.25rem" : "50%" }} transition={{ type: "spring", stiffness: 260, damping: 26 }} />
                <button type="button" aria-label="Оплата за месяц" aria-pressed={!isYear} onClick={() => setPeriod("month")} className="absolute left-0 top-0 flex h-10 w-1/2 items-center justify-start pl-1 focus:outline-none">
                  <span className={`${!isYear ? "scale-100 border-[#b7f2c9] bg-white text-[#0c382a]" : "scale-75 border-white/40 bg-[#0c382a] text-transparent"} relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300`}>{!isYear ? <Check className="h-4 w-4 stroke-[3]" /> : null}</span>
                </button>
                <button type="button" aria-label="Оплата за год" aria-pressed={isYear} onClick={() => setPeriod("year")} className="absolute right-0 top-0 flex h-10 w-1/2 items-center justify-end pr-1 focus:outline-none">
                  <span className={`${isYear ? "scale-100 border-[#b7f2c9] bg-white text-[#0c382a]" : "scale-75 border-white/40 bg-[#0c382a] text-transparent"} relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300`}>{isYear ? <Check className="h-4 w-4 stroke-[3]" /> : null}</span>
                </button>
              </div>
              <div className="mt-1 grid grid-cols-2 text-[12px] font-medium"><span className={`${!isYear ? "text-[#d8ffe4]" : "text-white/50"} transition-colors`}>Ежемесячно</span><span className={`${isYear ? "text-[#d8ffe4] text-right" : "text-right text-white/50"} transition-colors`}>Ежегодно</span></div>
            </div>
            <div className="my-6 h-px bg-white/15 sm:my-7" />
            <ul className="grid gap-3.5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
              {plusFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[14px] font-medium text-white/90 sm:text-[15px]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b7f2c9] text-[#0c382a]"><Check className="h-4 w-4 stroke-[2.5]" /></span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={RUSTORE} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#b7f2c9] px-5 py-3 text-[15px] font-black text-[#0c382a] shadow-[0_20px_40px_-20px_rgba(183,242,201,0.58)] transition-all hover:-translate-y-0.5 hover:bg-[#d5ffe0] active:translate-y-0">Выбрать Plus <ChevronRight className="h-4 w-4" /></a>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-white/55"><LockKeyhole className="h-3.5 w-3.5" /> Безопасная оплата. Отменить можно в любой момент.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
