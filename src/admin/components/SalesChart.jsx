import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { ChevronDown } from "lucide-react";

import { getMonthlySalesData } from "../data/chartData";

function SalesChart({ products = [] }) {
  const data = getMonthlySalesData(products);

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

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-xl font-semibold text-[#1C1C1C]">
            Sales Overview
          </h2>

          <p className="text-sm text-[#8B96A5] mt-1">
            Monthly revenue generated
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            border
            border-[#E5E7EB]
            rounded-xl
            px-4
            py-2
            text-sm
            hover:bg-[#F8FAFC]
            transition
          "
        >
          This Year

          <ChevronDown size={16} />
        </button>

      </div>

      {/* =========================
          CHART
      ========================= */}

      <div className="h-[360px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>

            <CartesianGrid
              stroke="#EEF2F7"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickFormatter={(value) =>
                `$${Math.round(value / 1000)}k`
              }
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              formatter={(value) => [
                `$${value.toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={4}
              dot={{
                r: 4,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesChart;