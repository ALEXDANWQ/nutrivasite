import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/nutriva-logo-transparent.png";
import { sitePath } from "@/lib/site-path";
import { IconArrowDown } from "./Icons";

const RUSTORE = "https://www.rustore.ru/catalog/app/com.nutriva.app";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let previousScrolled = false;
    const onScroll = () => {
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled !== previousScrolled) {
        previousScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        headerRef.current?.querySelector<HTMLButtonElement>("[aria-controls]")?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside, { passive: true });
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const sections = [
    { href: sitePath("/#features"), label: "Возможности" },
    { href: sitePath("/#progress"), label: "Прогресс" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open
          ? "backdrop-blur-md bg-white/90 border-b border-[color:var(--hairline)] shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 group shrink-0"
        >
          <img
            src={logo}
            alt="NUTRIVA"
            width={1024}
            height={1024}
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
          <a
            href={sitePath("/#pricing")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Тарифы
          </a>
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
            onClick={() => setOpen((currentOpen) => !currentOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={open}
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

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full px-4 pb-4 md:hidden"
          >
            <div
              id="mobile-navigation"
              className="mobile-menu-panel flex flex-col gap-1 rounded-[1.5rem] border border-[color:var(--hairline)] bg-white/96 p-2 shadow-elevated backdrop-blur-xl"
            >
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
                href={sitePath("/#pricing")}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/80 transition-colors active:bg-secondary"
              >
                Тарифы
              </a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { RUSTORE };
export const DownloadIcon = IconArrowDown;
