import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ProductsInCart } from "./ui/ProductsInCart";
import { SummaryInformation } from "./ui/SummaryInformation";

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
              <ProductsInCart />
            </div>
          </div>
          {/* Checkout */}
          <div className="bg-white dark:bg-black rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-xl font-bold mb-5">Resúmen del pedido</h2>

            {/* Checkout info */}
            <SummaryInformation />

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
