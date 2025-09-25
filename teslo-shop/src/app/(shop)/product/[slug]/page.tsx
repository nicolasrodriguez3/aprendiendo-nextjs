import { notFound } from "next/navigation";
import {
  ProductSlideshow,
  ProductSlideshowMobile,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className=" md:col-span-2 ">
        {/* Mobile slideshow */}
        <ProductSlideshowMobile
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="px-5 min-h-screen flex flex-col">
        <h1 className={`${titleFont.className} font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>

        {/* Talles */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />

        {/* Cantidad */}
        <QuantitySelector quantity={1} maxQuantity={10} />

        {/* CTA */}
        <button type="button" className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Descripción */}
        <p>{product.description}</p>
      </div>
    </div>
  );
}
