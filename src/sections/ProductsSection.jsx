import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ProductCard from "../components/ProductCard";

// =========================
// GET CATEGORIES
// =========================
const getCategories = async () => {
  const res = await axios.get(
    "https://test-backend.abdulrahman-hares.com/api/categories"
    
  );

  return res.data;
};

// =========================
// GET PRODUCTS
// =========================
const getProducts = async (categoryId) => {
  let url =
    "https://test-backend.abdulrahman-hares.com/api/products";

  if (categoryId) {
    url = `${url}?categoryId=${categoryId}`;
  }

  const res = await axios.get(url);

  return res.data;
};

function ProductsSection() {
  const [activeCategoryId, setActiveCategoryId] =
    useState(null);

  // Categories
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // Products
  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["products", activeCategoryId],
    queryFn: () => getProducts(activeCategoryId),
  });

  return (
    <section className="bg-gradient-to-br from-slate-100 via-indigo-50 to-fuchsia-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Stylish Collection of Furniture
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base md:mt-5 md:text-lg md:leading-8">
            Stay updated with our information and engaging blog posts
            about modern Furniture and Fashion on the industry
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3 lg:mt-12">

          {/* All Furniture */}
          <button
            onClick={() => setActiveCategoryId(null)}
            className={`rounded-full px-4 py-2 text-xs transition duration-200 sm:text-sm md:px-6 md:py-3 md:text-base ${
              activeCategoryId === null
                ? "bg-black text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            All Furniture
          </button>

          {/* Loading Categories */}
          {categoriesLoading && (
            <p className="text-sm text-gray-500">
              Loading categories...
            </p>
          )}

          {/* Categories From API */}
          {!categoriesLoading &&
            !categoriesError &&
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategoryId(category.id)
                }
                className={`rounded-full px-4 py-2 text-xs transition duration-200 sm:text-sm md:px-6 md:py-3 md:text-base ${
                  activeCategoryId === category.id
                    ? "bg-black text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                {category.name}
              </button>
            ))}
        </div>

        {/* Products */}
        <div className="mt-10 md:mt-14 lg:mt-16">

          {productsLoading && (
            <p className="text-center text-sm text-gray-500">
              Loading products...
            </p>
          )}

          {productsError && (
            <p className="text-center text-sm text-red-500">
              Error loading products
            </p>
          )}

          {!productsLoading &&
            !productsError &&
            products.length === 0 && (
              <p className="text-center text-sm text-gray-500">
                No products in this category
              </p>
            )}

          {!productsLoading &&
            !productsError &&
            products.length > 0 && (
              <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                {products.map((product) => {
                  const productForCard = {
                    ...product,

                    title: product.name,

                    image: product.imageUrl,

                    colors: [
                      "#f3c7a6",
                      "#a8d8f0",
                      "#c9b8ff",
                      "#9c8ee5",
                    ],
                  };

                  return (
                    <ProductCard
                      key={product.id}
                      product={productForCard}
                    />
                  );
                })}
              </div>
            )}
        </div>

      </div>
    </section>
  );
}

export default ProductsSection;