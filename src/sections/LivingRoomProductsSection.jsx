import { useState } from "react";
import {
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import FilterSidebar from "../pages/FilterSidebar";

import product1 from "../img/Rectangle 20.png";
import product2 from "../img/Rectangle 21.png";
import product3 from "../img/Rectangle 22.png";
import product4 from "../img/Rectangle 23.png";
import product5 from "../img/Rectangle 24.png";
import product6 from "../img/Rectangle 25.png";
import product7 from "../img/Rectangle 26png.png";
import product8 from "../img/Rectangle 27.png";

const categories = [
  "All Furniture",
  "Bedroom",
  "Living Room",
  "Home Office",
  "Dining Table",
  "More",
];

const livingRoomProducts = [
  {
    id: 1,
    title: "Old Modern Soft Chair",
    price: 70,
    image: product1,
    category: "Living Room",
    colors: ["#8ee0ba", "#f3c7a6", "#c9b8ff", "#f1a6d4"],
  },
  {
    id: 2,
    title: "Modern Soft Chair",
    price: 32,
    image: product2,
    category: "Living Room",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 3,
    title: "Stylish Soft Chair",
    price: 20,
    image: product3,
    category: "Bedroom",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 4,
    title: "Comfortable Soft Chair",
    price: 40,
    image: product4,
    category: "Bedroom",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 5,
    title: "New Soft Chair",
    price: 20,
    image: product5,
    category: "Home Office",
    colors: ["#8eea8a", "#a8d8f0", "#c9b8ff", "#f1a6d4"],
  },
  {
    id: 6,
    title: "Modern Soft Chair",
    price: 40,
    image: product6,
    category: "Living Room",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 7,
    title: "Comfortable Soft Chair",
    price: 40,
    image: product7,
    category: "Living Room",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 8,
    title: "New Soft Chair",
    price: 20,
    image: product8,
    category: "Dining Table",
    colors: ["#8eea8a", "#a8d8f0", "#c9b8ff", "#f1a6d4"],
  },
  {
    id: 9,
    title: "Modern Soft Chair",
    price: 40,
    image: product1,
    category: "Living Room",
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
];

function LivingRoomProductsSection() {
  const [activeCategory, setActiveCategory] =
    useState("All Furniture");

  const [viewMode, setViewMode] =
    useState("grid");

  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredProducts =
    activeCategory === "All Furniture"
      ? livingRoomProducts
      : livingRoomProducts.filter(
          (product) =>
            product.category === activeCategory
        );

  return (
    <section className="bg-gradient-to-br from-slate-100 via-indigo-50 to-fuchsia-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-black md:text-5xl">
            Living Room Furniture
          </h1>

          <div className="mt-5 flex items-center gap-2 text-sm md:text-base">
            <span className="text-gray-400">
              Home
            </span>

            <span>/</span>

            <span className="text-black">
              List of Products
            </span>
          </div>
        </div>

        {/* Categories + View */}
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full px-4 py-2 text-sm transition md:px-6 md:py-3 md:text-base ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold">
              View
            </span>

            <button
              onClick={() =>
                setViewMode("grid")
              }
              className={
                viewMode === "grid"
                  ? "text-black"
                  : "text-gray-400"
              }
            >
              <LayoutGrid size={20} />
            </button>

            <button
              onClick={() =>
                setViewMode("list")
              }
              className={
                viewMode === "list"
                  ? "text-black"
                  : "text-gray-400"
              }
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar + Products */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[190px_1fr]">

          <FilterSidebar />

          <div>
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">
                No products in this category
              </p>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6"
                    : "flex flex-col gap-8"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Pagination */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-3">

          <button
            onClick={() =>
              setCurrentPage((page) =>
                page > 1 ? page - 1 : 1
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-100 transition hover:bg-fuchsia-200"
          >
            <ChevronLeft size={18} />
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() =>
                setCurrentPage(page)
              }
              className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold transition ${
                currentPage === page
                  ? "bg-fuchsia-500 text-white"
                  : "bg-fuchsia-100 text-gray-500 hover:bg-fuchsia-200"
              }`}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(100)}
            className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold ${
              currentPage === 100
                ? "bg-fuchsia-500 text-white"
                : "bg-fuchsia-100 text-gray-500"
            }`}
          >
            100
          </button>

          <span className="text-gray-400">
            • • •
          </span>

          <button
            onClick={() =>
              setCurrentPage((page) =>
                page < 100 ? page + 1 : 100
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-100 transition hover:bg-fuchsia-200"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}

export default LivingRoomProductsSection;