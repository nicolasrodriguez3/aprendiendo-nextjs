"use client";

import { useState } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import type { Product, Size } from "@/interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const onAddtoCart = () => {
    setPosted(true);
    if (!size) return;

    console.log({ size, quantity });
  };

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fade-in duration-100">* Debe seleccionar una talla</span>
      )}

      {/* Talles */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChange={setSize}
      />

      {/* Cantidad */}
      <QuantitySelector
        quantity={quantity}
        maxQuantity={10}
        onQuantityChange={setQuantity}
      />

      {/* CTA */}
      <button type="button" className="btn-primary my-5" onClick={onAddtoCart}>
        Agregar al carrito
      </button>
    </>
  );
};
