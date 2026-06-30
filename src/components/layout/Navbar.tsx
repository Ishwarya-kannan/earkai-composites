"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
   <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          Earkai Composites
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
             className="font-medium text-gray-800 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Button className="hidden bg-green-700 hover:bg-green-800 md:flex">
          Contact Us
        </Button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}