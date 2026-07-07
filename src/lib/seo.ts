export const SEO_UPDATED_DATE = "2026-07-07";

export const ROBOTS_DIRECTIVES =
  "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

const baseSeoKeywords = [
  "NUTRIVA",
  "Nutriva",
  "счетчик калорий",
  "счетчик калорий на Android",
  "дневник питания",
  "приложение для подсчета калорий",
  "приложение для учета питания",
  "приложение для похудения",
  "трекер питания",
  "учет калорий",
  "расчет калорий",
  "калории Android",
  "БЖУ",
  "учет БЖУ",
  "белки жиры углеводы",
  "контроль веса",
  "трекер веса",
  "учет воды",
  "дефицит калорий",
  "питание для похудения",
  "набор массы",
  "калькулятор ИМТ",
  "индекс массы тела",
  "здоровое питание",
  "осознанное питание",
  "RuStore NUTRIVA",
];

export function buildSeoKeywords(extraKeywords: string[] = []) {
  return Array.from(new Set([...extraKeywords, ...baseSeoKeywords])).join(", ");
}
