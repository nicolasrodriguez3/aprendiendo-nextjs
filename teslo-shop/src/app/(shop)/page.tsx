export const revalidate = 60;

import { redirect } from "next/navigation";
import { getPaginaterProductsWithImages } from "@/actions";
import { Pagination, Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";

interface Props {
  searchParams: {
    page?: string;
    take?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const { products, totalPages } = await getPaginaterProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
