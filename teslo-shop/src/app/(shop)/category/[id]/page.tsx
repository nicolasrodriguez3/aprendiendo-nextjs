import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import type { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;
const labels: Record<Category, string> = {
  men: "de Hombres",
  women: "de Mujeres",
  kid: "de Niños",
  unisex: "Unisex",
};

export default async function ({ params }: Props) {
  const { id } = await params;

  if (id !== "men" && id !== "women" && id !== "kid") {
    notFound();
  }

  const displayProducts = products.filter((product) => product.gender === id);

  return (
    <div>
      <Title title={`Artículos ${labels[id]}`} className="mb-2" />
      <ProductGrid products={displayProducts} />
    </div>
  );
}
