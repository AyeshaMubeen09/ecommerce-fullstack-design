import {
  ArrowUpRight,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  getBestSellingProducts,
} from "../data/dashboardHelpers";

function TopSellingProducts({
  products = [],
}) {
  const topProducts =
    getBestSellingProducts(products, 5);

  return (
    <div
      className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-3xl
        shadow-sm
        p-6
      "
    >
      {/* =========================
          HEADER
      ========================= */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-[#1C1C1C]">
            Top Selling Products
          </h2>

          <p className="text-sm text-[#8B96A5] mt-1">
            Best performing products
          </p>

        </div>

        <Link
  to="/admin/products#products-table"
  className="
    text-[#0D6EFD]
    flex
    items-center
    gap-2
    text-sm
    font-medium
    hover:underline
    transition-colors
  "
>
  View All

  <ArrowUpRight size={16} />
</Link>

      </div>

      {/* =========================
          PRODUCT LIST
      ========================= */}

      <div className="space-y-5">

        {topProducts.map((product) => (

          <div
            key={product.id}
            className="
              flex
              items-center
              justify-between
            "
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <img
                src={`/src/assets/Final assets/${product.image}`}
                alt={product.name}
                className="
                  w-16
                  h-16
                  rounded-xl
                  object-cover
                  border
                "
              />

              <div>

                <h3
                  className="
                    font-semibold
                    text-[#1C1C1C]
                    line-clamp-1
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-[#8B96A5]
                    mt-1
                  "
                >
                  {product.category}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="text-right">

              <div className="font-bold text-[#1C1C1C]">
                ${product.price}
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-end
                  gap-1
                  text-sm
                  text-[#8B96A5]
                  mt-1
                "
              >

                <Star
                  size={15}
                  fill="#FACC15"
                  color="#FACC15"
                />

                {product.rating}

              </div>

              <div
                className="
                  text-xs
                  text-green-600
                  mt-1
                "
              >
                {product.orders} Orders
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TopSellingProducts;