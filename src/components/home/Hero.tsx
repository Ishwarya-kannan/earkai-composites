import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Trusted Composite Solutions
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-green-100">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/products"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              {hero.button1}
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-700"
            >
              {hero.button2}
            </Link>

          </div>

        </div>

        {/* Right */}

        <div>

          <Image
            src={hero.image}
            alt="Composite Materials"
            width={900}
            height={700}
            priority
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}