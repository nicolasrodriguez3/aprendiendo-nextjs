"use client";

import { useEffect, useState } from "react";
import { getStockBySlug } from "@/actions/product/get-stock-by-slug";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setIsLoading(false)
  };

  if (isLoading) {
    return <p className={`font-bold text-md animate-pulse`}>Cargando stock...</p>;
  }

  return <p className={`font-bold text-md`}>Stock: {stock}</p>;
};
