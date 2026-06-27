import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";

import {
  getOrders,
  updateOrderStatus,
} from "../data/orderService";

import AdminLayout from "../layouts/AdminLayout";

import OrderStats from "../components/OrderStats";
import OrderFilters from "../components/OrderFilters";
import OrdersTable from "../components/OrdersTable";
import OrderDetailsModal from "../components/OrderDetailsModal";

import {
  ChevronRight,
  RotateCcw,
} from "lucide-react";

function AdminOrders() {
const [orders, setOrders] = useState([]);

  /* =========================
      STATES
  ========================= */

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Newest");

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const [modalOpen, setModalOpen] =
    useState(false);

    /* =========================
    LOAD ORDERS
========================= */

useEffect(() => {
  const fetchOrders = async () => {
    try {
      const data = await getOrders();

      setOrders(
        Array.isArray(data) ? data : []
      );
    } catch (error) {
      console.error(error);

      setOrders([]);
    }
  };

  fetchOrders();
}, []);
  /* =========================
      ORDER STATUS UPDATE
  ========================= */

const handleStatusChange = async (
  orderId,
  newStatus
) => {
  try {
    await updateOrderStatus(
      orderId,
      newStatus
    );

    const updatedOrders =
      await getOrders();

    setOrders(updatedOrders);

    if (
      selectedOrder &&
      selectedOrder._id === orderId
    ) {
      setSelectedOrder({
        ...selectedOrder,
        status: newStatus,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

  /* =========================
      ORDER DETAILS
  ========================= */

  const openOrder = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeOrder = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  /* =========================
      REFRESH
  ========================= */

  const refreshHandler = () => {
    window.location.reload();
  };

  /* =========================
      FILTERED ORDERS
  ========================= */

  const filteredOrders = useMemo(() => {
    let data = [...orders];

    if (search.trim()) {
      data = data.filter((order) => {
        return (
          order.customer
            .toLowerCase()
            .includes(search.toLowerCase()) ||

          order._id
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
    }

    if (statusFilter !== "All") {
      data = data.filter(
        (order) =>
          order.status === statusFilter
      );
    }

    switch (sortBy) {
      case "Highest":
        data.sort(
          (a, b) =>
            b.total - a.total
        );
        break;

      case "Lowest":
        data.sort(
          (a, b) =>
            a.total - b.total
        );
        break;

      case "Oldest":
        data.reverse();
        break;

      default:
        break;
    }

    return data;
  }, [
    orders,
    search,
    statusFilter,
    sortBy,
  ]);

  /* =========================
      DASHBOARD STATS
  ========================= */

  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      (item) =>
        item.status === "Pending"
    ).length;

  const deliveredOrders =
    orders.filter(
      (item) =>
        item.status === "Delivered"
    ).length;

  const totalRevenue =
    orders.reduce(
      (sum, order) =>
        sum + order.total,
      0
    );

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

        {/* =========================
            PAGE HEADER
        ========================= */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-start
            lg:justify-between
            gap-5
            mb-8
          "
        >
          <div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-[#1C1C1C]
              "
            >
              Orders
            </h1>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                mt-3
                text-sm
              "
            >
              <Link
                to="/admin"
                className="
                  text-[#8B96A5]
                  hover:text-[#0D6EFD]
                "
              >
                Dashboard
              </Link>

              <ChevronRight
                size={14}
                className="text-[#8B96A5]"
              />

              <span className="text-[#556987]">
                Orders
              </span>
            </div>
          </div>

          <button
            onClick={refreshHandler}
            className="
              h-[48px]
              px-5
              rounded-xl
              border
              border-[#DEE2E7]
              bg-white
              hover:bg-[#F8FAFC]
              transition
              flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-auto
            "
          >
            <RotateCcw size={18} />

            Refresh
          </button>
        </div>

        {/* =========================
            STATS
        ========================= */}

        <OrderStats
          totalOrders={totalOrders}
          pendingOrders={pendingOrders}
          deliveredOrders={deliveredOrders}
          totalRevenue={totalRevenue}
        />

        {/* =========================
            FILTERS
        ========================= */}

        <OrderFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* =========================
            ORDERS TABLE
        ========================= */}

        <OrdersTable
          orders={filteredOrders}
          onView={openOrder}
          onStatusChange={
            handleStatusChange
          }
        />

        {/* =========================
            ORDER DETAILS MODAL
        ========================= */}

        <OrderDetailsModal
          isOpen={modalOpen}
          order={selectedOrder}
          onClose={closeOrder}
          onStatusChange={
            handleStatusChange
          }
        />
      </div>
    </AdminLayout>
  );
}

export default AdminOrders;