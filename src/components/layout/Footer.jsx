import { useState } from "react";
import logo from "../../img/logo.png";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-slate-100 px-4 py-10 sm:px-6 md:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Furniture Store Logo"
              className="h-8 w-auto sm:h-10"
            />

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:mt-5">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center lg:mt-7"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full border border-gray-400 bg-white px-4 text-sm outline-none focus:border-fuchsia-500"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-full border border-gray-500 px-6 text-sm text-gray-600 transition hover:bg-black hover:text-white sm:w-auto sm:px-7"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 max-w-lg text-[10px] leading-5 text-gray-500 sm:text-[11px]">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold text-black sm:text-base">
              About Us
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#faq" className="hover:text-fuchsia-500">
                FAQ
              </a>

              <a href="#contact" className="hover:text-fuchsia-500">
                Contact
              </a>

              <a href="#returns" className="hover:text-fuchsia-500">
                Returns
              </a>

              <a href="#blog" className="hover:text-fuchsia-500">
                Blog
              </a>

              <a href="#shipping" className="hover:text-fuchsia-500">
                Shipping
              </a>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-semibold text-black sm:text-base">
              Customer Support
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#affiliates" className="hover:text-fuchsia-500">
                Affiliates
              </a>

              <a href="#payments" className="hover:text-fuchsia-500">
                Apple Pay Payments
              </a>

              <a href="#returns" className="hover:text-fuchsia-500">
                Returns
              </a>

              <a href="#returns-policy" className="hover:text-fuchsia-500">
                Returns Policy
              </a>

              <a href="#support" className="hover:text-fuchsia-500">
                Support
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-black sm:text-base">
              Follow Us
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-fuchsia-500"
              >
                <span className="font-bold">f</span>
                Facebook
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-fuchsia-500"
              >
                <span className="font-bold">◎</span>
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-fuchsia-500"
              >
                <span className="font-bold">♥</span>
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-fuchsia-500"
              >
                <span className="font-bold">in</span>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-500 md:mt-14 md:flex md:items-center md:justify-between">

          <p>
            © 2026 GFurniture. All rights reserved.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 md:mt-0 lg:gap-8">
            <a href="#privacy" className="hover:text-black">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-black">
              Terms of Service
            </a>

            <a href="#cookies" className="hover:text-black">
              Cookies Settings
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;