export const PLUS_MONTHLY_PRICE = 259;
export const PLUS_YEARLY_PRICE = 2099;
export const PLUS_YEARLY_DISCOUNT = Math.round(
  (1 - PLUS_YEARLY_PRICE / (PLUS_MONTHLY_PRICE * 12)) * 100,
);

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}
