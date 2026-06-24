import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

/**
 * FilterSidebar Component
 * -----------------------------------------
 * Fully production-ready ecommerce filter system
 * Backend-ready (facets/aggregations supported)
 */

function FilterSidebar({
  products = [],

  selectedBrands = [],
  setSelectedBrands,

  selectedCategories = [],
  setSelectedCategories,

  selectedRatings = [],
  setSelectedRatings,

  selectedFeatures = [],
  setSelectedFeatures,

  selectedCondition = "",
  setSelectedCondition,

  selectedManufacturer = "",
  setSelectedManufacturer,

  minPrice = 0,
  setMinPrice,

  maxPrice = 999999,
  setMaxPrice,
}) {
  /* =========================
     UI TOGGLES
  ========================= */
  const [showCategory, setShowCategory] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showCondition, setShowCondition] = useState(true);
  const [showRatings, setShowRatings] = useState(true);
  const [showManufacturer, setShowManufacturer] = useState(true);

  /* =========================
     SHOW ALL TOGGLES
  ========================= */
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllConditions, setShowAllConditions] = useState(false);
  const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  /* =========================
     SAFE PRODUCTS
  ========================= */
  const safeProducts = Array.isArray(products) ? products : [];

  /* =========================
     DERIVED FILTER DATA
  ========================= */

  const categories = [
    ...new Set(
      safeProducts.flatMap((p) =>
        typeof p?.category === "string"
          ? p.category.split(",").map((c) => c.trim())
          : []
      )
    ),
  ].sort();

  const brands = [
    ...new Set(
      safeProducts.map((p) => p?.brand).filter(Boolean)
    ),
  ].sort();

  const features = [
    ...new Set(
      safeProducts.flatMap((p) => p?.features || []).filter(Boolean)
    ),
  ].sort();

  const conditions = [
    ...new Set(
      safeProducts.map((p) => p?.condition).filter(Boolean)
    ),
  ].sort();

  const manufacturers = brands;

  /* =========================
     SAFE TOGGLE HELPER
  ========================= */
  const toggleValue = (value, setter) => {
    setter((prev = []) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleBrandChange = (b) => toggleValue(b, setSelectedBrands);
  const handleCategoryChange = (c) => toggleValue(c, setSelectedCategories);
  const handleFeatureChange = (f) => toggleValue(f, setSelectedFeatures);
  const handleRatingChange = (r) => toggleValue(r, setSelectedRatings);

  /* =========================
     PRICE HANDLER
  ========================= */
  const handlePriceChange = (value) => {
    if (!Array.isArray(value)) return;

    const [min, max] = value;

    setMinPrice(Math.max(0, Number(min) || 0));
    setMaxPrice(Math.min(999999, Number(max) || 999999));
  };

  return (
    <aside className="space-y-1">

      {/* ========================= CATEGORY ========================= */}
      <div className="border-b border-[#DEE2E7] pb-5">
        <div
          onClick={() => setShowCategory(!showCategory)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Category</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showCategory ? "rotate-180" : ""
            }`}
          />
        </div>

        {showCategory && (
          <div className="space-y-3 text-[14px] text-[#505050]">
            {(showAllCategories ? categories : categories.slice(0, 4)).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`block text-left ${
                    selectedCategories.includes(category)
                      ? "text-[#0D6EFD] font-medium"
                      : ""
                  }`}
                >
                  {category}
                </button>
              )
            )}

            {categories.length > 4 && (
              <button
                type="button"
                onClick={() =>
                  setShowAllCategories(!showAllCategories)
                }
                className="text-[#0D6EFD] text-[13px]"
              >
                {showAllCategories ? "Show less" : "See all"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ========================= BRANDS ========================= */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div
          onClick={() => setShowBrands(!showBrands)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Brands</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showBrands ? "rotate-180" : ""
            }`}
          />
        </div>

        {showBrands && (
          <div className="space-y-3 text-[15px]">
            {(showAllBrands ? brands : brands.slice(0, 5)).map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}

            {brands.length > 5 && (
              <button
                type="button"
                onClick={() => setShowAllBrands(!showAllBrands)}
                className="text-[#0D6EFD] text-[13px]"
              >
                {showAllBrands ? "Show less" : "See all"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ========================= FEATURES ========================= */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div
          onClick={() => setShowFeatures(!showFeatures)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Features</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showFeatures ? "rotate-180" : ""
            }`}
          />
        </div>

        {showFeatures && (
          <div className="space-y-3 text-[15px]">
            {(showAllFeatures ? features : features.slice(0, 5)).map(
              (feature) => (
                <label
                  key={feature}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  {feature}
                </label>
              )
            )}

            {features.length > 5 && (
              <button
                type="button"
                onClick={() =>
                  setShowAllFeatures(!showAllFeatures)
                }
                className="text-[#0D6EFD] text-[13px]"
              >
                {showAllFeatures ? "Show less" : "See all"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ========================= PRICE ========================= */}
      <div className="border-b border-[#DEE2E7] pb-5">
        <div
          onClick={() => setShowPrice(!showPrice)}
          className="flex items-center justify-between mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Price range</h3>

          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              showPrice ? "rotate-180" : ""
            }`}
          />
        </div>

        {showPrice && (
          <div className="space-y-4">
            <div className="px-2 pt-2">
              <Slider
                range
                min={0}
                max={999999}
                value={[minPrice, maxPrice]}
                onChange={handlePriceChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Number(e.target.value) || 0)
                }
                className="w-full h-[40px] border border-[#DEE2E7] rounded-md px-3"
              />

              <input
                type="number"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value) || 999999)
                }
                className="w-full h-[40px] border border-[#DEE2E7] rounded-md px-3"
              />
            </div>
          </div>
        )}
      </div>

      {/* ========================= CONDITION ========================= */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div
          onClick={() => setShowCondition(!showCondition)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Condition</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showCondition ? "rotate-180" : ""
            }`}
          />
        </div>

        {showCondition && (
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selectedCondition === ""}
                onChange={() => setSelectedCondition("")}
              />
              Any
            </label>

            {(showAllConditions ? conditions : conditions.slice(0, 5)).map(
              (condition) => (
                <label key={condition} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={selectedCondition === condition}
                    onChange={() => setSelectedCondition(condition)}
                  />
                  {condition}
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* ========================= RATINGS ========================= */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div
          onClick={() => setShowRatings(!showRatings)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Ratings</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showRatings ? "rotate-180" : ""
            }`}
          />
        </div>

        {showRatings && (
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                <span className="text-[#FF9017]">
                  {"★".repeat(rating)}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ========================= MANUFACTURER ========================= */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div
          onClick={() => setShowManufacturer(!showManufacturer)}
          className="flex justify-between items-center mb-4 cursor-pointer"
        >
          <h3 className="font-semibold text-[16px]">Manufacturer</h3>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showManufacturer ? "rotate-180" : ""
            }`}
          />
        </div>

        {showManufacturer && (
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={selectedManufacturer === ""}
                onChange={() => setSelectedManufacturer("")}
              />
              Any
            </label>

            {(showAllManufacturers
              ? manufacturers
              : manufacturers.slice(0, 5)
            ).map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selectedManufacturer === m}
                  onChange={() => setSelectedManufacturer(m)}
                />
                {m}
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default FilterSidebar;