export const currencyFormat = (value: number | null) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(value ?? 0)
