import { Link } from "react-router-dom";

/**
 * ==================================================
 * DiscountBanner
 * ==================================================
 * Reusable promotional banner
 *
 * Current Use:
 * - Product Details Page
 *
 * Features:
 * - Reusable content via props
 * - Responsive layout
 * - Shop button routes to Products page
 *
 * Future Backend Integration:
 * - Promotional campaigns API
 * - Dynamic discount banners
 * ==================================================
 */

function DiscountBanner({
  title = "Super discount on orders above $100",
  description = "Save more on bulk orders. Get exclusive discounts and better pricing when purchasing from verified suppliers.",
  buttonText = "Shop now",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-md h-[95px] flex items-center justify-between ${className}`}
    >
      {/* =========================================
          Background Layers
      ========================================= */}

      {/* Main Blue Background */}
      <div className="absolute inset-0 bg-[#237CFF]" />

      {/* Right Accent Shape */}
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

      {/* =========================================
          Content
      ========================================= */}
      <div className="relative z-10 flex items-center justify-between w-full px-8">
        {/* Text Content */}
        <div>
          <h2 className="text-white text-[22px] font-semibold leading-6">
            {title}
          </h2>

          <p className="text-[#DDEBFF] text-[14px] mt-1 max-w-[650px]">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/products"
          className="
            bg-[#FF9017]
            text-white
            px-5
            py-2.5
            rounded-md
            font-medium
            text-[15px]
            whitespace-nowrap
            transition
            hover:opacity-90
          "
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default DiscountBanner;