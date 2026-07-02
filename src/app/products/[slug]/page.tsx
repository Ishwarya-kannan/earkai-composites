import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl font-bold">{product.title}</h1>

            <p className="mt-5 max-w-3xl text-lg">
              {product.shortDescription}
            </p>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            {/* Image */}
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={700}
                height={500}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {product.category}
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {product.shortDescription}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                Earkai Composites offers high-quality composite products
                engineered for reliability, durability and performance.
                Our solutions support industries such as automotive,
                aerospace, marine, wind energy and industrial
                manufacturing.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-green-700 px-8 py-3 font-medium text-white transition hover:bg-green-800"
                >
                  Contact Us
                </Link>

                <Link
                  href="/products"
                  className="rounded-lg border border-green-700 px-8 py-3 font-medium text-green-700 transition hover:bg-green-50"
                >
                  ← Back to Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-3xl font-bold text-center">
              Related Products
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((item) => item.slug !== product.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="overflow-hidden rounded-2xl bg-gray-50 shadow transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="h-48 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="font-semibold text-green-700">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {item.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}