import {
  LayoutGrid,
  List,
  SlidersHorizontal,
} from "lucide-react";

/**
 * ProductTabs Component
 * ---------------------------------------
 * Handles:
 * - View switching (grid/list)
 * - Product count display
 * - Active filters UI
 * - Mobile + desktop responsive controls
 *
 * Backend-ready:
 * - products can come from API
 * - category can come from route or backend response
 */

function ProductTabs({
  view,
  setView,
  products = [],
  activeFilters = [],
  clearAllFilters,
  removeFilter,
  categoryFromUrl,
  selectedCategories = [],
}) {
  /**
   * Safe product count
   */
  const productCount = Array.isArray(products)
    ? products.length
    : 0;

  /**
   * Resolve category display name safely
   */
  const getCategoryLabel = () => {
    if (categoryFromUrl) return categoryFromUrl;

    if (Array.isArray(selectedCategories) && selectedCategories.length > 0) {
      return selectedCategories.join(", ");
    }

    return "All Products";
  };

  const categoryLabel = getCategoryLabel();

  return (
    <>
      {/* =========================
          DESKTOP HEADER
         ========================= */}
      <div className="hidden md:flex bg-white border border-[#DEE2E7] rounded-md p-4 items-center justify-between mb-5">

        {/* Product Count + Category */}
        <p className="text-sm">
          {productCount.toLocaleString()} items in{" "}
          <span className="font-semibold">
            {categoryLabel}
          </span>
        </p>

        {/* Controls */}
        <div className="flex items-center gap-3">

          {/* Verified filter (UI only for now) */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Verified only
          </label>

          {/* Sort dropdown (future backend hook) */}
          <select className="border border-[#DEE2E7] rounded-md px-3 py-2">
            <option>Featured</option>
          </select>

          {/* View Toggle */}
          <div className="flex border border-[#DEE2E7] rounded-md overflow-hidden">

            <button
              onClick={() => setView("grid")}
              className={`p-2 ${
                view === "grid" ? "bg-[#EFF2F4]" : ""
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 ${
                view === "list" ? "bg-[#EFF2F4]" : ""
              }`}
            >
              <List size={18} />
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP ACTIVE FILTERS
         ========================= */}
      {activeFilters.length > 0 && (
        <div className="hidden md:flex flex-wrap items-center gap-2 mb-5">

          {activeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => removeFilter(filter)}
              className="
                h-[32px]
                px-3
                border
                border-[#0D6EFD]
                rounded-md
                bg-white
                text-[14px]
              "
            >
              {filter} ✕
            </button>
          ))}

          <button
            onClick={clearAllFilters}
            className="ml-2 text-[#0D6EFD] text-[14px] font-medium"
          >
            Clear all filter
          </button>
        </div>
      )}

      {/* =========================
          MOBILE HEADER
         ========================= */}
      <div className="md:hidden mb-4">

        <div className="bg-white border-y border-[#DEE2E7] flex items-center">

          <button className="flex-1 h-[48px] border-r border-[#DEE2E7] text-[15px] font-medium">
            Sort
          </button>

          <button className="flex-1 h-[48px] border-r border-[#DEE2E7] text-[15px] font-medium">
            Newest
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 h-[48px] text-[15px] font-medium">
            <SlidersHorizontal size={18} />
            Filter
          </button>

          {/* View Toggle Mobile */}
          <div className="flex border-l border-[#DEE2E7]">

            <button
              onClick={() => setView("grid")}
              className={`w-[48px] h-[48px] flex items-center justify-center ${
                view === "grid" ? "bg-[#EFF2F4]" : ""
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`w-[48px] h-[48px] flex items-center justify-center border-l border-[#DEE2E7] ${
                view === "list" ? "bg-[#EFF2F4]" : ""
              }`}
            >
              <List size={18} />
            </button>

          </div>
        </div>

        {/* Mobile Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3 px-1">

            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => removeFilter(filter)}
                className="
                  whitespace-nowrap
                  px-4
                  h-[34px]
                  bg-white
                  border
                  border-[#DEE2E7]
                  rounded-full
                  text-[14px]
                  text-[#505050]
                  shrink-0
                "
              >
                {filter} ✕
              </button>
            ))}

          </div>
        )}

      </div>
    </>
  );
}

export default ProductTabs;