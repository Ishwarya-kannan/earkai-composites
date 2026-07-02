import ProductGrid from "@/components/products/ProductGrid";

export default function ProductSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Our Products
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Composite Product Categories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore our comprehensive range of composite materials,
            consumables, machinery and industrial solutions developed
            for high-performance manufacturing.
          </p>

        </div>

        <ProductGrid />

      </div>
    </section>
  );
}