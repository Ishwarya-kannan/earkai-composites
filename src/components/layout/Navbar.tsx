"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="Earkai Composites"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-green-700">
              Earkai Composites
            </h1>

            <p className="text-xs text-gray-500">
              Eco Friendly Composite Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-green-700 hover:bg-green-800">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-medium text-gray-700 hover:text-green-700"
              >
                {item.name}
              </Link>
            ))}

            <Button className="mt-4 bg-green-700 hover:bg-green-800">
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}