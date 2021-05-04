import currencyJs from "currency.js";
import currencyToSymbolMap from "currency-symbol-map";

const getReadableAmount = ({
  value,
  currency
}: {
  value: number;
  currency: "uzs" | "usd";
}): string => {
  if (currency === "usd") {
    return currencyJs(value, {
      separator: " ",
      symbol: currencyToSymbolMap("usd"),
      precision: 0
    }).format();
  }

  return currencyJs(value, {
    separator: " ",
    symbol: currencyToSymbolMap("uzs"),
    precision: 0
  }).format();
};

export default getReadableAmount;
