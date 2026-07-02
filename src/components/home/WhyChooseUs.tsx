import { whyChoose } from "@/data/whyChoose";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Why Choose Earkai Composites?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We combine quality products, technical expertise and dependable
            customer support to help industries achieve better performance.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {whyChoose.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-700 hover:shadow-xl"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-700">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}