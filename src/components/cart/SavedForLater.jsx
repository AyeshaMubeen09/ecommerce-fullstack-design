import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import productImages from "../../data/productImages";

/**
 * ==================================================
 * SavedForLater
 * ==================================================
 * Displays wishlist / saved products section
 *
 * Current Use:
 * - Cart Page
 * - Dedicated Wishlist Page
 * - User Dashboard
 * - Account Section
 *
 * Backend :
 * wishlistItems
 * remove item
 * move to cart
 * ==================================================
 */

function SavedForLater({
  wishlistItems = [],
  onRemoveWishlist,
  onMoveToCart,
}) {
  // =========================================
  // Helpers
  // =========================================
  const getImage = (item) =>
    productImages[item.image] ||
    item.image ||
    "";

  const getId = (item) =>
    item._id || item.id;

  // =========================================
  // Empty State
  // =========================================
  if (!wishlistItems.length) {
    return null;
  }

  return (
    <>
      {/* =========================================
          DESKTOP
      ========================================= */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-5 mt-8">
        {/* Section Title */}
        <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
          Saved for later
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-5">
          {wishlistItems.map((item) => (
            <div
              key={getId(item)}
              className="border border-[#DEE2E7] rounded-md p-4"
            >
              {/* Product Image */}
              <div className="h-[220px] bg-[#EEEEEE] rounded-md flex items-center justify-center">
                <img
                  src={getImage(item)}
                  alt={item.name}
                  className="max-h-[170px] object-contain"
                />
              </div>

              {/* Price */}
              <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1C]">
                ${item.price}
              </h3>

              {/* Product Name */}
              <p className="mt-2 text-[15px] text-[#606060] leading-5 line-clamp-2 min-h-[40px]">
                {item.name}
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-col gap-2">
                <button
  onClick={() =>
    onMoveToCart?.(item)
  }
  className="
    w-full
    h-[40px]
    border
    border-[#DEE2E7]
    rounded-md
    bg-white
    text-[#0D6EFD]
    font-medium
    flex
    items-center
    justify-center
    gap-2
  "
>
  <ShoppingCart size={16} />
  Move to cart
</button>

                {onRemoveWishlist && (
                  <button
                    onClick={() =>
                      onRemoveWishlist(
                        getId(item)
                      )
                    }
                    className="
                      w-full
                      h-[40px]
                      border
                      border-[#DEE2E7]
                      rounded-md
                      bg-white
                      text-[#FA3434]
                      font-medium
                    "
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE
      ========================================= */}
      <div className="lg:hidden mt-6">
        {/* Section Title */}
        <h2 className="text-[18px] font-semibold text-[#1C1C1C] mb-4 px-4">
          Saved for later
        </h2>

        {/* Product List */}
        <div className="space-y-3">
          {wishlistItems.map((item) => (
            <div
              key={getId(item)}
              className="
                bg-white
                border
                border-[#DEE2E7]
                rounded-md
                p-3
                flex
                gap-3
              "
            >
              {/* Image */}
              <div className="w-[90px] h-[90px] flex items-center justify-center shrink-0">
                <img
                  src={getImage(item)}
                  alt={item.name}
                  className="max-h-[80px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[16px] text-[#505050] line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-[18px] font-semibold mt-1">
                  ${item.price}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-3">
                  <button
  onClick={() =>
    onMoveToCart?.(item)
  }
  className="
    h-[36px]
    px-3
    border
    border-[#DEE2E7]
    rounded-md
    text-[#0D6EFD]
    bg-white
    text-sm
  "
>
  Move to cart
</button>

                  {onRemoveWishlist && (
                    <button
                      onClick={() =>
                        onRemoveWishlist(
                          getId(item)
                        )
                      }
                      className="
                        h-[36px]
                        px-3
                        border
                        border-[#DEE2E7]
                        rounded-md
                        text-[#FA3434]
                        bg-white
                        text-sm
                      "
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedForLater;