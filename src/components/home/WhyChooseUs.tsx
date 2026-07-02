import { company } from "@/data/company";

export default function WhyChooseUs() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Why Choose Earkai Composites?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {company.whyChooseUs.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white/10 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}