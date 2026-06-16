import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/nutriva-logo-transparent.png";
import { sitePath } from "@/lib/site-path";
import { IconArrowDown } from "./Icons";

const RUSTORE = "https://www.rustore.ru/catalog/app/com.nutriva.app";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    { href: sitePath("/#features"), label: "Возможности" },
    { href: sitePath("/#progress"), label: "Прогресс" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/75 border-b border-[color:var(--hairline)] shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={logo}
            alt="NUTRIVA"
            className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105"
          />
          <span className="font-bold tracking-tight text-[15px] sm:text-[17px]">NUTRIVA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/bmi"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Расчет ИМТ
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={RUSTORE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3.5 sm:px-4 py-2 text-[13px] sm:text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-soft whitespace-nowrap"
          >
            Скачать
          </a>
          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--hairline)] bg-white/86 shadow-soft backdrop-blur-xl transition-transform active:scale-95 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-[5px] h-[1.5px] w-5 rounded-full bg-foreground transition-transform duration-300 ${open ? "translate-y-[2.25px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-[5px] left-0 h-[1.5px] w-5 rounded-full bg-foreground transition-transform duration-300 ${open ? "-translate-y-[2.25px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 rounded-[1.5rem] border border-[color:var(--hairline)] bg-white/96 p-2 shadow-elevated backdrop-blur-xl">
            {sections.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/80 transition-colors active:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/bmi"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/80 transition-colors active:bg-secondary"
            >
              Расчет ИМТ
            </Link>
            <a
              href={RUSTORE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-2xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background"
            >
              Скачать в RuStore
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { RUSTORE };
export const DownloadIcon = IconArrowDown;
