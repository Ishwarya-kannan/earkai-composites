import { contact } from "@/data/contact";

export default function ContactSection() {
  return (
    <section className="bg-green-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">{contact.title}</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white/10 p-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="mt-8 space-y-5">

              <p>
                <strong>📍 Address:</strong><br />
                {contact.address}
              </p>

              <p>
                <strong>📞 Phone:</strong><br />
                {contact.phone}
              </p>

              <p>
                <strong>📧 Email:</strong><br />
                {contact.email}
              </p>

              <p>
                <strong>🕒 Working Hours:</strong><br />
                {contact.workingHours}
              </p>

            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 text-black shadow-xl">

            <h3 className="mb-6 text-2xl font-bold">
              Send an Enquiry
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border p-3"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border p-3"
              />

              <button
                className="rounded-lg bg-green-700 px-8 py-3 text-white hover:bg-green-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}