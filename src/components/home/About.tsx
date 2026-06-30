import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900">
          {aboutData.title}
        </h2>

        <h3 className="mt-4 text-xl font-semibold text-green-700">
          {aboutData.subtitle}
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {aboutData.description}
        </p>
      </div>
    </section>
  );
}