import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

function ProductTabs({ view, setView }) {
  const filters = [
    "Huawei",
    "Apple",
    "64GB",
    "Samsung",
    "Xiaomi",
    "4 Stars",
    "128GB",
  ];

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:flex bg-white border border-[#DEE2E7] rounded-md p-4 items-center justify-between mb-5">
        <p className="text-sm">
          12,911 items in
          <span className="font-semibold">
            {" "}Mobile accessory
          </span>
        </p>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Verified only
          </label>

          <select className="border border-[#DEE2E7] rounded-md px-3 py-2">
            <option>Featured</option>
          </select>

          <div className="flex border border-[#DEE2E7] rounded-md overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${
                view === "grid"
                  ? "bg-[#EFF2F4]"
                  : ""
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 ${
                view === "list"
                  ? "bg-[#EFF2F4]"
                  : ""
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mb-4">
        {/* Top Controls */}
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

          <div className="flex border-l border-[#DEE2E7]">
            <button
              onClick={() => setView("grid")}
              className={`w-[48px] h-[48px] flex items-center justify-center ${
                view === "grid"
                  ? "bg-[#EFF2F4]"
                  : ""
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`w-[48px] h-[48px] flex items-center justify-center border-l border-[#DEE2E7] ${
                view === "list"
                  ? "bg-[#EFF2F4]"
                  : ""
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3 px-1">
          {filters.map((filter) => (
            <button
              key={filter}
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
              {filter}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductTabs;