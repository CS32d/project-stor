import ProductCard from "../components/ProductCard";

import item1 from "../img/Rectangle 30.png";
import item2 from "../img/Rectangle 31.png";
import item3 from "../img/Rectangle 32.png";
import item4 from "../img/Rectangle 33.png";

const similarItems = [
  {
    id: 101,
    title: "Comfortable Soft Chair",
    price: 40,
    image: item1,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 102,
    title: "Comfortable Soft Chair",
    price: 40,
    image: item2,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 103,
    title: "New Soft Chair",
    price: 20,
    image: item3,
    colors: ["#8eea8a", "#a8d8f0", "#c9b8ff", "#f1a6d4"],
  },
  {
    id: 104,
    title: "Modern Soft Chair",
    price: 40,
    image: item4,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
];

function SimilarItemsSection() {
  return (
    <section className="bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <h2 className="text-2xl font-bold text-black md:text-3xl">
          Similar Items
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {similarItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SimilarItemsSection;