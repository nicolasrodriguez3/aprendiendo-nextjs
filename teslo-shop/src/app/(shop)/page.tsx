import { Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";

const products = initialData.products

export default function Home() {
  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products}  />
    </div>
  );
}
