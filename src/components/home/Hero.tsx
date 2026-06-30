"use client";

import { heroData } from "@/data/hero";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {heroData.badge}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            {heroData.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {heroData.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Button className="bg-green-700 hover:bg-green-800">
              {heroData.primaryButton}
            </Button>

            <Button variant="outline">
              {heroData.secondaryButton}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}