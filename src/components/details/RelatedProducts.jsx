import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "../../api/productApi";
import productImages from "../../data/productImages";

/**
 * ==================================================
 * RelatedProducts
 * ==================================================
 * Shows products related to the current product.
 *
 * Current Logic:
 * - Excludes current product
 * - Prioritizes same category products
 * - Falls back to other products if needed
 * - Fully dynamic
 *
 * Future Backend Integration:
 * GET /api/products/:id/related
 * ==================================================
 */

function RelatedProducts({ product }) {
  const [relatedProducts, setRelatedProducts] =
    useState([]);

  useEffect(() => {
    const fetchRelatedProducts =
      async () => {
        try {
          const data =
            await getProducts();

          const currentId =
            product?._id ||
            product?.id;

          // =========================
          // Remove current product
          // =========================
          const availableProducts =
            data.filter(
              (item) =>
                (item._id ||
                  item.id) !==
                currentId
            );

          // =========================
          // Same Category First
          // =========================
          const sameCategory =
            availableProducts.filter(
              (item) =>
                item.category ===
                product?.category
            );

          // =========================
          // Fallback Products
          // =========================
          const otherProducts =
            availableProducts.filter(
              (item) =>
                item.category !==
                product?.category
            );

          // =========================
          // Final Related Products
          // =========================
          const related = [
            ...sameCategory,
            ...otherProducts,
          ].slice(0, 6);

          setRelatedProducts(
            related
          );
        } catch (error) {
          console.error(
            "Related products error:",
            error
          );
        }
      };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  // =========================
  // Empty State
  // =========================
  if (!relatedProducts.length)
    return null;

  return (
    <div className="bg-white border border-[#DEE2E7] rounded-md p-5">
      {/* =========================
          Section Title
      ========================= */}
      <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
        Related products
      </h2>

      {/* =========================
          Products Grid
      ========================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {relatedProducts.map(
          (item) => {
            const productId =
              item._id || item.id;

            const imageSrc =
              productImages[
                item.image
              ] ||
              item.image ||
              "";

            return (
              <Link
                key={productId}
                to={`/products/${productId}`}
                className="group"
              >
                {/* Product Image */}
                <div
                  className="
                    h-[172px]
                    border
                    border-[#E3E5E8]
                    rounded-md
                    flex
                    items-center
                    justify-center
                    bg-[#F5F5F5]
                    p-3
                    transition
                    group-hover:border-[#0D6EFD]
                  "
                >
                  <img
                    src={imageSrc}
                    alt={item.name}
                    className="
                      max-h-[130px]
                      object-contain
                    "
                  />
                </div>

                {/* Product Name */}
                <h4
                  className="
                    mt-3
                    text-[14px]
                    text-[#505050]
                    leading-5
                    line-clamp-2
                  "
                >
                  {item.name}
                </h4>

                {/* Product Price */}
                <p className="mt-1 text-[14px] font-medium text-[#8B96A5]">
                  $
                  {Number(
                    item.price || 0
                  ).toFixed(2)}
                </p>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}

export default RelatedProducts;