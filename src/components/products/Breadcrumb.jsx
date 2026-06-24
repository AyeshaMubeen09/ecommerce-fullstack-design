import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * ==================================================
 * Breadcrumb Navigation
 * ==================================================
 *
 * Products Page:
 * <Breadcrumb selectedCategories={selectedCategories} />
 *
 * Product Details Page:
 * <Breadcrumb
 *   selectedCategories={[product.category]}
 *   productName={product.name}
 * />
 *
 * ==================================================
 */

function Breadcrumb({
  selectedCategories = [],
  productName = "",
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 flex-wrap text-sm text-[#8B96A5] mb-5"
    >
      {/* Home */}
      <Link
        to="/"
        className="hover:text-[#0D6EFD] transition-colors"
      >
        Home
      </Link>

      <ChevronRight size={14} />

      {/* Products */}
      <Link
        to="/products"
        className="hover:text-[#0D6EFD] transition-colors"
      >
        Products
      </Link>

      {/* Categories */}
      {selectedCategories
        .filter(Boolean)
        .map((category, index) => {
          const label =
            typeof category === "object"
              ? category.name ||
                category.title ||
                "Category"
              : category;

          const key =
            typeof category === "object"
              ? category.id ||
                category.slug ||
                index
              : `${label}-${index}`;

          return (
            <div
              key={key}
              className="flex items-center gap-2"
            >
              <ChevronRight size={14} />

              <span className="text-[#505050]">
                {label}
              </span>
            </div>
          );
        })}

      {/* Product Name */}
      {productName && (
        <div className="flex items-center gap-2">
          <ChevronRight size={14} />

          <span className="text-[#1C1C1C] font-medium">
            {productName}
          </span>
        </div>
      )}
    </nav>
  );
}

export default Breadcrumb;