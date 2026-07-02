import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl font-bold">
              Our Products
            </h1>

            <p className="mt-5 text-lg">
              Explore our complete range of composite materials,
              consumables, machinery and industrial solutions.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="mb-12 text-center text-4xl font-bold">
              Product Categories
            </h2>

            <ProductGrid />

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
