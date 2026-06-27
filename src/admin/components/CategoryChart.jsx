import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { Layers } from "lucide-react";

const COLORS = [
  "#0D6EFD",
  "#00C9A7",
  "#FFC107",
  "#8B5CF6",
  "#EF4444",
  "#06B6D4",
  "#F97316",
  "#14B8A6",
];

function CategoryChart({ products = [] }) {
  /* =========================
      CREATE CATEGORY DATA
      FROM DATABASE PRODUCTS
  ========================= */

  const categoryMap = {};

  products.forEach((product) => {
    const category =
      product.category?.trim() ||
      "Uncategorized";

    categoryMap[category] =
      (categoryMap[category] || 0) + 1;
  });

  const data = Object.entries(categoryMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const totalProducts = products.length;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl shadow-sm p-6 h-full">

      {/* =========================
          HEADER
      ========================= */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
          <Layers
            size={22}
            className="text-[#0D6EFD]"
          />
        </div>

        <div>

          <h2 className="text-lg font-semibold text-[#1C1C1C]">
            Category Analytics
          </h2>

          <p className="text-sm text-[#8B96A5]">
            Products by category
          </p>

        </div>

      </div>

      {/* =========================
          EMPTY STATE
      ========================= */}

      {data.length === 0 ? (
        <div className="h-[340px] flex items-center justify-center text-[#8B96A5]">
          No category data available.
        </div>
      ) : (
        <>

          {/* =========================
              DONUT CHART
          ========================= */}

          <div className="relative h-[230px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={82}
                  paddingAngle={3}
                  stroke="white"
                  strokeWidth={3}
                >

                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  ))}

                </Pie>

                <Tooltip
                  formatter={(value) => [
                    value,
                    "Products",
                  ]}
                />

              </PieChart>

            </ResponsiveContainer>

            {/* =========================
                CENTER TEXT
            ========================= */}

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

              <p className="text-xs text-[#8B96A5] uppercase tracking-wide">
                Total
              </p>

              <h3 className="text-3xl font-bold text-[#1C1C1C]">
                {totalProducts}
              </h3>

              <p className="text-sm text-[#8B96A5]">
                Products
              </p>

            </div>

          </div>

          {/* =========================
              CATEGORY LIST
          ========================= */}

          <div
            className="
              mt-5
              h-[180px]
              overflow-y-auto
              pr-2
              space-y-3
            "
          >

            {data.map((item, index) => {

              const percentage =
                totalProducts > 0
                  ? (
                      (item.value /
                        totalProducts) *
                      100
                    ).toFixed(1)
                  : 0;

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor:
                          COLORS[
                            index %
                              COLORS.length
                          ],
                      }}
                    />

                    <span className="text-sm font-medium text-[#374151]">
                      {item.name}
                    </span>

                  </div>

                  <div className="text-right">

                    <p className="text-sm font-semibold text-[#1C1C1C]">
                      {item.value}
                    </p>

                    <p className="text-xs text-[#8B96A5]">
                      {percentage}%
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </>
      )}

    </div>
  );
}

export default CategoryChart;