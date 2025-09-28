export const revalidate = 604800; // 7 dias

import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import {
  ProductSlideshow,
  ProductSlideshowMobile,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  // fetch information
  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: `/products/${product?.images[1]}` || [],
    },
  };
}

export default async function ({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
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
        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>

        <AddToCart product={product} />

        {/* Descripción */}
        <p>{product.description}</p>
      </div>
    </div>
  );
}
