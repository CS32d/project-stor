import { Button } from "../components/ui/button";

import chairOne from "../../src/img/Rectangle 1.png";
import chairTwo from "../img/Rectangle 3.png";
import sofa from "../img/Rectangle 4.png";
import Layer1 from "../img/Layer_1.png";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-fuchsia-50 to-pink-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-2 lg:px-6 lg:py-16">

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
            Discover the Latest
            <br />

            <span className="relative inline-block">
              Furniture Trends

              <img
                src={Layer1}
                alt="Layer"
                className="absolute -bottom-2 left-1/2 w-[85%] -translate-x-1/2 lg:left-0 lg:w-auto lg:translate-x-0"
              />
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-sm text-sm leading-6 text-gray-600 sm:max-w-md md:text-base lg:mx-0 lg:mb-8">
            Shop the latest furniture items and discover modern styles for your home.
          </p>

          <Button className="rounded-none bg-black px-6 py-5 text-sm text-white hover:bg-fuchsia-500 sm:px-7">
            Explore More →
          </Button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">

          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={chairOne}
              alt="Modern chair"
              className="h-36 w-full object-cover sm:h-48 md:h-56"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={chairTwo}
              alt="Furniture chair"
              className="h-36 w-full object-cover sm:h-48 md:h-56"
            />
          </div>

          {/* Big Sofa */}
          <div className="col-span-2 overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={sofa}
              alt="Modern sofa"
              className="h-44 w-full object-cover sm:h-60 md:h-72"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;