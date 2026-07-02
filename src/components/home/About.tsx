import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <Image
            src="/images/hero/hero.jpeg"
            alt="Composite Manufacturing"
            width={600}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            About Earkai Composites
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Composite Solutions for Multiple Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Earkai Composites provides composite raw materials,
            consumables, machinery and technical solutions for
            industries that demand quality, durability and
            innovation.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our focus is to deliver reliable products backed by
            technical expertise and customer support while helping
            industries adopt advanced composite technologies.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="text-3xl font-bold text-green-700">
                10+
              </h3>
              <p className="text-gray-600">
                Product Categories
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="text-3xl font-bold text-green-700">
                Quality
              </h3>
              <p className="text-gray-600">
                Assured Materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}