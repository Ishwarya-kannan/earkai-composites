import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl font-bold">
              Contact Us
            </h1>

            <p className="mt-5 text-lg">
              We had love to hear from you. Reach out for product enquiries,
              technical support and business partnerships.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

            {/* Left */}
            <div>

              <h2 className="text-3xl font-bold">
                Get In Touch
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <h3 className="font-semibold text-green-700">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-700">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-700">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    info@earkaicomposites.com
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <form className="space-y-5">

              <input
                placeholder="Your Name"
                className="w-full rounded-lg border p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-lg border p-4"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-lg border p-4"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-lg border p-4"
              />

              <button
                className="rounded-lg bg-green-700 px-8 py-3 text-white hover:bg-green-800"
              >
                Send Message
              </button>

            </form>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}