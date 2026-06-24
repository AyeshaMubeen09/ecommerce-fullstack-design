function Pagination({
  totalProducts = 0,
  currentPage = 1,
  setCurrentPage,
  productsPerPage = 10,
  setProductsPerPage,
}) {
  /**
   * -----------------------------
   * Safe calculations
   * -----------------------------
   */
  const safeTotal = Number(totalProducts) || 0;
  const safeLimit = Number(productsPerPage) || 10;

  const totalPages = Math.ceil(safeTotal / safeLimit);

  /**
   * If no pagination needed
   */
  if (safeTotal === 0 || totalPages <= 1) {
    return null;
  }

  /**
   * Pagination grouping (3 pages per group)
   */
  const pagesPerGroup = 3;

  const safeCurrentPage = Math.max(1, currentPage);

  const currentGroup = Math.floor(
    (safeCurrentPage - 1) / pagesPerGroup
  );

  const startPage = currentGroup * pagesPerGroup + 1;

  const endPage = Math.min(
    startPage + pagesPerGroup - 1,
    totalPages
  );

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  /**
   * Change page safely
   */
  const changePage = (page) => {
    const safePage = Math.min(
      Math.max(1, page),
      totalPages
    );

    setCurrentPage(safePage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Previous group navigation
   */
  const handlePreviousGroup = () => {
    if (startPage > 1) {
      changePage(startPage - pagesPerGroup);
    }
  };

  /**
   * Next group navigation
   */
  const handleNextGroup = () => {
    if (endPage < totalPages) {
      changePage(endPage + 1);
    }
  };

  /**
   * Item range display
   */
  const firstItem =
    (safeCurrentPage - 1) * safeLimit + 1;

  const lastItem = Math.min(
    safeCurrentPage * safeLimit,
    safeTotal
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">

      {/* =========================
          PRODUCT COUNT INFO
         ========================= */}
      <p className="text-sm text-[#606060]">
        Showing {firstItem}–{lastItem} of{" "}
        {safeTotal} products
      </p>

      <div className="flex items-center gap-4">

        {/* =========================
            PAGE SIZE SELECTOR
           ========================= */}
        <select
          value={safeLimit}
          onChange={(e) => {
            setProductsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="
            h-[40px]
            px-4
            bg-white
            border
            border-[#DEE2E7]
            rounded-md
            text-[14px]
            text-[#1C1C1C]
            outline-none
            cursor-pointer
          "
        >
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
          <option value={30}>Show 30</option>
          <option value={50}>Show 50</option>
        </select>

        {/* =========================
            PAGINATION CONTROLS
           ========================= */}
        <div className="flex bg-white border border-[#DEE2E7] rounded-md overflow-hidden">

          {/* Previous Group */}
          <button
            onClick={handlePreviousGroup}
            disabled={startPage === 1}
            className="
              w-[44px]
              h-[40px]
              flex
              items-center
              justify-center
              border-r
              border-[#DEE2E7]
              text-[#8B96A5]
              hover:bg-[#F7FAFC]
              disabled:opacity-50
              disabled:hover:bg-white
            "
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`
                w-[44px]
                h-[40px]
                flex
                items-center
                justify-center
                border-r
                border-[#DEE2E7]
                transition
                ${
                  safeCurrentPage === page
                    ? "bg-[#EFF2F4] text-[#1C1C1C] font-medium"
                    : "text-[#505050] hover:bg-[#F7FAFC]"
                }
              `}
            >
              {page}
            </button>
          ))}

          {/* Next Group */}
          <button
            onClick={handleNextGroup}
            disabled={endPage >= totalPages}
            className="
              w-[44px]
              h-[40px]
              flex
              items-center
              justify-center
              text-[#8B96A5]
              hover:bg-[#F7FAFC]
              disabled:opacity-50
              disabled:hover:bg-white
            "
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;