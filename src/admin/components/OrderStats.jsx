import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Wallet,
  TrendingUp,
} from "lucide-react";

function OrderStats({
  totalOrders,
  pendingOrders,
  deliveredOrders,
  totalRevenue,
}) {
  /* =========================
      STATS DATA
  ========================= */

  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: ShoppingBag,
      bg: "bg-blue-50",
      iconBg: "bg-[#0D6EFD]",
      text: "All orders placed",
    },

    {
      title: "Pending Orders",
      value: pendingOrders,
      icon: Clock3,
      bg: "bg-yellow-50",
      iconBg: "bg-[#F59E0B]",
      text: "Awaiting processing",
    },

    {
      title: "Delivered",
      value: deliveredOrders,
      icon: CheckCircle2,
      bg: "bg-green-50",
      iconBg: "bg-[#16A34A]",
      text: "Successfully completed",
    },

    {
      title: "Revenue",
      value: `Rs ${totalRevenue.toLocaleString()}`,
      icon: Wallet,
      bg: "bg-purple-50",
      iconBg: "bg-[#7C3AED]",
      text: "Total sales revenue",
    },
  ];

  return (
    <>
      {/* =========================
          STATS GRID
      ========================= */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-8
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                border
                border-[#DEE2E7]
                rounded-2xl
                p-5
                transition
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                      font-medium
                    "
                  >
                    {item.title}
                  </p>

                  <h2
                    className="
                      mt-3
                      text-3xl
                      font-bold
                      text-[#1C1C1C]
                    "
                  >
                    {item.value}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${item.iconBg}
                  `}
                >
                  <Icon
                    size={26}
                    className="text-white"
                  />
                </div>
              </div>

              <div
                className="
                  mt-6
                  pt-4
                  border-t
                  border-[#EEF1F4]
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#16A34A]
                    text-sm
                    font-medium
                  "
                >
                  <TrendingUp size={16} />

                  <span>
                    Updated Today
                  </span>
                </div>

                <span
                  className="
                    text-xs
                    text-[#8B96A5]
                  "
                >
                  Live
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderStats;
