import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  LayoutGrid,
  DollarSign,
} from "lucide-react";

import StatCard from "./StatCard";
import { getDashboardStats } from "../data/dashboardHelpers";
import { getAllOrders } from "../../api/orderApi";

function DashboardStats({ products = [] }) {
const [orders, setOrders] = useState([]);

useEffect(() => {
  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchOrders();
}, []);

const stats = getDashboardStats(products, orders);

  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >
      {/* Total Products */}
      <StatCard
        title="Total Products"
        value={stats.totalProducts}
        increase={12.5}
        icon={<Package size={30} strokeWidth={2} />}
        iconBg="bg-blue-100"
        iconColor="text-[#0D6EFD]"
      />

      {/* Total Orders */}
      <StatCard
        title="Total Orders"
        value={
    orders.filter(
      (order) => order.status !== "Cancelled"
    ).length
  }
        increase={8.3}
        icon={<ShoppingCart size={30} strokeWidth={2} />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      {/* Total Categories */}
      <StatCard
        title="Total Categories"
        value={stats.totalCategories}
        increase={15.7}
        icon={<LayoutGrid size={30} strokeWidth={2} />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

      {/* Total Revenue */}
      <StatCard
        title="Total Revenue"
        value={stats.totalRevenue}
        prefix="$"
        compact
        increase={20.4}
        icon={<DollarSign size={30} strokeWidth={2} />}
        iconBg="bg-yellow-100"
        iconColor="text-yellow-600"
      />
    </section>
  );
}

export default DashboardStats;