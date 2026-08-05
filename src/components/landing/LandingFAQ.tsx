import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./Section";
import { landingFaqs } from "@/lib/landing-faqs";

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard
          .writeText("support@nutrivalife.online")
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            fallbackCopy();
          });
      } else {
        fallbackCopy();
      }
    } catch {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = "support@nutrivalife.online";
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    } catch {
      // Ignored
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
        <Reveal className="mb-9 text-center sm:mb-12">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep sm:mb-5">
            — FAQ
          </p>
          <h2 className="font-display text-balance text-[32px] font-black leading-[1] sm:text-[42px] sm:leading-[0.98] md:text-[58px]">
            Коротко о питании, калориях и скачивании
          </h2>
        </Reveal>

        <div className="space-y-3">
          {landingFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border bg-white p-5 shadow-soft transition-all duration-300 sm:rounded-3xl sm:p-6 ${
                    isOpen
                      ? "border-emerald-500/35 shadow-elevated"
                      : "border-[color:var(--hairline)] hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-soft"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[15px] font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-primary-deep sm:text-[17px]"
                  >
                    <span>{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[18px] font-medium shadow-xs transition-colors duration-300 ${
                        isOpen ? "bg-emerald-600 text-white" : "bg-emerald-100/80 text-emerald-800"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Copyable Support Email Pill with Attached Centered White Droplet */}
        <Reveal delay={0.3} className="mt-8 sm:mt-12 flex justify-center">
          <div className="relative inline-flex items-center">
            {/* Main Button — Fixed size & shape, never changes */}
            <button
              type="button"
              onClick={handleCopy}
              className="mobile-support-button group relative z-10 inline-flex w-full max-w-full items-center justify-center gap-3 rounded-2xl border border-emerald-500/20 bg-white/95 px-4 py-2.5 shadow-elevated backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-primary-deep cursor-pointer sm:w-auto sm:rounded-full sm:px-5"
              title="Нажмите, чтобы скопировать почту"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-emerald-100/80 text-primary-deep shadow-xs transition-transform duration-200 group-hover:scale-105">
                {copied ? (
                  <Check className="h-3.5 w-3.5 stroke-[2.8] text-emerald-600 animate-in zoom-in duration-200" />
                ) : (
                  <Mail className="h-3.5 w-3.5 stroke-[2.2]" />
                )}
              </span>
              <div className="mobile-support-button-copy flex items-center gap-1.5 text-center text-[13.5px] sm:text-[14px] sm:whitespace-nowrap">
                <span className="font-bold text-slate-900">Поддержка:</span>
                <span className="font-semibold text-primary-deep transition-colors group-hover:text-emerald-700">
                  support@nutrivalife.online
                </span>
              </div>
            </button>

            {/* Attached Smaller White Droplet Hanging Centered below Button (Absolute -> 0 Page Height Shift) */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.9, originY: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1, originY: 0 }}
                  exit={{ opacity: 0, y: -6, scale: 0.9, originY: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 -mt-1 z-0 flex items-center gap-1.5 rounded-b-xl rounded-t-xs border-x border-b border-emerald-500/25 bg-white/98 px-3.5 py-1 text-[12px] font-bold text-slate-900 shadow-elevated backdrop-blur-xl whitespace-nowrap"
                >
                  <span className="text-emerald-800">Скопировано!</span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100/90 text-emerald-700 shadow-xs">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
