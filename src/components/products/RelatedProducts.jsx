import { Link } from "react-router-dom";
import recommendedProducts from "../../data/recommendedProducts";

/**
 * RelatedProducts Component
 * -----------------------------------------
 * Now supports CATEGORY-BASED filtering.
 *
 * Future backend equivalent:
 * GET /api/products/recommended?category=mobile
 */

function RelatedProducts({
  category = null, // 👈 optional prop (can come from product page)
}) {
  // Safe fallback for product list
  const products = Array.isArray(recommendedProducts)
    ? recommendedProducts
    : [];

  /**
   * 1. Filter products by category (if provided)
   * 2. If no category match → fallback to full list
   */
  const filteredProducts =
    category
      ? products.filter((product) => {
          const productCategory =
            product.category?.toLowerCase?.() || "";

          return productCategory === category.toLowerCase();
        })
      : products;

  /**
   * Shared Product Card Renderer
   */
  const renderProductCard = (product) => {
    if (!product) return null;

    return (
      <Link
        to="/products"
        className="border border-[#DEE2E7] rounded-md overflow-hidden bg-white hover:shadow-md transition"
      >
        {/* Image */}
        <div className="h-[120px] md:h-[160px] flex items-center justify-center p-3 md:p-4">
          <img
            src={product.image}
            alt={product.title || "Product"}
            className="max-h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="p-3">
          <p className="font-semibold text-[14px] md:text-[15px] text-[#1C1C1C]">
            ${product.price}
          </p>

          <p className="text-[13px] md:text-[14px] text-[#606060] mt-1 line-clamp-2">
            {product.title}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <section className="bg-white border border-[#DEE2E7] rounded-md p-4 md:p-6">
      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
        You may like
      </h2>

      {/* =========================
          MOBILE VIEW (Horizontal scroll)
         ========================= */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {filteredProducts.map((product) => (
          <div
            key={product.id || product._id}
            className="min-w-[140px] flex-shrink-0"
          >
            {renderProductCard(product)}
          </div>
        ))}
      </div>

      {/* =========================
          DESKTOP VIEW (Grid)
         ========================= */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {filteredProducts.slice(0, 5).map((product) => (
          <div key={product.id || product._id}>
            {renderProductCard(product)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;