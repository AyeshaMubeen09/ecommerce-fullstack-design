import {
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

  import { Link } from "react-router-dom";

import {
  getLowStockProducts,
} from "../data/dashboardHelpers";

function LowStockProducts({
  products = [],
}) {
  const lowStockProducts =
    getLowStockProducts(products, 6);

  const getBadgeColor = (stock) => {
    if (stock <= 5)
      return "bg-red-100 text-red-600";

    if (stock <= 15)
      return "bg-yellow-100 text-yellow-700";

    return "bg-green-100 text-green-700";
  };

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
      {/* ==========================
          HEADER
      ========================== */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold">
            Low Stock Products
          </h2>

          <p className="text-sm text-[#8B96A5] mt-1">
            Products requiring attention
          </p>

        </div>

<Link
  to="/admin/products?filter=low-stock#products-table"
  className="
    flex
    items-center
    gap-2
    text-[#0D6EFD]
    text-sm
    font-medium
    hover:underline
  "
>
  View All

  <ArrowUpRight size={16} />
</Link>

      </div>

      {/* ==========================
          PRODUCT LIST
      ========================== */}

      <div className="space-y-5">

        {lowStockProducts.map((product) => (

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

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-red-100
                  flex
                  items-center
                  justify-center
                "
              >
                <AlertTriangle
                  className="text-red-600"
                  size={22}
                />
              </div>

              <div>

                <h3
                  className="
                    font-semibold
                    text-[#1C1C1C]
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-[#8B96A5]
                  "
                >
                  {product.category}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="text-right">

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${getBadgeColor(
                    product.stock
                  )}
                `}
              >
                {product.stock} Left
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LowStockProducts;