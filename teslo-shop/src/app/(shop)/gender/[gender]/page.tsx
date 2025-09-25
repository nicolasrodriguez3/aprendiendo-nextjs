export const revalidate = 60;

import { notFound, redirect } from "next/navigation";
import { getPaginaterProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import type { Gender } from "@/generated/prisma";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
    take?: string;
  };
}

const labels: Record<string, string> = {
  men: "de Hombres",
  women: "de Mujeres",
  kid: "de Niños",
  unisex: "Unisex",
};

export default async function ({ params, searchParams }: Props) {
  const { gender } = await params;

  if (gender !== "men" && gender !== "women" && gender !== "kid") {
    notFound();
  }

  const { page: pageParam } = await searchParams;
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const { products, totalPages } = await getPaginaterProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <div>
      <Title title={`Artículos ${labels[gender]}`} className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
