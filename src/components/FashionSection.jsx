import { ArrowLeft, ArrowRight } from "lucide-react";
import fashionImage from "../img/Rectangle 19.png";

function FashionSection() {
  return (
    <section className="bg-gradient-to-br from-slate-100 via-indigo-50 to-fuchsia-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Arrows */}
        <div className="mb-8 flex justify-end gap-3 md:mb-10">
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 transition hover:bg-black hover:text-white">
            <ArrowLeft size={18} />
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 transition hover:bg-black hover:text-white">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Side */}
          <div>
            <div className="mb-4 h-5 w-5 rounded-tl-full bg-fuchsia-500 md:h-6 md:w-6" />

            <h2 className="max-w-lg text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
              Enjoy Our Latest Fashion Trends
              <br className="hidden sm:block" />
              and Style
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-700 sm:text-base md:mt-6 md:text-lg md:leading-8">
              Ship our curated collection of fashion items and stay ahead of the
              fashion game
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-8 md:mt-12 lg:mt-16 lg:gap-10">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Quality</h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  Our fashion items are crafted with the highest materials and
                  attention to details
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">Style</h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  Express you unique style with our wide range of trendy items.
                </p>
              </div>
            </div>

            {/* Explore */}
            <div className="mt-8 flex justify-start sm:justify-end md:mt-12 lg:mt-16">
              <button className="flex items-center gap-3 bg-black px-5 py-3 text-xs text-white transition hover:bg-fuchsia-500 sm:px-6 sm:text-sm">
                Explore
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={fashionImage}
              alt="Latest Fashion"
              className="h-auto w-full rounded-[28px] object-contain lg:rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FashionSection;
