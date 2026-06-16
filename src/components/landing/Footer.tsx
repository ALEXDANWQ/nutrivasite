import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
                <img src={logo} alt="NUTRIVA" className="w-7 h-7" />
                <span className="font-bold tracking-tight text-[16px]">NUTRIVA</span>
              </div>
              <p className="mt-3 text-[13.5px] sm:text-[14px] text-muted-foreground leading-relaxed">
                Минималистичное приложение для контроля питания, калорий, БЖУ, воды и веса.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[13.5px] sm:gap-x-8">
              <a
                href={sitePath("/#features")}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Возможности
              </a>
              <a
                href={sitePath("/#progress")}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Прогресс
              </a>
              <Link
                to="/bmi"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Расчет ИМТ
              </Link>
              <a
                href={sitePath("/#download")}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                RuStore
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11.5px] text-muted-foreground">
            <p>© 2026 NUTRIVA. Все права защищены.</p>
            <p className="font-medium tracking-[0.16em] uppercase">Premium · Health-tech</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
