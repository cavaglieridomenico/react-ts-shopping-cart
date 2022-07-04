export const formatCurrency = (number: number): string => {
  return new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  }).format(number);
};
