import { Link } from "react-router-dom";

/**
 * ==================================================
 * DiscountBanner
 * ==================================================
 * Reusable promotional banner
 *
 * Current Use:
 * - Cart page discount banner
 * ==================================================
 */

function DiscountBanner({
  title = "Super discount on more than 100 USD",
  description = "Save more on bulk orders. Get exclusive discounts and better pricing when purchasing from verified suppliers.",
  buttonText = "Shop now",
  className = "",
}) {
  return (
    <div
      className={`mt-8 rounded-md overflow-hidden ${className}`}
    >
      <div
        className="
          relative
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-4
          min-h-[120px]
          px-6
          md:px-8
          py-6
          md:py-0
        "
      >
        {/* =========================================
            Background Layer
        ========================================= */}
        <div className="absolute inset-0 bg-[#237CFF]" />

        {/* =========================================
            Right Diagonal Shape
        ========================================= */}
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[45%]
            bg-[#005ADE]
            skew-x-[25deg]
            origin-right
            hidden
            md:block
          "
        />

        {/* =========================================
            Content
        ========================================= */}
        <div className="relative z-10 max-w-[700px]">
          <h2 className="text-white text-[20px] md:text-[24px] font-semibold leading-snug">
            {title}
          </h2>

          <p className="text-[#BCD8FF] mt-1 text-[14px] md:text-[15px]">
            {description}
          </p>
        </div>

        {/* =========================================
            CTA Button
        ========================================= */}
        <Link
          to="/products"
          className="
            relative
            z-10
            h-[40px]
            px-6
            rounded-md
            bg-[#FF9017]
            text-white
            font-medium
            whitespace-nowrap
            transition
            hover:opacity-90
            flex
            items-center
            justify-center
          "
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default DiscountBanner;