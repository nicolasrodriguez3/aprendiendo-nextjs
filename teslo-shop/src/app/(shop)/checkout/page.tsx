import Image from "next/image";
import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-5xl">
        <Title title="Verificar órden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5 ">
            <span className="text-lg">¿Te faltó algo más?</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
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
                  <div className="flex flex-col w-full items-start">
                      <span>{product.title}</span>
                      <span>
                        ${product.price.toFixed(2)} x3
                      </span>
                      <span className="font-bold">Subtotal: $2</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout */}
          <div className="bg-white dark:bg-black rounded-xl shadow-xl p-7">
            <h2 className="text-xl font-bold mb-5">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Nico</p>
              <p>Paraguay 347</p>
              <p>Paraná</p>
              <p>Argentina</p>

            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-gray-200 mb-10 rounded" />

            <h2 className="text-xl font-bold mb-5">Resúmen de la órden</h2>

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
                href="/orders/123"
                className="btn-primary flex justify-center"
              >
                Confirmar órden
              </Link>

              {/* Disclaimer */}
              <span className="text-sm italic block mt-2">Al hacer click en <span className="font-bold">Confirmar órden</span> aceptas nuestra política de privacidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
