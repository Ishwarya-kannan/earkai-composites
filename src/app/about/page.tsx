import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="uppercase tracking-widest text-green-200">
              About Earkai Composites
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Composite Manufacturing Excellence
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Delivering innovative, durable and eco-friendly composite
              materials and engineering solutions for industries across India.
            </p>
            

          </div>
        </section>

        {/* Company */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <Image
  src="/images/about/about.jpg"
  alt="About Earkai Composites"
  width={700}
  height={500}
  className="h-full w-full rounded-2xl object-cover shadow-xl"
  priority
/>

            <div>

              <h2 className="text-4xl font-bold">
                About Our Company
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
  Earkai Composites, established in 2019, is a trusted supplier of
  composite raw materials, consumables, machinery and engineering
  solutions. Backed by industry experience since 1995, we provide
  high-quality products and technical expertise to customers across
  automotive, marine, wind energy, construction and other industrial
  sectors.
</p>

              <p className="mt-6 leading-8 text-gray-600">
  We specialize in supplying premium composite raw materials,
  consumables, vacuum bagging products, RTM products,
  silicone bagging solutions and composite machinery.
  Our commitment to quality, innovation and customer support
  enables industries to manufacture reliable composite components
  efficiently.
</p>

            </div>

          </div>
         
        </section>
        {/* Our Expertise */}

<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-4xl font-bold">
      Our Expertise
    </h2>

    <div className="mt-12 grid gap-8 md:grid-cols-2">

      <div className="rounded-2xl bg-white p-8 shadow">
        <h3 className="text-2xl font-bold text-green-700">
          Composite Engineering
        </h3>

        <p className="mt-4 text-gray-600">
          Technical guidance and engineering support for composite manufacturing applications.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow">
        <h3 className="text-2xl font-bold text-green-700">
          Silicone Bagging Solutions
        </h3>

        <p className="mt-4 text-gray-600">
          Reusable silicone bagging systems for advanced composite manufacturing.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow">
        <h3 className="text-2xl font-bold text-green-700">
          FRP Support
        </h3>

        <p className="mt-4 text-gray-600">
          Complete support for FRP manufacturing and composite materials.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow">
        <h3 className="text-2xl font-bold text-green-700">
          Technical Assistance
        </h3>

        <p className="mt-4 text-gray-600">
          Helping customers choose the right composite solutions.
        </p>
      </div>

    </div>

  </div>
</section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-10 shadow-lg">
                <h3 className="text-3xl font-bold text-green-700">
                  Our Vision
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  To become a trusted leader in composite manufacturing
                  solutions by delivering innovative, sustainable and
                  world-class products.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-10 shadow-lg">
                <h3 className="text-3xl font-bold text-green-700">
                  Our Mission
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  To provide reliable composite products, technical
                  expertise and exceptional customer service while
                  building long-term partnerships with industries.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="py-20 bg-green-700 text-white">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="text-4xl font-bold">
      30+ Years of Industry Experience
    </h2>

    <p className="mt-6 text-lg leading-8">
      Our experienced team has been serving the composite industry
      since 1995, delivering reliable products and engineering
      support across multiple sectors.
    </p>
    <a
  href="/contact"
  className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-700 transition hover:bg-gray-100"
>
  Contact Our Team
</a>

  </div>

</section>

      </main>

      <Footer />
    </>
  );
}