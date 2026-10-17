import useCart from "../store/use-cart";

function ProductCard({ product }) {
  const addTocart = useCart((state) => state.addTocart);

  return (
    <div>
      {/* Product Image */}
      <div className="overflow-hidden rounded-xl bg-white sm:rounded-2xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-full object-cover sm:h-44 md:h-48"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3 sm:mt-4">
        <h3 className="text-xs font-semibold text-gray-500 sm:text-sm">
          {product.title}
        </h3>

        {/* Colors */}
        <div className="mt-2 flex gap-1">
          {product.colors?.map((color, index) => (
            <span
              key={index}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between gap-2 sm:mt-6">
          <p className="text-sm font-bold text-black sm:text-lg">
            ${product.price}.00
          </p>

          <button
            onClick={() => addTocart(product)}
            className="rounded-full bg-indigo-100 px-2 py-1 text-[10px] font-medium text-black transition hover:bg-indigo-200 sm:px-3 sm:text-sm"
          >
            Add to
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;