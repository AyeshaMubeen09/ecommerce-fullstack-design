import {
  ShieldCheck,
  Globe,
  Heart,
} from "lucide-react";

import ReactCountryFlag from "react-country-flag";

/**
 * ==================================================
 * SupplierCard
 * ==================================================
 * Displays supplier information
 * alongside product details.
 *
 * Current State:
 * - Uses fallback static supplier data
 * - Ready for backend integration
 *
 * Future Backend Integration:
 * GET /api/suppliers/:id
 * ==================================================
 */

function SupplierCard({
  product,
  onSaveForLater,
  isSaved,
}) {
  // =========================================
  // Temporary Supplier Data
  // Replace with real supplier data later
  // =========================================
  const supplier = {
    name:
      product?.supplierName ||
      "Guanjoi Trading LLC",

    country:
      product?.supplierCountry ||
      "Germany",

    city:
      product?.supplierCity ||
      "Berlin",

    countryCode:
      product?.supplierCountryCode ||
      "DE",

    verified:
      product?.verifiedSeller ??
      true,

    worldwideShipping:
      product?.worldwideShipping ??
      true,
  };

  const supplierInitial =
    supplier.name?.charAt(0)?.toUpperCase() ||
    "S";

  return (
    <div className="mt-4 lg:mt-0">
      {/* =========================================
          SUPPLIER CARD
      ========================================= */}
      <div className="bg-white border border-[#DEE2E7] rounded-xl p-4 shadow-sm">
        {/* Supplier Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#EFF2F4]">
          <div
            className="
              w-12
              h-12
              rounded-lg
              bg-[#C6F3F1]
              flex
              items-center
              justify-center
              text-[#4CA7A7]
              font-semibold
              text-[20px]
              shrink-0
            "
          >
            {supplierInitial}
          </div>

          <div className="min-w-0">
            <p className="text-[13px] text-[#8B96A5]">
              Supplier
            </p>

            <h3 className="font-semibold text-[15px] md:text-[16px] text-[#1C1C1C] truncate">
              {supplier.name}
            </h3>
          </div>
        </div>

        {/* Supplier Information */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-[#505050] text-[14px]">
            <ReactCountryFlag
              countryCode={
                supplier.countryCode
              }
              svg
              style={{
                width: "20px",
                height: "15px",
              }}
            />

            <span>
              {supplier.country},{" "}
              {supplier.city}
            </span>
          </div>

          {supplier.verified && (
            <div className="flex items-center gap-2 text-[#505050] text-[14px]">
              <ShieldCheck
                size={16}
                className="text-[#8B96A5]"
              />

              <span>
                Verified Seller
              </span>
            </div>
          )}

          {supplier.worldwideShipping && (
            <div className="flex items-center gap-2 text-[#505050] text-[14px]">
              <Globe
                size={16}
                className="text-[#8B96A5]"
              />

              <span>
                Worldwide shipping
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-2">
          <button
            className="
              w-full
              h-[44px]
              rounded-lg
              bg-[#0D6EFD]
              text-white
              font-medium
              text-[15px]
              hover:opacity-90
              transition
            "
          >
            Send inquiry
          </button>

          <button
            className="
              w-full
              h-[44px]
              rounded-lg
              border
              border-[#DEE2E7]
              bg-white
              text-[#0D6EFD]
              font-medium
              text-[15px]
            "
          >
            Seller's profile
          </button>
        </div>
      </div>

      {/* =========================================
          SAVE FOR LATER
      ========================================= */}
      <button
  onClick={onSaveForLater}
  className="
    mt-4
    w-full
    h-[44px]
    border
    border-[#DEE2E7]
    rounded-lg
    bg-white
    flex
    items-center
    justify-center
    gap-2
    font-medium
  "
>
  <Heart
    size={18}
    className={
      isSaved
        ? "fill-[#0D6EFD] text-[#0D6EFD]"
        : "text-[#0D6EFD]"
    }
  />

  <span>
    {isSaved
      ? "Saved"
      : "Save for later"}
  </span>
</button>
    </div>
  );
}

export default SupplierCard;