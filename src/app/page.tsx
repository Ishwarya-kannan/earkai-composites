import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProductSection from "@/components/home/ProductSection";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Clients from "@/components/home/Clients";
import StatsSection from "@/components/home/StatsSection";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProductSection />
        <FeaturedProducts />
        <Industries />
        <StatsSection />
        <WhyChooseUs />
        <ContactSection />
        <Footer />
        <Clients />
        {/* Services */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <h2 className="text-4xl font-bold">
        Our Engineering Solutions
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-gray-600">
        We provide complete composite engineering solutions with premium
        materials, machinery and technical support for modern manufacturing.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-green-700">
          Composite Engineering
        </h3>

        <p className="mt-4 text-gray-600">
          Engineering support for composite product manufacturing.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-green-700">
          Material Selection
        </h3>

        <p className="mt-4 text-gray-600">
          Expert guidance to choose the right composite materials.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-green-700">
          Vacuum & RTM Support
        </h3>

        <p className="mt-4 text-gray-600">
          Technical assistance for vacuum bagging and RTM manufacturing.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-green-700">
          Industrial Consultation
        </h3>

        <p className="mt-4 text-gray-600">
          Professional consultation for composite production processes.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Company Statistics */}

<section className="bg-green-700 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">

      <div>
        <h2 className="text-5xl font-bold">30+</h2>
        <p className="mt-3 text-lg">
          Years of Industry Experience
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">500+</h2>
        <p className="mt-3 text-lg">
          Composite Products
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">6+</h2>
        <p className="mt-3 text-lg">
          Industries Served
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">100%</h2>
        <p className="mt-3 text-lg">
          Customer Satisfaction
        </p>
      </div>

    </div>

  </div>
</section>
{/* CTA */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-green-900 via-green-700 to-green-600 px-8 py-16 text-center text-white">

    <h2 className="text-4xl font-bold">
      Ready to Build Better Composite Solutions?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg">
      Contact Earkai Composites today for premium composite materials,
      engineering support and industrial manufacturing solutions.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <a
        href="/contact"
        className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
      >
        Contact Us
      </a>

      <Link
  href="/products"
  className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-700"
>
  View Products
</Link>
    </div>

  </div>
</section>
{/* Why Choose Us */}

<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <h2 className="text-4xl font-bold">
        Why Choose Earkai Composites?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-gray-600">
        We are committed to delivering premium composite materials,
        engineering expertise and reliable customer support for every project.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold text-green-700">
          Premium Quality
        </h3>

        <p className="mt-4 text-gray-600">
          High-quality composite raw materials sourced for industrial performance.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold text-green-700">
          Experienced Team
        </h3>

        <p className="mt-4 text-gray-600">
          Backed by industry knowledge and technical expertise since 1995.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold text-green-700">
          Technical Support
        </h3>

        <p className="mt-4 text-gray-600">
          Expert assistance for product selection and manufacturing processes.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold text-green-700">
          Trusted Partner
        </h3>

        <p className="mt-4 text-gray-600">
          Delivering reliable composite solutions for multiple industries across India.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Testimonials */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <h2 className="text-4xl font-bold">
        What Our Clients Say
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-gray-600">
        We value long-term relationships by delivering quality products,
        reliable support and trusted composite solutions.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
        <p className="italic text-gray-600">
          "Excellent quality composite materials and outstanding technical support."
        </p>

        <h3 className="mt-6 text-lg font-bold text-green-700">
          Manufacturing Client
        </h3>
      </div>

      <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
        <p className="italic text-gray-600">
          "Reliable supplier with timely delivery and professional service."
        </p>

        <h3 className="mt-6 text-lg font-bold text-green-700">
          Industrial Partner
        </h3>
      </div>

      <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
        <p className="italic text-gray-600">
          "Their engineering guidance helped us choose the right composite solution."
        </p>

        <h3 className="mt-6 text-lg font-bold text-green-700">
          Engineering Company
        </h3>
      </div>

    </div>

  </div>
</section>

      </main>
    </>
  );
}