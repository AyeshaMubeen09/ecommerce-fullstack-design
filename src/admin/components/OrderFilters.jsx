import {
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";

function OrderFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <>
      {/* =========================
          FILTER CARD
      ========================= */}

      <div
        className="
          bg-white
          border
          border-[#DEE2E7]
          rounded-2xl
          p-4
          sm:p-5
          mb-8
        "
      >
        <div
          className="
            flex
            flex-col
            xl:flex-row
            gap-4
          "
        >
          {/* =========================
              SEARCH
          ========================= */}

          <div className="flex-1">
            <label
              className="
                text-sm
                font-medium
                text-[#556987]
                mb-2
                block
              "
            >
              Search Orders
            </label>

            <div className="relative">
              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#8B96A5]
                "
              />

              <input
                type="text"
                placeholder="Search by customer or Order ID..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  h-[50px]
                  pl-11
                  pr-4
                  border
                  border-[#DEE2E7]
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#0D6EFD]/20
                  transition
                "
              />
            </div>
          </div>

          {/* =========================
              STATUS
          ========================= */}

          <div className="w-full xl:w-[240px]">
            <label
              className="
                text-sm
                font-medium
                text-[#556987]
                mb-2
                block
              "
            >
              Status
            </label>

            <div className="relative">
              <Filter
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#8B96A5]
                "
              />

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[50px]
                  pl-11
                  pr-4
                  border
                  border-[#DEE2E7]
                  rounded-xl
                  bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#0D6EFD]/20
                "
              >
                <option>All</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Packed</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          {/* =========================
              SORT
          ========================= */}

          <div className="w-full xl:w-[240px]">
            <label
              className="
                text-sm
                font-medium
                text-[#556987]
                mb-2
                block
              "
            >
              Sort
            </label>

            <div className="relative">
              <ArrowUpDown
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#8B96A5]
                "
              />

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[50px]
                  pl-11
                  pr-4
                  border
                  border-[#DEE2E7]
                  rounded-xl
                  bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#0D6EFD]/20
                "
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Highest</option>
                <option>Lowest</option>
              </select>
            </div>
          </div>
        </div>

        {/* =========================
            ACTIVE FILTERS
        ========================= */}

        <div
          className="
            mt-5
            pt-5
            border-t
            border-[#EEF1F4]
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <span
            className="
              text-sm
              text-[#8B96A5]
              font-medium
            "
          >
            Active Filters:
          </span>

          <span
            className="
              px-3
              py-1.5
              rounded-full
              bg-[#EFF6FF]
              text-[#0D6EFD]
              text-xs
              font-medium
            "
          >
            Status: {statusFilter}
          </span>

          <span
            className="
              px-3
              py-1.5
              rounded-full
              bg-[#F8FAFC]
              text-[#556987]
              text-xs
              font-medium
            "
          >
            Sort: {sortBy}
          </span>

          {search && (
            <span
              className="
                px-3
                py-1.5
                rounded-full
                bg-[#ECFDF3]
                text-[#16A34A]
                text-xs
                font-medium
              "
            >
              "{search}"
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderFilters;