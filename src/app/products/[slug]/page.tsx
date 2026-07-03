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

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              {product.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg">
              {product.shortDescription}
            </p>
          </div>
        </section>

        {/* Product */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

            <Image
              src={product.image}
              alt={product.title}
              width={700}
              height={550}
              className="w-full rounded-3xl object-cover shadow-xl"
            />

            <div>

              <h2 className="text-4xl font-bold text-gray-900">
                Product Overview
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {product.shortDescription}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                Earkai Composites supplies reliable composite materials
                and engineering solutions for industrial manufacturing.
                Our products are selected to deliver durability,
                efficiency and consistent performance across various
                applications.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-green-700 px-8 py-3 text-white hover:bg-green-800"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/products"
                  className="rounded-lg border border-green-700 px-8 py-3 text-green-700 hover:bg-green-50"
                >
                  Back to Products
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* Features & Applications */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

            <div>
              <h2 className="mb-8 text-3xl font-bold">
                Key Features
              </h2>

              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border bg-gray-50 p-4"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold">
                Applications
              </h2>

              <ul className="space-y-4">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="rounded-lg border bg-gray-50 p-4"
                  >
                    🚀 {application}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Related Products */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="mb-10 text-center text-4xl font-bold">
              Related Products
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600">
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