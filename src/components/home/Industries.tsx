import { industries } from "@/data/industries";
import { Card, CardContent } from "@/components/ui/card";

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600">
            Delivering composite solutions across multiple industrial sectors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card
              key={industry.title}
              className="transition duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-green-700">
                  {industry.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}