import { Reveal } from "./Section";
import { IconBolt, IconDiary, IconLeaf, IconRing, IconScale } from "./Icons";

const audiences = [
  {
    icon: IconScale,
    title: "Для похудения",
    text: "Помогает видеть калорийность рациона, динамику веса и привычки, которые влияют на результат.",
  },
  {
    icon: IconBolt,
    title: "Для набора массы",
    text: "Удобно следить за регулярностью питания, калориями и белком без случайного подхода.",
  },
  {
    icon: IconRing,
    title: "Для контроля рациона",
    text: "Показывает, как распределяются калории, белки, жиры и углеводы в течение дня.",
  },
  {
    icon: IconLeaf,
    title: "Для осознанного питания",
    text: "Дает спокойную картину привычек и помогает принимать решения на основе данных.",
  },
  {
    icon: IconDiary,
    title: "Для тех, кто устал от таблиц",
    text: "Заменяет сложные заметки и ручные подсчеты аккуратным дневником питания.",
  },
];

export function Audience() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep sm:mb-5">
            — Для кого приложение
          </p>
          <h2 className="font-display text-balance text-[32px] font-black leading-[1] sm:text-[42px] sm:leading-[0.98] md:text-[58px]">
            Подходит для разных целей, если важно видеть питание спокойно
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {audiences.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 5) * 0.06}>
              <div className="h-full rounded-2xl border border-[color:var(--hairline)] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-primary-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[16px] font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
