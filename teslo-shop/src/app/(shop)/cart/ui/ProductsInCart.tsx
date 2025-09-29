"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Cargando...</p>;
  }
  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex gap-5 ">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="object-contain"
          />
          <div className="flex flex-col gap-2 w-full items-start">
            <p className="flex justify-between w-full gap-2">
              <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
                {product.size} - {product.title}
              </Link>
              <span className="font-bold">${product.price.toFixed(2)}</span>
            </p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={(quantity) => updateProductQuantity(product, quantity)}
            />
            <button type="button" className="underline cursor-pointer" onClick={() => removeProductFromCart(product)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
