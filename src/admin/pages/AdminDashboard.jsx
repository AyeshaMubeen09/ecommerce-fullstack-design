import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import DashboardStats from "../components/DashboardStats";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import TopSellingProducts from "../components/TopSellingProducts";
import RecentActivity from "../components/RecentActivity";
import LowStockProducts from "../components/LowStockProducts";

import { getProducts } from "../services/productService";

function AdminDashboard() {
  /* =========================
      STATE
  ========================= */

  const [products, setProducts] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  /* =========================
      FETCH PRODUCTS
  ========================= */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data =
          await getProducts();

console.log(data);
console.log(Array.isArray(data));

setProducts(data);

        setProducts(data);
      } catch (err) {
        console.error(err);

        setError(
          "Failed to load dashboard data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* =========================
      LOADING
  ========================= */

  if (loading) {
    return (
      <AdminLayout>
        <section className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
          <p className="text-lg text-[#8B96A5]">
            Loading dashboard...
          </p>
        </section>
      </AdminLayout>
    );
  }

  /* =========================
      ERROR
  ========================= */

  if (error) {
    return (
      <AdminLayout>
        <section className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
          <p className="text-red-500">
            {error}
          </p>
        </section>
      </AdminLayout>
    );
  }

  /* =========================
      PAGE
  ========================= */

  return (
    <AdminLayout>
      <section className="min-h-screen bg-[#F5F7FA]">


        <div className="max-w-[1500px] mx-auto p-6 space-y-6">

          <DashboardStats
            products={products}
          />

          <div
            className="
              grid
              xl:grid-cols-[2fr_1fr]
              gap-6
            "
          >
            <SalesChart
              products={products}
            />

            <CategoryChart
              products={products}
            />
          </div>

          <div
            className="
              grid
              xl:grid-cols-2
              gap-6
            "
          >
            <TopSellingProducts
              products={products}
            />

            <RecentActivity
              products={products}
            />
          </div>

          <LowStockProducts
            products={products}
          />

        </div>

      </section>
    </AdminLayout>
  );
}

export default AdminDashboard;