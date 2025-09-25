import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-5xl">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5 ">
            <span className="text-lg">Agregar más ítems</span>
            <Link href="/" className="underline mb-5">
              Continua comprando
            </Link>

            {/* Items */}
            <div className="flex flex-col gap-5">
              {productsInCart.map((product) => (
                <div key={product.slug} className="flex gap-5 ">
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="object-contain"
                  />
                  <div className="flex flex-col gap-2 w-full items-start">
                    <p className="flex justify-between w-full gap-2">
                      <span>{product.title}</span>
                      <span className="font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </p>
                    <QuantitySelector quantity={1} />
                    <button type="button" className="underline">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Checkout */}
          <div className="bg-white dark:bg-black rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-xl font-bold mb-5">Resúmen del pedido</h2>

            <div className="grid grid-cols-2 gap-2">
              <span>Cant. Productos</span>
              <span className="text-right">{productsInCart.length}</span>
              <span>Subtotal</span>
              <span className="text-right">$100</span>
              <span>Impuestos</span>
              <span className="text-right">$15</span>
              <span className="text-xl">Total</span>
              <span className="text-xl text-right">$115</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="btn-primary flex justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
