import { motion } from "framer-motion";
import { IconDrop, IconFlame, IconRing } from "./Icons";
import phone from "@/assets/nutriva-phone.png";

const ease = [0.22, 1, 0.36, 1] as const;

const badges = [
  {
    icon: IconFlame,
    label: "Калории",
    value: "388",
    detail: "-18%",
    className: "left-0 top-[17%] -translate-x-4 sm:-translate-x-10 lg:-translate-x-14",
  },
  {
    icon: IconDrop,
    label: "Вода",
    value: "700 мл",
    detail: "+1 ст.",
    className: "right-0 top-[47%] translate-x-4 sm:translate-x-8 lg:translate-x-12",
  },
  {
    icon: IconRing,
    label: "Прогресс",
    value: "92%",
    detail: "нед.",
    className: "left-[8%] bottom-[7%] sm:left-0 sm:-translate-x-8 lg:-translate-x-12",
  },
];

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[280px] select-none sm:max-w-[380px] lg:max-w-[500px]"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-8 bottom-8 top-12 -z-10 rounded-[44px] bg-primary/10 blur-3xl"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1, ease }}
      />

      <motion.img
        src={phone}
        alt="NUTRIVA - скриншот приложения"
        className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_36px_70px_rgba(17,24,39,0.16)]"
        draggable={false}
        variants={{
          hidden: { opacity: 0, y: 26, scale: 0.985 },
          show: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.9, ease }}
      />

      {badges.map(({ icon: Icon, label, value, detail, className }, index) => (
        <motion.div
          key={label}
          className={`absolute z-20 hidden min-w-[128px] items-center gap-2 rounded-2xl border border-white/70 bg-white/82 px-3 py-2.5 shadow-[0_18px_50px_-28px_rgba(17,24,39,0.32)] backdrop-blur-xl sm:flex ${className}`}
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.96 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.65, delay: index * 0.05, ease }}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mint text-primary-deep">
            <Icon className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {label}
            </span>
            <span className="mt-0.5 flex items-baseline gap-1.5 whitespace-nowrap leading-none">
              <span className="text-[17px] font-black tracking-tight">{value}</span>
              <span className="text-[10px] font-bold text-primary-deep">{detail}</span>
            </span>
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
