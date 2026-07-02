import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
       <ProductCard
    key={product.id}
    title={product.title}
    image={product.image}
    description={product.shortDescription}
    slug={product.slug}
/>
      ))}
    </div>
  );
}