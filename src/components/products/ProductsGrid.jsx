import ProductCard from "./ProductCard";

/**
 * ProductsGrid Component
 * -----------------------------------------
 * Handles:
 * - Grid/List layout switching
 * - Frontend pagination fallback
 * - Product rendering
 *
 * Backend-ready:
 * - Can be replaced with API pagination:
 *   GET /api/products?page=1&limit=10
 */

function ProductsGrid({
  products = [],
  view = "list",
  currentPage = 1,
  productsPerPage = 10,

  // reserved for backend pagination metadata
  totalProducts = null,
  savedItems = [],
  onToggleSave,
}) {
  /**
   * Ensure valid page number
   */
  const safePage = Math.max(1, currentPage);

  /**
   * Frontend pagination fallback
   * (REMOVE when backend pagination is used)
   */
  const startIndex = (safePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const hasProducts = Array.isArray(products);

  const displayedProducts = hasProducts
    ? products.slice(startIndex, endIndex)
    : [];

  const isEmpty = displayedProducts.length === 0;

  return (
    <div>
      {/* =========================
          PRODUCTS LIST
         ========================= */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
            : "space-y-3 md:space-y-4"
        }
      >
        {displayedProducts.map((product) => (
          <ProductCard
           key={product._id || product.id}
           product={product}
           view={view}
           savedItems={savedItems}
           onToggleSave={onToggleSave}
           />
        ))}
      </div>

      {/* =========================
          EMPTY STATE
         ========================= */}
      {isEmpty && (
        <div className="text-center text-[#8B96A5] py-10">
          No products found.
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;