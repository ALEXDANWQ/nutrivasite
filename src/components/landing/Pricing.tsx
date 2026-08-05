import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight, Leaf, LockKeyhole, Minus, Sparkles } from "lucide-react";
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

function VineFrame() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 1.5, ease };
  const leaves = [
    [146, 538, -20],
    [10, 440, 26],
    [157, 293, -27],
    [59, 391, 18],
  ];
  const plant = (side: "left" | "right") => (
    <motion.svg
      viewBox="0 0 250 640"
      className={`absolute -bottom-3 h-[640px] w-[250px] text-[#4f9870]/45 ${side === "left" ? "-left-6" : "-right-6 scale-x-[-1]"}`}
      fill="none"
    >
      <motion.path
        d="M23 640C15 543 53 526 65 444c11-72-26-110 20-174 35-48 64-41 69-107"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: side === "right" && !reduceMotion ? 0.16 : 0 }}
      />
      <motion.path
        d="M65 500c43-2 59 23 84 42M72 429c-33-18-48-4-61 12M94 345c37 0 54-25 62-49"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: reduceMotion ? 0 : 0.42 }}
      />
      {leaves.map(([x, y, rotate], index) => (
        <motion.ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="10"
          ry="20"
          fill="currentColor"
          opacity="0.32"
          transform={`rotate(${rotate} ${x} ${y})`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.32, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : 0.68 + index * 0.1,
            ease,
          }}
        />
      ))}
    </motion.svg>
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 top-24 hidden overflow-hidden lg:block"
    >
      {plant("left")}
      {plant("right")}
    </div>
  );
}

