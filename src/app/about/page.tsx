import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl font-bold">
              About Earkai Composites
            </h1>

            <p className="mt-5 text-lg">
              Delivering quality composite materials and innovative
              engineering solutions for diverse industries.
            </p>
          </div>
        </section>

        {/* Company */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

            <div>
              <h2 className="text-4xl font-bold">
                Company Overview
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Earkai Composites provides a wide range of composite raw
                materials, consumables, machinery and technical solutions
                to support industries adopting advanced composite
                manufacturing technologies.
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                Our focus is on quality, innovation and customer
                satisfaction while delivering reliable products and
                technical expertise.
              </p>
            </div>

            <div className="rounded-2xl bg-green-100 p-10">
              <h3 className="text-2xl font-bold text-green-700">
                Our Mission
              </h3>

              <p className="mt-4 text-gray-700">
                Deliver high-quality composite solutions that help
                industries improve efficiency, performance and
                sustainability.
              </p>

              <h3 className="mt-10 text-2xl font-bold text-green-700">
                Our Vision
              </h3>

              <p className="mt-4 text-gray-700">
                To become a trusted partner for composite materials and
                advanced manufacturing solutions across industries.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}