export const currencyFormat = (price: number) => {
  return `Rp ${new Intl.NumberFormat(["id"]).format(price)}`;
};
