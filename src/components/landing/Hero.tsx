import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { RUSTORE } from "./Header";
import { IconArrowDown, IconArrowRight } from "./Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-32 md:pb-32 md:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-20 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, #EEF8F1 0%, transparent 65%)" }}
          animate={{ x: [0, 20, 0], y: [0, -26, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 -right-32 w-[480px] sm:w-[640px] h-[480px] sm:h-[640px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, #D9F1E3 0%, transparent 65%)" }}
          animate={{ x: [0, -24, 0], y: [0, 28, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:gap-14 sm:px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 mb-5 sm:mb-7"
          >
            <motion.span
              className="relative flex w-1.5 h-1.5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative rounded-full bg-primary w-1.5 h-1.5" />
            </motion.span>
            Android-приложение для контроля питания
          </motion.div>

          <h1 className="font-display text-balance text-[34px] font-black leading-[1.02] sm:text-[50px] sm:leading-[0.98] md:text-[66px] lg:text-[76px]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="block"
            >
              NUTRIVA — счетчик калорий, дневник питания и контроль БЖУ
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
              className="mt-2 block font-serif italic font-normal"
              style={{
                backgroundImage: "linear-gradient(135deg, #36C978 0%, #159957 60%, #0B6B3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              без лишнего стресса
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] md:text-[19px] text-slate-600 max-w-xl mx-auto lg:mx-0 leading-[1.55] text-balance"
          >
            Удобное Android-приложение, которое помогает следить за питанием, водой, весом и
            ежедневным прогрессом без сложных таблиц и лишнего стресса.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center lg:justify-start"
          >
            <a
              href={RUSTORE}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 text-[14px] font-semibold text-white shadow-elevated transition-all hover:scale-[1.02] sm:rounded-full sm:px-7 sm:py-4 sm:text-[15px]"
              style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <IconArrowDown className="w-4 h-4 relative" />
              <span className="relative">Скачать NUTRIVA</span>
            </a>
            <a
              href="#features"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[color:var(--hairline)] bg-white px-6 text-[14px] font-semibold transition-all hover:bg-secondary sm:rounded-full sm:px-7 sm:py-4 sm:text-[15px]"
            >
              Посмотреть возможности
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-9 flex items-center justify-center gap-5 text-xs text-muted-foreground sm:mt-12 sm:gap-8 lg:justify-start"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {["#36C978", "#159957", "#7BD9A6"].map((c) => (
                  <span
                    key={c}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow-soft"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="font-medium">Калории и БЖУ</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-foreground font-bold text-sm">Дневник</span>
              <span>· питание каждый день</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <span className="text-foreground font-bold text-sm">Вода и вес</span>
              <span>· в одном месте</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative order-1 px-1 sm:px-6 lg:order-2 lg:px-0"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
