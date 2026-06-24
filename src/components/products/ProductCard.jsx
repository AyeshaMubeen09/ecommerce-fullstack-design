import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import productImages from "../../data/productImages";

/**
 * ProductCard Component
 * -----------------------------------------
 * Supports:
 * - Grid + List views
 * - Saved (wishlist) system (backend-ready)
 * - Dynamic product rendering
 *
 * Backend-ready props:
 * - savedItems → from API 
 * - onToggleSave → calls POST/DELETE favorites API
 */

function ProductCard({
  product,
  view,
  savedItems = [],
  onToggleSave,
}) {
  /**
   * -------------------------
   * Safe Product Normalization
   * -------------------------
   */

  const productId = product?._id || product?.id;

  const productName =
    product?.name || product?.title || "Product";

  const productPrice = product?.price || 0;

  const originalPrice = product?.originalPrice;

  const rating = Number(product?.rating || 0);
  const safeRating = Math.min(5, Math.max(0, rating));

  /**
   * Image handling (supports:
   * - mapped assets
   * - direct URLs
   */
  const imageSrc =
    productImages?.[product?.image] ||
    product?.image ||
    "";

  /**
   * Star rating UI
   */
  const ratingStars =
    "★".repeat(Math.round(safeRating)) +
    "☆".repeat(5 - Math.round(safeRating));

  /**
   * Check if product is saved (wishlist)
   */
  const isSaved = Array.isArray(savedItems)
    ? savedItems.some(
        (item) =>
          (item?._id || item?.id) === productId
      )
    : false;

  /**
   * Save handler (wishlist toggle)
   */
  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onToggleSave) return;

    onToggleSave(product);
  };

  /**
   * Prevent rendering broken product
   */
  if (!productId) return null;

  /* =========================
     GRID VIEW
  ========================= */

  if (view === "grid") {
    return (
      <Link
        to={`/products/${productId}`}
        className="block"
      >
        <div className="bg-white border border-[#DEE2E7] rounded-md overflow-hidden hover:shadow-md transition">

          {/* Image */}
          <div className="h-[240px] flex items-center justify-center p-4 border-b border-[#EFF2F4]">
            <img
              src={imageSrc}
              alt={productName}
              className="max-h-[190px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-start">

              {/* Price + Rating */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px] font-semibold text-[#1C1C1C]">
                    ${productPrice}
                  </span>

                  {originalPrice && (
                    <span className="text-[#8B96A5] text-[14px] line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#FF9017] text-[14px]">
                    {ratingStars}
                  </span>
                  <span className="text-[#FF9017] text-[14px]">
                    {safeRating}
                  </span>
                </div>
              </div>

              {/* Wishlist */}
              <button
                onClick={handleSaveClick}
                className="w-[40px] h-[40px] border border-[#DEE2E7] rounded-md flex items-center justify-center shrink-0 hover:bg-[#F7FAFC]"
              >
                <Heart
                  size={18}
                  className={
                    isSaved
                      ? "fill-[#0D6EFD] text-[#0D6EFD]"
                      : "text-[#0D6EFD]"
                  }
                />
              </button>
            </div>

            {/* Title */}
            <p className="mt-3 text-[#606060] text-[16px] leading-5 line-clamp-2">
              {productName}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  /* =========================
     LIST VIEW
  ========================= */

  return (
    <Link
      to={`/products/${productId}`}
      className="block"
    >
      <div className="bg-white border border-[#DEE2E7] rounded-md p-3 md:p-4 flex gap-3 md:gap-5 hover:shadow-md transition">

        {/* Image */}
        <div className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] flex items-center justify-center shrink-0">
          <img
            src={imageSrc}
            alt={productName}
            className="max-h-[180px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          <h3 className="text-[16px] md:text-[18px] font-medium text-[#1C1C1C] line-clamp-2">
            {productName}
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-[20px] md:text-[22px] font-semibold text-[#1C1C1C]">
              ${productPrice}
            </span>

            {originalPrice && (
              <span className="hidden md:inline text-[#8B96A5] line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2 text-[13px] md:text-[14px]">
            <span className="text-[#FF9017]">
              {ratingStars}
            </span>

            <span className="text-[#FF9017]">
              {safeRating}
            </span>

            <span className="text-[#DEE2E7]">•</span>

            <span className="text-[#8B96A5]">
              {product?.orders || 0} orders
            </span>
          </div>

          {product?.freeShipping && (
            <div className="text-[#00B517] text-[15px] font-medium mt-1">
              Free Shipping
            </div>
          )}

          <p className="hidden md:block mt-3 text-[#505050] text-[15px] leading-6 max-w-[650px]">
            {product?.description}
          </p>

          <button
            onClick={(e) => e.preventDefault()}
            className="hidden md:block mt-3 text-[#0D6EFD] font-medium"
          >
            View details
          </button>
        </div>

        {/* Wishlist */}
        <button
          onClick={handleSaveClick}
          className="hidden md:flex w-[40px] h-[40px] border border-[#DEE2E7] rounded-md items-center justify-center shrink-0 hover:bg-[#F7FAFC]"
        >
          <Heart
            size={18}
            className={
              isSaved
                ? "fill-[#0D6EFD] text-[#0D6EFD]"
                : "text-[#0D6EFD]"
            }
          />
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;