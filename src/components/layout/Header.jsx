import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  UserRound,
  Landmark,
  Globe2,
} from "lucide-react";

import { Button } from "../ui/button";
import NavDropdown from "./NavDropdown";
import useCart from "../../store/use-cart";

import logo from "../../img/logo.png";

function Header() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState("home");

  const [settingsOpen, setSettingsOpen] = useState(true);

  const cart = useCart((state) => state.cart);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Furniture Store Logo"
              className="h-8 w-auto lg:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <NavDropdown
              title="Shop Now"
              isOpen={openDropdown === "shop"}
              onToggle={() => toggleDropdown("shop")}
              items={[
                {
                  label: "New Arrivals",
                  href: "#new-arrivals",
                },
                {
                  label: "All Products",
                  href: "#products",
                },
              ]}
            />

            <NavDropdown
              title="Home Furniture"
              isOpen={openDropdown === "home"}
              onToggle={() => toggleDropdown("home")}
              items={[
                {
                  label: "Bedroom",
                  href: "#bedroom",
                },
                {
                  label: "Dining Room",
                  href: "#dining-room",
                },
                {
                  label: "Home Office",
                  href: "#home-office",
                },
              ]}
            />

            <button
              onClick={() => navigate("/living-room")}
              className="text-sm font-medium text-black transition hover:text-fuchsia-500"
            >
              Living Room
            </button>
            <NavDropdown
              title="About Us"
              isOpen={openDropdown === "about"}
              onToggle={() => toggleDropdown("about")}
              items={[
                {
                  label: "Our Story",
                  href: "#story",
                },
                {
                  label: "Our Team",
                  href: "#team",
                },
              ]}
            />

            <NavDropdown
              title="Contact"
              isOpen={openDropdown === "contact"}
              onToggle={() => toggleDropdown("contact")}
              items={[
                {
                  label: "Contact Us",
                  href: "#contact",
                },
                {
                  label: "Support",
                  href: "#support",
                },
              ]}
            />
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search size={18} />
            </Button>

            <div className="relative">
              <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                <ShoppingCart size={18} />
              </Button>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </div>

            <Button
              className="rounded-full bg-fuchsia-500 px-5 text-white hover:bg-fuchsia-600"
              onClick={() => {
                window.location.hash = "login";
              }}
            >
              Log in
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-fuchsia-500 px-5 text-fuchsia-500 hover:bg-fuchsia-50 hover:text-fuchsia-500"
              onClick={() => {
                window.location.hash = "register";
              }}
            >
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-slate-500/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Drawer */}
          <div className="absolute left-3 top-0 h-full w-[92%] max-w-[380px] overflow-y-auto rounded-t-[38px] bg-slate-50 px-6 pb-10 pt-8 shadow-xl">
            {/* Top */}
            <div className="mb-7 flex items-center justify-between">
              <img
                src={logo}
                alt="Furniture Store Logo"
                className="h-9 w-auto"
              />

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center"
              >
                <X size={28} />
              </button>
            </div>

            {/* Home Furniture Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("home")}
                className="flex w-full items-center justify-between rounded-xl bg-gray-200 px-3 py-4 text-left text-lg"
              >
                Home Furniture
                <ChevronDown
                  size={22}
                  className={`transition-transform ${
                    mobileDropdown === "home" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "home" && (
                <div className="space-y-5 px-6 py-6">
                  <a
                    href="#beds"
                    className="block text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Beds
                  </a>

                  <a
                    href="#mattresses"
                    className="block text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mattresses
                  </a>

                  <a
                    href="#wardrobes"
                    className="block text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Wardrobes
                  </a>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="mt-4 space-y-1">
              <a
                href="#home-furniture"
                className="flex items-center justify-between py-3 text-lg"
              >
                Home Furniture
                <ChevronRight size={22} />
              </a>

              <button
                onClick={() => {
                  navigate("/living-room");
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-between py-3 text-left text-lg"
              >
                Living Room
                <ChevronRight size={22} />
              </button>
              <a
                href="#office-furniture"
                className="flex items-center justify-between py-3 text-lg"
              >
                Office Furniture
                <ChevronRight size={22} />
              </a>

              <a
                href="#about"
                className="flex items-center justify-between py-3 text-lg"
              >
                About Us
                <ChevronRight size={22} />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-between py-3 text-lg"
              >
                Contact Us
                <ChevronRight size={22} />
              </a>
            </div>

            {/* Settings */}
            <div className="mt-8">
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="flex w-full items-center justify-between py-3 text-left text-lg font-bold"
              >
                Setting
                <ChevronDown
                  size={22}
                  className={`transition-transform ${
                    settingsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {settingsOpen && (
                <div className="mt-4 space-y-5 px-6">
                  <button className="flex w-full items-center justify-between text-lg">
                    My Account
                    <UserRound size={22} />
                  </button>

                  <button className="flex w-full items-center justify-between text-lg">
                    Language
                    <Landmark size={22} />
                  </button>

                  <button className="flex w-full items-center justify-between text-lg">
                    Currency
                    <Globe2 size={22} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
