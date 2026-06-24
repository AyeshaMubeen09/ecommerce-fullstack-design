import {
  MessageSquareText,
  ShoppingBasket,
} from "lucide-react";

/**
 * ==================================================
 * ProductInfo
 * ==================================================
 * Displays:
 * - Product title
 * - Stock status
 * - Rating & sales info
 * - Tier pricing
 * - Product specifications
 * - Product description
 *
 * Current State:
 * - Fully dynamic from product object
 * - Safe fallbacks for missing fields
 * - Backend-ready structure
 *
 * Backend Integration:
 * product = {
 *   rating,
 *   reviews,
 *   sold,
 *   stock,
 *   pricingTiers,
 *   specifications,
 *   description,
 *   features
 * }
 * ==================================================
 */

function ProductInfo({
  product,
  onAddToCart,
  isInCart,
})
{
  // =========================
  // Derived Values
  // =========================
  const rating =
    Number(product?.rating) || 0;

  const reviews =
    Number(product?.reviews) ||
    Number(product?.orders) ||
    0;

  const sold =
    Number(product?.sold) ||
    Number(product?.orders) ||
    0;

  const ratingStars =
    "★".repeat(Math.round(rating)) +
    "☆".repeat(
      Math.max(
        0,
        5 - Math.round(rating)
      )
    );

  // =========================
  // Tier Pricing
  // TEMP:
  // Replace with backend tiers later
  // =========================
  const pricingTiers = [
    {
      price: product?.price || 0,
      label: "1–2 units",
      highlight: true,
    },
    {
      price: (
        (product?.price || 0) * 0.97
      ).toFixed(2),
      label: "3–5 units",
    },
    {
      price: (
        (product?.price || 0) * 0.93
      ).toFixed(2),
      label: "6+ units",
    },
  ];

  // =========================
  // Specifications
  // =========================
  const specifications = [
    {
      label: "Brand",
      value:
        product?.brand || "N/A",
    },
    {
      label: "Category",
      value:
        product?.category || "N/A",
    },
    {
      label: "Color",
      value:
        product?.color || "N/A",
    },
    {
      label: "Condition",
      value:
        product?.condition ||
        "N/A",
    },
    {
      label: "Stock",
      value:
        product?.stock || 0,
    },
    {
      label: "SKU",
      value:
        product?._id ||
        product?.id ||
        "N/A",
    },
  ];

  return (
    <div>
      {/* =========================================
          STOCK STATUS
      ========================================= */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#00B517] font-medium text-[14px]">
          {product?.stock > 0
            ? "✓ In stock"
            : "✕ Out of stock"}
        </span>
      </div>

      {/* =========================================
          PRODUCT TITLE
      ========================================= */}
      <h1 className="text-[22px] lg:text-[20px] font-semibold text-[#1C1C1C] leading-7">
        {product?.name}
      </h1>

      {/* =========================================
          PRODUCT META
      ========================================= */}
      <div className="flex flex-wrap items-center gap-3 mt-3 text-[14px]">
        <span className="text-[#FF9017]">
          {ratingStars}
        </span>

        <span className="text-[#FF9017]">
          {rating}
        </span>

        <span className="text-[#DEE2E7]">
          |
        </span>

        <div className="flex items-center gap-1 text-[#787A80]">
          <MessageSquareText
            size={15}
          />

          <span>
            {reviews} reviews
          </span>
        </div>

        <span className="text-[#DEE2E7]">
          |
        </span>

        <div className="flex items-center gap-1 text-[#787A80]">
          <ShoppingBasket
            size={15}
          />

          <span>{sold} sold</span>
        </div>
      </div>

      {/* =========================================
          TIER PRICING
      ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 bg-[#FFF4E8] rounded-md overflow-hidden border border-[#FFE5C4]">
        {pricingTiers.map(
          (tier, index) => (
            <div
              key={tier.label}
              className={`p-4 ${
                index !==
                pricingTiers.length - 1
                  ? "border-r border-[#FFE5C4]"
                  : ""
              }`}
            >
              <h3
                className={`text-[20px] font-semibold ${
                  tier.highlight
                    ? "text-[#FA3434]"
                    : "text-[#1C1C1C]"
                }`}
              >
                ${tier.price}
              </h3>

              <p className="text-[13px] text-[#606060] mt-1">
                {tier.label}
              </p>
            </div>
          )
        )}
      </div>

      {/* =========================================
          MOBILE ACTIONS
      ========================================= */}
      <div className="flex gap-3 mt-5 lg:hidden">
        <button
         onClick={onAddToCart}
         disabled={isInCart}
         className={`flex-1 h-[48px] rounded-md font-medium ${
         isInCart
      ? "bg-[#00B517] text-white"
      : "bg-[#0D6EFD] text-white"
  }`}
>
  {isInCart
    ? "✓ Added to Cart"
    : "Add to Cart"}
</button>

        <button className="flex-1 h-[48px] border border-[#0D6EFD] text-[#0D6EFD] rounded-md font-medium bg-white">
          Buy Now
        </button>
      </div>

      {/* =========================================
          PRODUCT DETAILS
      ========================================= */}
      <div className="hidden lg:block mt-5 text-[15px]">
        {/* Price Section */}
        <div className="border-b border-[#E7E7E7] pb-4">
          <div className="grid grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Price:
            </span>

            <span className="text-[#505050]">
              ${product?.price}
            </span>
          </div>
        </div>

        {/* Specifications */}
        <div className="py-4 border-b border-[#E7E7E7] space-y-3">
          {specifications.map(
            (spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-[140px_1fr]"
              >
                <span className="text-[#8B96A5]">
                  {spec.label}:
                </span>

                <span className="text-[#505050]">
                  {spec.value}
                </span>
              </div>
            )
          )}
        </div>

        {/* Description */}
        <div className="py-4 border-b border-[#E7E7E7] space-y-3">
          <div className="grid grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Description:
            </span>

            <span className="text-[#505050]">
              {product?.description ||
                "No description available."}
            </span>
          </div>

          {product?.features?.length >
            0 && (
            <div className="grid grid-cols-[140px_1fr]">
              <span className="text-[#8B96A5]">
                Features:
              </span>

              <span className="text-[#505050]">
                {product.features.join(
                  ", "
                )}
              </span>
            </div>
          )}

          <div className="grid grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Protection:
            </span>

            <span className="text-[#505050]">
              Buyer Protection &
              Easy Returns
            </span>
          </div>

          <div className="grid grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Warranty:
            </span>

            <span className="text-[#505050]">
              Manufacturer
              Warranty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;