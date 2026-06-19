import { RUSTORE } from "./Header";
import { IconArrowDown } from "./Icons";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/70 bg-white/88 px-4 py-3 shadow-[0_-18px_48px_-32px_rgba(17,24,39,0.35)] backdrop-blur-xl sm:hidden">
      <a
        href={RUSTORE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[14px] font-bold text-white shadow-soft"
        style={{ background: "linear-gradient(135deg, #36C978 0%, #159957 100%)" }}
      >
        <IconArrowDown className="h-4 w-4" />
        Скачать
      </a>
    </div>
  );
}
