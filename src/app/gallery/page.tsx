import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const gallery = [
  {
    title: "Carbon Fiber",
    image: "/images/products/carbon-fiber.jpeg",
  },
  {
    title: "Carbon Fabric Roll",
    image: "/images/products/carbon-fabric-roll.jpeg",
  },
  {
    title: "Fiberglass Roll",
    image: "/images/products/fiberglass-roll.jpeg",
  },
  {
    title: "Epoxy Resin",
    image: "/images/products/epoxy-resin.jpeg",
  },
  {
    title: "Gelcoat",
    image: "/images/products/gelcoat.jpeg",
  },
  {
    title: "Sealant Tape",
    image: "/images/products/sealant-tape.jpeg",
  },
  {
    title: "Composite Machinery",
    image: "/images/machinery/machinery1.jpeg",
  },
  {
    title: "Industrial Machinery",
    image: "/images/machinery/machinery2.jpeg",
  },
  {
    title: "Composite Manufacturing",
    image: "/images/machinery/machinery3.jpeg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <h1 className="text-5xl font-bold">
              Gallery
            </h1>

            <p className="mt-5 text-lg">
              Explore our composite materials,
              manufacturing process and industrial solutions.
            </p>

          </div>
        </section>

        {/* Gallery */}

        <section className="py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {gallery.map((item) => (

                <div
                  key={item.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-green-700">
                      {item.title}
                    </h2>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}