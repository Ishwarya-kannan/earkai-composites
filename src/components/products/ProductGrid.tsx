"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-2 transition ${
              category === item
                ? "bg-green-700 text-white"
                : "border border-gray-300 bg-white hover:bg-green-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Product Count */}
      <p className="mb-8 text-gray-600">
        Showing {filteredProducts.length} Product(s)
      </p>

      {/* Products */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.shortDescription}
            slug={product.slug}
            category={product.category}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold">
            No Products Found
          </h2>

          <p className="mt-3 text-gray-600">
            Try another keyword or category.
          </p>
        </div>
      )}
    </>
  );
}