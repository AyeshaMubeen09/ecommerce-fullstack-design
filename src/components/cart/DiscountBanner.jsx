function DiscountBanner() {
  return (
    <div className="mt-8 rounded-md overflow-hidden">
      <div className="relative flex items-center justify-between min-h-[120px] px-8">

        {/* Dark Blue Background */}
        <div className="absolute inset-0 bg-[#237CFF]" />

        {/* Light Blue Shape */}
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[38%]
            bg-[#005ADE]
            skew-x-[25deg]
            origin-right
          "
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-white text-[24px] font-semibold">
            Super discount on more than 100 USD
          </h2>

          <p className="text-[#BCD8FF] mt-1 text-[15px]">
            Save more on bulk orders

Get exclusive discounts and better pricing when purchasing from verified suppliers
          </p>
        </div>

        {/* Button */}
        <button
          className="
            relative
            z-10
            h-[40px]
            px-6
            rounded-md
            bg-[#FF9017]
            text-white
            font-medium
          "
        >
          Shop now
        </button>

      </div>
    </div>
  );
}

export default DiscountBanner;