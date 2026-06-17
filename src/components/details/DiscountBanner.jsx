function DiscountBanner() {
  return (
    <div className="relative overflow-hidden rounded-md h-[95px] flex items-center justify-between">

      {/* Left Blue Section */}
      <div className="absolute inset-0 bg-[#237CFF]" />

      {/* Right Lighter Blue Shape */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[45%]
          bg-[#005ADE]
          skew-x-[25deg]
          origin-top
          translate-x-10
        "
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full px-8">

        <div>
          <h2 className="text-white text-[22px] font-semibold leading-6">
            Super discount on more than 100 USD
          </h2>

          <p className="text-[#DDEBFF] text-[14px] mt-1">
           Save more on bulk orders
Get exclusive discounts and better pricing when purchasing from verified suppliers.
          </p>
        </div>

        <button className="bg-[#FF9017] text-white px-5 py-2.5 rounded-md font-medium text-[15px]">
          Shop now
        </button>

      </div>
    </div>
  );
}

export default DiscountBanner;