export function Pricing({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>("year");
  const isYear = period === "year";
  const price = useMemo(
    () =>
      isYear
        ? { value: "1 899", label: "₽ в год", note: "Экономия 489 ₽ за год" }
        : { value: "199", label: "₽ в месяц", note: "Гибкая помесячная оплата" },
    [isYear],
  );
  return (
    <section
      id="pricing"
      className={compact ? "relative" : "relative overflow-hidden py-16 sm:py-24 lg:py-30"}
    >
      <VineFrame />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[28%] -z-10 h-[52%] bg-[radial-gradient(ellipse_at_center,rgba(202,244,216,0.42),transparent_66%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-8">
        {!compact ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-balance text-[34px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[48px] md:text-[58px]">
              Выберите свой{" "}
              <span className="font-serif font-normal italic text-primary-deep">ритм</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-[17px]">
              Начните бесплатно — и переходите на Plus, когда захотите получить больше ясности и
              опоры на пути к цели.
            </p>
          </motion.div>
        ) : null}
        <div
          className={`${compact ? "" : "mt-9 sm:mt-12"} grid gap-4 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6`}
        >
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="flex min-w-0 flex-col rounded-[2rem] border border-[#e6eee9] bg-white p-5 shadow-[0_24px_80px_-56px_rgba(17,55,40,0.32)] sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-deep">
              Свободный доступ
            </p>
            <h3 className="mt-4 font-serif text-[46px] leading-none tracking-[-0.05em] text-[#11372c] sm:text-[56px]">
              Бесплатно
            </h3>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Всё нужное, чтобы спокойно начать и собрать первые привычки.
            </p>
            <div className="my-6 h-px bg-[#e6eee9] sm:my-7" />
            <ul className="space-y-3.5 sm:space-y-4">
              {freeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[14px] font-medium text-slate-700 sm:text-[15px]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-primary-deep">
                    <Check className="h-4 w-4 stroke-[2.4]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <p className="mb-3 text-[12px] font-medium text-slate-500">
                0 ₽ · без привязки карты
              </p>
              <a
                href={RUSTORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border border-[#17684f] px-5 py-3 text-[15px] font-bold text-[#17684f] transition-all hover:-translate-y-0.5 hover:bg-[#effaf3] active:translate-y-0"
              >
                Начать бесплатно <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.78, delay: 0.08, ease }}
            className="relative flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-[#bce8ca] bg-[#f7fffa] p-5 text-[#11372c] shadow-[0_32px_100px_-48px_rgba(32,130,79,0.42)] sm:rounded-[2.25rem] sm:p-8 lg:p-9"
          >
            <div
              aria-hidden
              className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#cbf5d7]/65 blur-3xl"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-deep">
                  Подписка
                </p>
                <h3 className="mt-4 font-serif text-[46px] leading-none tracking-[-0.05em] sm:text-[56px]">
                  NUTRIVA <span className="text-primary-deep">Plus</span>
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#c7efd3] bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-primary-deep">
                <Sparkles className="h-3.5 w-3.5" /> Рекомендуем
              </span>
            </div>
            <p className="relative mt-4 max-w-md text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Больше понимания, мягкая поддержка и инструменты, которые помогают держать курс.
            </p>
            <div className="relative my-6 h-px bg-[#d8eddf] sm:my-7" />
            <div className="relative grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] sm:items-end">
              <div>
                <motion.span
                  key={price.value}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease }}
                  className="block font-serif text-[50px] leading-none tracking-[-0.05em] text-primary-deep sm:text-[60px]"
                >
                  {price.value}
                </motion.span>
                <span className="mt-1 block text-[13px] font-medium text-slate-600">
                  {price.label}
                </span>
              </div>
              <p className="rounded-2xl border border-[#d3f0dc] bg-white/85 px-3 py-2 text-[12px] font-bold leading-snug text-primary-deep">
                {price.note}
              </p>
            </div>
            <div className="relative mt-6 rounded-2xl border border-[#d8eddf] bg-white/82 p-2.5 sm:p-3">
              <div className="relative h-11">
                <div className="absolute inset-x-2 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#e7f1ea]" />
                <motion.div
                  className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#76d996]"
                  animate={{ left: isYear ? "50%" : "0.5rem", right: isYear ? "0.5rem" : "50%" }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                />
                <button
                  type="button"
                  aria-label="Оплата за месяц"
                  aria-pressed={!isYear}
                  onClick={() => setPeriod("month")}
                  className="absolute left-0 top-0 flex h-11 w-1/2 items-center justify-start pl-2 focus:outline-none"
                >
                  <span
                    className={`${!isYear ? "scale-100 border-[#5ebf7c] bg-white text-primary-deep shadow-[0_5px_14px_-6px_rgba(21,110,62,0.46)]" : "scale-75 border-[#a9cbb4] bg-[#f7fffa] text-transparent"} relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300`}
                  >
                    {!isYear ? <Check className="h-4 w-4 stroke-[3]" /> : null}
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Оплата за год"
                  aria-pressed={isYear}
                  onClick={() => setPeriod("year")}
                  className="absolute right-0 top-0 flex h-11 w-1/2 items-center justify-end pr-2 focus:outline-none"
                >
                  <span
                    className={`${isYear ? "scale-100 border-[#5ebf7c] bg-white text-primary-deep shadow-[0_5px_14px_-6px_rgba(21,110,62,0.46)]" : "scale-75 border-[#a9cbb4] bg-[#f7fffa] text-transparent"} relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300`}
                  >
                    {isYear ? <Check className="h-4 w-4 stroke-[3]" /> : null}
                  </span>
                </button>
              </div>
              <div className="mt-1 grid grid-cols-2 px-1 text-[12px] font-semibold">
                <span className={!isYear ? "text-primary-deep" : "text-slate-400"}>Ежемесячно</span>
                <span
                  className={isYear ? "text-right text-primary-deep" : "text-right text-slate-400"}
                >
                  Ежегодно
                </span>
              </div>
            </div>
            <div className="relative my-6 h-px bg-[#d8eddf] sm:my-7" />
            <ul className="relative grid gap-3.5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
              {plusFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[14px] font-medium text-slate-700 sm:text-[15px]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d9f7e2] text-primary-deep">
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="relative mt-auto pt-8">
              <div className="mb-3 flex items-center gap-2 text-[12px] text-slate-500">
                <Leaf className="h-3.5 w-3.5 text-primary-deep" /> Все преимущества Plus в одном
                тарифе
              </div>
              <a
                href={RUSTORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#82dfa0] px-5 py-3 text-[15px] font-black text-[#103b2b] shadow-[0_20px_42px_-25px_rgba(48,159,89,0.66)] transition-all hover:-translate-y-0.5 hover:bg-[#9beaaf] active:translate-y-0"
              >
                Выбрать Plus <ChevronRight className="h-4 w-4" />
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                <LockKeyhole className="h-3.5 w-3.5" /> Безопасная оплата. Отменить можно в любой
                момент.
              </p>
            </div>
          </motion.article>
        </div>
        <div className="mx-auto mt-7 flex max-w-3xl items-center justify-center gap-2 text-center text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
          <Minus className="h-4 w-4 shrink-0 text-primary-deep" /> NUTRIVA бережно помогает
          выстроить привычки — без жёстких ограничений.
        </div>
      </div>
    </section>
  );
}
