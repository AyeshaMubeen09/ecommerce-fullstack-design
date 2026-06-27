import {
  TrendingUp,
  AlertTriangle,
  Star,
  BadgePercent,
  Boxes,
} from "lucide-react";

function RecentActivity({ products = [] }) {
  if (!products.length) {
    return (
      <div
        className="
          bg-white
          border
          border-[#E5E7EB]
          rounded-3xl
          p-6
          shadow-sm
        "
      >
        <h2 className="text-xl font-semibold mb-5">
          Recent Activity
        </h2>

        <p className="text-[#8B96A5]">
          No activity available.
        </p>
      </div>
    );
  }

  /* ============================================
      CALCULATIONS
  ============================================ */

  const topSeller = [...products].sort(
    (a, b) => b.orders - a.orders
  )[0];

  const lowStock = [...products].sort(
    (a, b) => a.stock - b.stock
  )[0];

  const highestRated = [...products].sort(
    (a, b) => b.rating - a.rating
  )[0];

  const biggestDiscount = [...products].sort(
    (a, b) =>
      parseInt(b.discount) -
      parseInt(a.discount)
  )[0];

  const categoryCount = new Set(
    products.map((item) => item.category)
  ).size;

  /* ============================================
      ACTIVITIES
  ============================================ */

  const activities = [
    {
      icon: TrendingUp,
      color: "bg-green-100",
      iconColor: "text-green-600",
      title: "Top Selling Product",
      description: `${topSeller.name} reached ${topSeller.orders} total orders.`,
    },

    {
      icon: AlertTriangle,
      color: "bg-red-100",
      iconColor: "text-red-600",
      title: "Low Stock Alert",
      description: `${lowStock.name} has only ${lowStock.stock} units remaining.`,
    },

    {
      icon: Star,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Highest Rated Product",
      description: `${highestRated.name} currently has a ${highestRated.rating}★ rating.`,
    },

    {
      icon: BadgePercent,
      color: "bg-blue-100",
      iconColor: "text-[#0D6EFD]",
      title: "Best Discount",
      description: `${biggestDiscount.name} is offering ${biggestDiscount.discount} off.`,
    },

    {
      icon: Boxes,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Categories",
      description: `${categoryCount} product categories are available.`,
    },
  ];

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
      {/* ===========================
            HEADER
      =========================== */}

      <div className="mb-6">

        <h2
          className="
            text-xl
            font-semibold
            text-[#1C1C1C]
          "
        >
          Recent Activity
        </h2>

        <p
          className="
            text-sm
            text-[#8B96A5]
            mt-1
          "
        >
          Live store insights
        </p>

      </div>

      {/* ===========================
            ACTIVITY LIST
      =========================== */}

      <div className="space-y-5">

        {activities.map(
          (activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                {/* Icon */}

                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${activity.color}
                  `}
                >
                  <Icon
                    size={22}
                    className={
                      activity.iconColor
                    }
                  />
                </div>

                {/* Text */}

                <div className="flex-1">

                  <h3
                    className="
                      font-semibold
                      text-[#1C1C1C]
                    "
                  >
                    {activity.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                      mt-1
                      leading-6
                    "
                  >
                    {activity.description}
                  </p>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}

export default RecentActivity;