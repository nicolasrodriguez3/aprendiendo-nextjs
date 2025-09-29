"use client";

import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";

const useCartSummary = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const summary = useCartStore(
    useShallow((state) => state.getSummaryInformation()),
  );

  return { loaded, ...summary };
};

export const SummaryInformation = () => {
  const { loaded, itemsInCart, subTotal, tax, total } = useCartSummary();

  if (!loaded) {
    return (
      <div className="flex flex-col gap-2">
        <span className="animate-pulse bg-gray-600">&nbsp;</span>
        <span className="animate-pulse bg-gray-600">&nbsp;</span>
        <span className="animate-pulse bg-gray-600 text-xl">&nbsp;</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <span>Cant. Productos</span>
      <span className="text-right">{itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}</span>
      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>
      <span>Impuestos</span>
      <span className="text-right">{currencyFormat(tax)}</span>
      <span className="text-xl">Total</span>
      <span className="text-xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};
