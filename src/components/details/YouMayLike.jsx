import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "../../api/productApi";
import productImages from "../../data/productImages";

/**
 * ==================================================
 * YouMayLike
 * ==================================================
 * Product recommendation sidebar
 *
 * Current State:
 * - Fetches recommendations from products API
 * - Excludes current product
 * - Prioritizes same category products
 *
 * Future Backend Integration:
 * GET /api/products/recommendations/:id
 * ==================================================
 */

function YouMayLike({ product }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRecommendations =
      async () => {
        try {
          const data =
            await getProducts();

          // =========================================
          // Same Category Products
          // =========================================
          let recommendations =
            data.filter(
              (item) =>
                item._id !==
                  product?._id &&
                item.category ===
                  product?.category
            );

          // =========================================
          // Fallback Products
          // =========================================
          if (
            recommendations.length < 5
          ) {
            recommendations =
              data.filter(
                (item) =>
                  item._id !==
                  product?._id
              );
          }

          setItems(
            recommendations.slice(
              0,
              5
            )
          );
        } catch (error) {
          console.error(
            "Recommendations error:",
            error
          );
        }
      };

    if (product?._id) {
      fetchRecommendations();
    }
  }, [product]);

  const getImage = (item) =>
    productImages[item.image] ||
    item.image ||
    "";

  if (!items.length) return null;

  return (
    <>
      {/* =========================================
          DESKTOP SIDEBAR
      ========================================= */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-4">
        <h3 className="font-semibold text-[18px] text-[#1C1C1C] mb-4">
          You may like
        </h3>

        <div className="space-y-4">
          {items.map((item) => (
            <Link
              key={item._id}
              to={`/products/${item._id}`}
              className="flex gap-3 group"
            >
              <div className="w-[80px] h-[80px] border border-[#DEE2E7] rounded-md flex items-center justify-center bg-white shrink-0">
                <img
                  src={getImage(item)}
                  alt={item.name}
                  className="max-h-[60px] object-contain"
                />
              </div>

              <div className="flex-1">
                <h4
                  className="
                    text-[14px]
                    leading-5
                    text-[#1C1C1C]
                    line-clamp-2
                    group-hover:text-[#0D6EFD]
                  "
                >
                  {item.name}
                </h4>

                <p className="text-[#8B96A5] text-[14px] mt-1">
                  ${item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE SLIDER
      ========================================= */}
      <div className="lg:hidden mt-4">
        <h2 className="text-[18px] font-semibold px-4 mb-3">
          You may like
        </h2>

        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {items.map((item) => (
            <Link
              key={item._id}
              to={`/products/${item._id}`}
              className="
                shrink-0
                w-[170px]
                bg-white
                border
                border-[#DEE2E7]
                rounded-xl
                p-3
              "
            >
              <div className="h-[120px] flex items-center justify-center">
                <img
                  src={getImage(item)}
                  alt={item.name}
                  className="max-h-[100px] object-contain"
                />
              </div>

              <p className="font-semibold text-[15px] mt-3">
                ${item.price}
              </p>

              <p
                className="
                  text-[#606060]
                  text-[13px]
                  mt-1
                  leading-5
                  line-clamp-2
                "
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default YouMayLike;