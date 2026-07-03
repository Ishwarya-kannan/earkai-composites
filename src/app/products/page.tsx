import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata = {
  title: "Products | Earkai Composites",
  description:
    "Explore composite raw materials, consumables, vacuum bagging products, RTM products, machinery and engineering solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-700 to-green-600 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm">
              Earkai Composites
            </span>

            <h1 className="mt-8 text-6xl font-bold">
              Our Products
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
              Explore our complete portfolio of composite raw materials,
              consumables, vacuum bagging products, RTM products,
              composite machinery and engineering solutions for modern
              manufacturing industries.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                Composite Product Portfolio
              </h2>

              <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
                Earkai Composites supplies high-quality composite
                materials, advanced manufacturing consumables,
                industrial equipment and engineering solutions for
                automotive, marine, aerospace, renewable energy,
                construction and industrial applications.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <ProductGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}