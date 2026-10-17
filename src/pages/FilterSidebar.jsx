import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FilterSidebar() {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [discountOpen, setDiscountOpen] = useState(false);

  return (
    <aside className="w-full lg:w-48">
      <h2 className="mb-6 text-2xl font-bold">
        Short By
      </h2>

      <div className="mb-6">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex w-full items-center justify-between text-left text-lg font-medium"
        >
          Category

          {categoryOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {categoryOpen && (
          <div className="mt-4 flex flex-col gap-3 text-gray-500">
            <button className="text-left hover:text-black">
              Wardrobes
            </button>

            <button className="text-left hover:text-black">
              Beds
            </button>

            <button className="text-left hover:text-black">
              Mattresses
            </button>

            <button className="text-left hover:text-black">
              Dressers & Drawers
            </button>

            <button className="text-left hover:text-black">
              Bedroom Ensembles
            </button>

            <button className="text-left hover:text-black">
              Wardrobes
            </button>
          </div>
        )}
      </div>

      <div className="mb-5">
        <button
          onClick={() => setColorOpen(!colorOpen)}
          className="flex w-full items-center justify-between text-left text-lg font-medium"
        >
          Color Family

          {colorOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {colorOpen && (
          <div className="mt-4 flex gap-2">
            <span className="h-5 w-5 rounded-full bg-black" />
            <span className="h-5 w-5 rounded-full bg-gray-400" />
            <span className="h-5 w-5 rounded-full bg-pink-300" />
            <span className="h-5 w-5 rounded-full bg-blue-300" />
          </div>
        )}
      </div>

      <div className="mb-5">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex w-full items-center justify-between text-left text-lg font-medium"
        >
          Price

          {priceOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {priceOpen && (
          <div className="mt-4 flex flex-col gap-3 text-gray-500">
            <button className="text-left">$0 - $50</button>
            <button className="text-left">$50 - $100</button>
            <button className="text-left">$100+</button>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setDiscountOpen(!discountOpen)}
          className="flex w-full items-center justify-between text-left text-lg font-medium"
        >
          Discount Range

          {discountOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {discountOpen && (
          <div className="mt-4 flex flex-col gap-3 text-gray-500">
            <button className="text-left">10%</button>
            <button className="text-left">20%</button>
            <button className="text-left">30%+</button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default FilterSidebar;