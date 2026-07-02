import Image from "next/image";
import { featuredProducts } from "@/data/featuredProducts";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-600">
            High-performance composite materials for diverse industrial applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={350}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-700">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}