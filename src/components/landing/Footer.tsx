import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, ExternalLink } from "lucide-react";
import logo from "@/assets/nutriva-logo-transparent.png";
import { sitePath } from "@/lib/site-path";

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(17,24,39,0.12), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="py-10 sm:py-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="NUTRIVA" className="h-7 w-7" />
                <span className="text-[16px] font-bold tracking-tight">NUTRIVA</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground sm:text-[14px]">
                Минималистичное приложение для контроля питания, калорий, БЖУ, воды и веса.
              </p>
            </div>

            {/* Perfectly Aligned Compact Navigation & Legal Links Column */}
            <div className="flex w-full max-w-[480px] flex-col gap-3 text-[13.5px] sm:text-[14px] md:ml-auto">
              <nav className="mobile-footer-nav flex flex-wrap items-center justify-between gap-y-2 text-[13.5px] sm:text-[14px]">
                <a
                  href={sitePath("/#features")}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Возможности
                </a>
                <a
                  href={sitePath("/#progress")}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Прогресс
                </a>
                <Link
                  to="/bmi"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Расчет ИМТ
                </Link>
                <a
                  href={sitePath("/#pricing")}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Тарифы
                </a>
                <a
                  href={sitePath("/#download")}
                  className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground"
                >
                  RuStore
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </nav>

              <div className="mobile-footer-legal flex flex-col gap-1 text-[13.5px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-y-2 sm:text-[14px]">
                <a
                  href={sitePath("/documents/public-offer.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <FileText className="h-3.5 w-3.5 text-primary-deep" />
                  Публичная оферта
                </a>
                <a
                  href={sitePath("/documents/privacy-policy.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-primary-deep" />
                  Политика конфиденциальности
                </a>
                <a
                  href={sitePath("/documents/user-agreement.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <FileText className="h-3.5 w-3.5 text-primary-deep" />
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[color:var(--hairline)] pt-5 text-[11.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 NUTRIVA. Все права защищены.</p>
            <p className="font-medium uppercase tracking-[0.16em]">PREMIUM · HEALTH-TECH</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
