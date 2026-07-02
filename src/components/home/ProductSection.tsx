import ProductGrid from "@/components/products/ProductGrid";
export default function ProductSection() {
  return (
    <section id="products" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600">
            Delivering premium composite materials, consumables and
            industrial solutions for modern manufacturing.
          </p>
        </div>

        <ProductGrid />

      </div>
    </section>
  );
}
