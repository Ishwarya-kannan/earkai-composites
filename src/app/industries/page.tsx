import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-lg uppercase tracking-widest text-green-200">
              Earkai Composites
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Industries We Serve
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
              We provide innovative composite materials, consumables,
              machinery and engineering solutions across diverse industries,
              ensuring superior quality, reliability and performance.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Trusted Across Multiple Industries
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our advanced composite products are widely used in automotive,
              marine, wind energy, construction, electrical and industrial
              manufacturing sectors. We focus on delivering durable,
              lightweight and high-performance composite solutions.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-5 text-5xl">🏭</div>

                  <h3 className="text-2xl font-bold text-green-700">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {industry.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
                  >
                    Contact Us
                  </a>
                </div>
              ))}

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}