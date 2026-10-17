import { ChevronDown } from "lucide-react";
import useCart from "../../store/use-cart";

function NavDropdown({ title, items, isOpen, onToggle }) {
    const cart = useCart((state) => state.cart);
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-fuchsia-500"
      >
        {title}

        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-8 z-50 w-44 rounded-lg border bg-white p-2 shadow-md
        transition-all duration-200 ease-out
        ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded px-3 py-2 text-sm transition-colors duration-200 hover:bg-fuchsia-50 hover:text-fuchsia-500"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavDropdown;