import customerImage from "../img/Image.png";

const stats = [
  {
    value: "10x",
    label: "Increase in productivity",
  },
  {
    value: "300%",
    label: "Return on investment",
  },
  {
    value: "5k+",
    label: "Happy customers",
  },
  {
    value: "100+",
    label: "5-star reviews",
  },
];

function SuccessSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left Image */}
      <div className="mx-auto w-full max-w-md lg:max-w-none">
  <img
    src={customerImage}
    alt="Happy customer"
    className="h-auto w-full rounded-[28px] object-contain lg:rounded-[45px]"
  />
</div>

        {/* Right Content */}
        <div>
          <p className="text-xs text-black sm:text-sm">
            Customer Stories
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-fuchsia-500 sm:text-4xl md:mt-4 md:text-5xl">
            Success History of
            <br />
            Our Customer
          </h2>

          <p className="mt-4 max-w-lg text-xs leading-5 text-fuchsia-500 sm:text-sm md:mt-6">
            Emphasise time-saving and use numbers to maximise credibility.
          </p>

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 md:mt-10 lg:gap-x-16 lg:gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-bold text-gray-500 sm:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SuccessSection;