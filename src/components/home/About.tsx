import Image from "next/image";
import { about } from "@/data/about";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div>
          <Image
            src="/images/about/about.jpg"
            alt="About Earkai Composites"
            width={700}
            height={600}
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Right Content */}

        <div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            About Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            {about.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {about.subtitle}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            {about.description1}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            {about.description2}
          </p>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-green-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">
                {about.experience}
              </h3>

              <p className="mt-2 text-gray-600">
                {about.experienceLabel}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">
                {about.products}
              </h3>

              <p className="mt-2 text-gray-600">
                {about.productsLabel}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">
                {about.clients}
              </h3>

              <p className="mt-2 text-gray-600">
                {about.clientsLabel}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">
                {about.support}
              </h3>

              <p className="mt-2 text-gray-600">
                {about.supportLabel}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}