import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

       <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 py-24 text-white">
  <div className="mx-auto max-w-7xl px-6 text-center">

    <p className="uppercase tracking-widest text-green-200">
      Contact Us
    </p>

    <h1 className="mt-4 text-5xl font-bold">
      Let's Build Better Composite Solutions
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
      Contact Earkai Composites for premium composite materials,
      machinery, engineering support and technical assistance.
    </p>

  </div>
</section>

        {/* Contact Content */}
        <section className="bg-white py-20">
  <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-2xl border p-8 shadow">
      <h3 className="text-xl font-bold text-green-700">
        📍 Address
      </h3>

      <p className="mt-4 text-gray-600">
        no:2/2B1-5, AGARAMTHEN MAIN ROAD ,AGARAMTHEN, CHENNAI - 600126,TAMIL NADU,INDIA
      </p>
    </div>

    <div className="rounded-2xl border p-8 shadow">
      <h3 className="text-xl font-bold text-green-700">
        📞 Phone
      </h3>

      <p className="mt-4 text-gray-600">
        +91 9655422893
      </p>
    </div>

    <div className="rounded-2xl border p-8 shadow">
      <h3 className="text-xl font-bold text-green-700">
        📧 Email
      </h3>

      <p className="mt-4 text-gray-600">
        earkaicomposites@gmail.com
      </p>
    </div>

    <div className="rounded-2xl border p-8 shadow">
      <h3 className="text-xl font-bold text-green-700">
        🕒 Working Hours
      </h3>

      <p className="mt-4 text-gray-600">
        Monday - friday
        <br />
        9:00 AM - 5:00 PM
      </p>
     <p className="mt-4 text-gray-600">
  Sat and Sun
  <br />
  Closed
</p>
    </div>

  </div>
</section>

       <section className="py-20 bg-gray-50">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

    {/* Contact Form */}

    <div className="rounded-2xl bg-white p-10 shadow-lg">

      <h2 className="text-3xl font-bold">
        Send Us a Message
      </h2>

      <p className="mt-4 text-gray-600">
        Fill out the form below and our team will get back to you as soon as possible.
      </p>

      <form className="mt-8 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border p-4"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-lg border p-4"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg border p-4"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full rounded-lg border p-4"
        ></textarea>

        <button
          type="submit"
          className="rounded-lg bg-green-700 px-8 py-3 text-white transition hover:bg-green-800"
        >
          Send Message
        </button>

      </form>

    </div>

    {/* Right Side */}

    <div className="flex items-center justify-center rounded-2xl bg-green-700 p-12 text-center text-white">

      <div>

        <h2 className="text-4xl font-bold">
          Need Technical Support?
        </h2>

        <p className="mt-6 leading-8">
          Our experienced engineering team is ready to help you
          choose the right composite materials, machinery and
          manufacturing solutions.
        </p>

        <a
          href="tel:+91XXXXXXXXXX"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-700"
        >
          Call Now
        </a>

      </div>

    </div>

  </div>
</section> 
{/* Why Contact Us */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-12 text-center text-4xl font-bold">
      Why Contact Earkai Composites?
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border p-8 shadow">
        <h3 className="text-xl font-bold text-green-700">
          Engineering Support
        </h3>

        <p className="mt-4 text-gray-600">
          Professional guidance for composite manufacturing.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow">
        <h3 className="text-xl font-bold text-green-700">
          Product Selection
        </h3>

        <p className="mt-4 text-gray-600">
          Assistance in choosing suitable composite materials.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow">
        <h3 className="text-xl font-bold text-green-700">
          Fast Response
        </h3>

        <p className="mt-4 text-gray-600">
          Quick replies to all product and technical enquiries.
        </p>
      </div>

      <div className="rounded-2xl border p-8 shadow">
        <h3 className="text-xl font-bold text-green-700">
          Reliable Service
        </h3>

        <p className="mt-4 text-gray-600">
          Trusted composite solutions for multiple industries.
        </p>
      </div>

    </div>

  </div>
</section>    
        {/* Google Map */}
<section className="pb-20">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-10 text-center text-4xl font-bold">
      Our Location
    </h2>

    <div className="overflow-hidden rounded-2xl shadow-lg">

      <iframe
        src="https://www.google.com/maps/dir//no:2%2F2B1-5,+AGARAMTHEN+MAIN+ROAD+,AGARAMTHEN,+CHENNAI+-+600126/@13.0383872,80.232448,10z?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}