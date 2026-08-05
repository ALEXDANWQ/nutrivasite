import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, LockKeyhole, Minus, Sparkles } from "lucide-react";
import { RUSTORE } from "./Header";

const ease = [0.22, 1, 0.36, 1] as const;

const freeFeatures = [
  "Дневник приёмов пищи и поиск продуктов",
  "Сканер штрихкодов и ручной ввод блюд",
  "Подсчёт калорий и КБЖУ за день",
  "Учёт выпитой воды и запись веса",
  "Дневная сводка и персональные цели",
  "Избранные продукты и шаблоны блюд",
];

const plusFeatures = [
  "Всё из Бесплатного тарифа",
  "AI-распознавание блюда и КБЖУ по фото",
  "AI-диетолог и ответы на вопросы по рациону",
  "Подробная аналитика питания за периоды",
  "Графики веса, калорий, белка и воды",
  "Анализ соблюдения целей и динамики",
];

type BillingPeriod = "month" | "year";

export function Pricing({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>("year");
  const isYear = period === "year";

  const priceData = useMemo(
    () =>
      isYear
        ? {
            value: "2 399",
            label: "₽ / год",
            hint: "Выгодный годовой тариф со скидкой 23%",
          }
        : {
            value: "259",
            label: "₽ / месяц",
            hint: "Гибкая помесячная оплата без долгосрочных обязательств",
          },
    [isYear],
  );

  return (
    <section
      id="pricing"
      className={compact ? "relative" : "relative overflow-hidden py-16 sm:py-24 lg:py-32"}
    >
      {/* Ambient background glows & subtle grid mask */}
      {!compact && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl sm:h-[650px] sm:w-[650px]"
            style={{ background: "radial-gradient(circle, #D9F1E3 0%, transparent 70%)" }}
            animate={{ x: [0, 25, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 left-10 h-[450px] w-[450px] rounded-full opacity-35 blur-3xl sm:h-[600px] sm:w-[600px]"
            style={{ background: "radial-gradient(circle, #EEF8F1 0%, transparent 70%)" }}
            animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-3xl text-center mb-10 sm:mb-14"
          >
            <h2 className="font-display text-balance text-[36px] font-black leading-[1.12] tracking-[-0.04em] sm:text-[52px] md:text-[64px]">
              Выберите свой{" "}
              <span className="inline-block px-1.5 font-serif font-normal italic tracking-[-0.02em] text-primary-deep">
                ритм
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-[17px]">
              Начните бесплатно — и переходите на Plus, когда захотите получить умные AI-инструменты
              и максимальное удобство отслеживания.
            </p>
          </motion.div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-8">
          {/* Free Card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="group relative flex h-full min-w-0 flex-col rounded-3xl border border-[color:var(--hairline)] bg-white/90 p-6 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-elevated sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-deep">
                  Базовый тариф
                </p>
                <h3 className="mt-2 font-display text-[38px] font-black leading-none tracking-tight text-slate-900 sm:text-[46px]">
                  NUTRIVA
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-200/60 bg-emerald-50 px-3.5 py-1.5 text-[12px] font-bold text-emerald-800 shadow-xs">
                Бесплатно
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Удобный стартовый тариф для комфортного ежедневного контроля калорий, воды и рациона
              без каких-либо плат.
            </p>

            <div className="my-6 h-px bg-emerald-900/10 sm:my-7" />

            {/* Price Block in Free Card matching Plus styling */}
            <div className="flex items-center justify-between min-h-[62px]">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[52px] font-bold leading-none tracking-[0.05em] text-primary-deep sm:text-[62px]">
                  0
                </span>
                <span className="text-[15px] font-semibold text-slate-600">₽ / навсегда</span>
              </div>
            </div>

            <div className="my-6 h-px bg-emerald-900/10 sm:my-7" />

            <ul className="space-y-3.5 sm:space-y-4">
              {freeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[14px] font-medium text-slate-700 sm:text-[15px]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-700">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <p className="mb-3 text-center text-[12px] font-medium text-slate-500">
                Без привязки банковской карты
              </p>
              <a
                href={RUSTORE}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border-2 border-emerald-700/25 bg-white px-5 py-3 text-[15px] font-bold text-emerald-800 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-700/40 hover:bg-emerald-50/60 active:translate-y-0"
              >
                <span>Начать бесплатно</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </motion.article>

          {/* Plus Card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.78, delay: 0.08, ease }}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-white via-emerald-50/30 to-emerald-100/20 p-6 shadow-elevated backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            {/* Soft decorative glow overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-2xl"
              style={{ background: "radial-gradient(circle, #36C978 0%, transparent 70%)" }}
            />

            <div className="relative flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-deep">
                  Максимум возможностей
                </p>
                <h3 className="mt-2 font-display text-[38px] font-black leading-none tracking-tight text-slate-900 sm:text-[46px]">
                  NUTRIVA{" "}
                  <span className="font-serif font-normal italic tracking-[-0.02em] text-primary-deep">
                    Plus
                  </span>
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-white/95 px-3.5 py-1.5 text-[12px] font-bold text-primary-deep shadow-xs backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 fill-primary-deep/20 text-primary-deep animate-pulse" />
                Рекомендуем
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Максимальное удобство и расширенные возможности: AI-сканирование блюд по фото, умный
              AI-диетолог и глубокая аналитика.
            </p>

            <div className="my-6 h-px bg-emerald-900/10 sm:my-7" />

            {/* Price & Period Switcher Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 min-h-[62px]">
              <div className="relative overflow-hidden py-1">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={period}
                    initial={{ opacity: 0, y: isYear ? -4 : 4, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: isYear ? 4 : -4, filter: "blur(2px)" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="font-serif text-[52px] font-bold leading-none tracking-[0.05em] text-primary-deep sm:text-[62px]">
                      {priceData.value}
                    </span>
                    <span className="text-[15px] font-semibold text-slate-600">
                      {priceData.label}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Period Switcher placed on the right */}
              <div
                role="radiogroup"
                aria-label="Период оплаты подписки NUTRIVA Plus"
                className="mobile-pricing-period relative inline-flex items-center rounded-full border border-emerald-500/20 bg-white/95 p-1.5 shadow-xs backdrop-blur-md sm:ml-auto"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isYear}
                  onClick={() => setPeriod("month")}
                  className={`relative z-10 inline-flex min-h-10 items-center justify-center rounded-full px-4 text-[13.5px] font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-deep ${
                    !isYear ? "text-primary-deep" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {!isYear && (
                    <motion.div
                      layoutId="billingPill"
                      className="absolute inset-0 rounded-full border border-emerald-500/25 bg-gradient-to-r from-emerald-50 to-emerald-100/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">Месяц</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={isYear}
                  onClick={() => setPeriod("year")}
                  className={`relative z-10 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full px-4 text-[13.5px] font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-deep ${
                    isYear ? "text-primary-deep" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isYear && (
                    <motion.div
                      layoutId="billingPill"
                      className="absolute inset-0 rounded-full border border-emerald-500/25 bg-gradient-to-r from-emerald-50 to-emerald-100/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    Год
                    <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-extrabold tracking-tight text-white shadow-xs">
                      -23%
                    </span>
                  </span>
                </button>
              </div>
            </div>

            <div className="my-6 h-px bg-emerald-900/10 sm:my-7" />

            {/* Benefits List */}
            <ul className="space-y-3.5 sm:space-y-4">
              {plusFeatures.map((feature, idx) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[14px] font-medium text-slate-700 sm:text-[15px]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs">
                    <Check className="h-3.5 w-3.5 stroke-[2.8]" />
                  </span>
                  <span className={idx === 0 ? "font-bold text-slate-900" : ""}>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Footer / Action */}
            <div className="mt-auto pt-8">
              <p className="mb-3 flex items-center justify-center gap-1.5 text-center text-[12px] font-medium text-slate-500">
                <LockKeyhole className="h-3.5 w-3.5 text-slate-400" />
                Безопасная оплата. Отменить можно в любой момент.
              </p>

              <a
                href={RUSTORE}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta relative inline-flex min-h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 text-[15px] font-bold text-white shadow-elevated transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #36C978 0%, #159957 100%)",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={priceData.value}
                    initial={{ opacity: 0, y: isYear ? -4 : 4, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: isYear ? 4 : -4, filter: "blur(2px)" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    <span>Оформить Plus за {priceData.value} ₽</span>
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/cta:translate-x-1" />
                  </motion.div>
                </AnimatePresence>
              </a>
            </div>
          </motion.article>
        </div>

        {/* Footer Guarantee Note */}
        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-[12px] leading-relaxed text-slate-500 sm:mt-12 sm:text-[13px]">
          <Minus className="h-4 w-4 shrink-0 text-primary-deep" />
          <span>NUTRIVA бережно помогает выстроить привычки — без жёстких ограничений.</span>
        </div>
      </div>
    </section>
  );
}
