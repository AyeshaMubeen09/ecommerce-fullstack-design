import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { getMyOrders } from "../api/orderApi";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { ArrowLeft, Search, Filter } from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import OrderCard from "../components/orders/OrderCard";
import OrderEmpty from "../components/orders/OrderEmpty";

function Orders() {
  /* =====================================
      STATE
  ===================================== */

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const navigate = useNavigate();

  /* =====================================
      LOAD ORDERS
  ===================================== */
useEffect(() => {
  const fetchOrders = async () => {
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")
    );

    if (!userInfo?.token) {
      navigate("/login");
      return;
    }

    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.error("Orders Error:", error);
      setOrders([]);
    }
  };

  fetchOrders();
}, [navigate]);

  /* =====================================
      FILTERED ORDERS
  ===================================== */

  const filteredOrders = useMemo(() => {
    let data = [...orders];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      data = data.filter((order) => {
    const matchesOrder =
  order._id
    .slice(-8)
    .toLowerCase()
    .includes(keyword);

        const matchesProduct =
          order.items?.some((item) =>
            item.name
              ?.toLowerCase()
              .includes(keyword)
          );

        return (
          matchesOrder || matchesProduct
        );
      });
    }

    if (status) {
      data = data.filter(
        (order) =>
          order.status === status
      );
    }

    data.sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
      }

      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );
    });

    return data;
  }, [
    orders,
    search,
    status,
    sortBy,
  ]);

  return (
    <MainLayout
      hideNavbarMobile={true}
      hideFooterMobile={true}
    >
      {/* =====================================
          MOBILE HEADER
      ===================================== */}

      <div
        className="
          lg:hidden
          sticky
          top-0
          z-30
          bg-white
          border-b
          border-[#DEE2E7]
        "
      >
        <div
          className="
            h-[56px]
            px-4
            flex
            items-center
          "
        >
          <Link
            to="/profile"
            className="mr-3"
          >
            <ArrowLeft size={22} />
          </Link>

          <h1 className="text-[18px] font-semibold">
            My Orders
          </h1>
        </div>

        <div className="px-4 pb-4">

          {/* Search */}

          <div
            className="
              flex
              items-center
              bg-[#F8FAFC]
              border
              border-[#DEE2E7]
              rounded-xl
              px-3
              h-[46px]
            "
          >
            <Search
              size={18}
              className="text-[#8B96A5]"
            />

            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                flex-1
                ml-3
                outline-none
                bg-transparent
                text-sm
              "
            />
          </div>

          {/* Filters */}

          <div className="flex gap-3 mt-3">

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="
                flex-1
                h-[44px]
                rounded-xl
                border
                border-[#DEE2E7]
                px-3
                bg-white
                text-sm
              "
            >
              <option value="">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Processing">
                Processing
              </option>

              <option value="Delivered">
                Delivered
              </option>

              <option value="Cancelled">
                Cancelled
              </option>

            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="
                flex-1
                h-[44px]
                rounded-xl
                border
                border-[#DEE2E7]
                px-3
                bg-white
                text-sm
              "
            >
              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

            </select>

          </div>

        </div>
      </div>

      {/* =====================================
          PAGE CONTENT
      ===================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          py-6
        "
      >
        {/* ================================
            DESKTOP HEADER
        ================================= */}

        <div className="hidden lg:block">

          <div className="flex items-center text-sm text-[#8B96A5]">

            <Link
              to="/"
              className="hover:text-[#0D6EFD]"
            >
              Home
            </Link>

            <span className="mx-2">
              /
            </span>

            <span>
              Orders
            </span>

          </div>

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              gap-5
            "
          >
            <div>

              <h1 className="text-[30px] font-bold">
                My Orders
              </h1>

              <p className="text-[#8B96A5] mt-2">
                {filteredOrders.length}
                {" "}
                order(s)
              </p>

            </div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              {/* Search */}

              <div
                className="
                  flex
                  items-center
                  border
                  border-[#DEE2E7]
                  rounded-xl
                  px-4
                  h-[48px]
                  w-[320px]
                "
              >
                <Search
                  size={18}
                  className="text-[#8B96A5]"
                />

                <input
                  type="text"
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="
                    ml-3
                    flex-1
                    outline-none
                  "
                />
              </div>

              {/* Status */}

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
                className="
                  h-[48px]
                  px-4
                  rounded-xl
                  border
                  border-[#DEE2E7]
                "
              >
                <option value="">
                  All Status
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Processing">
                  Processing
                </option>

                <option value="Delivered">
                  Delivered
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>

              </select>

              {/* Sort */}

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value
                  )
                }
                className="
                  h-[48px]
                  px-4
                  rounded-xl
                  border
                  border-[#DEE2E7]
                "
              >
                <option value="newest">
                  Newest
                </option>

                <option value="oldest">
                  Oldest
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* =====================================
            ORDERS
        ===================================== */}

        <div className="mt-6 space-y-5">

          {filteredOrders.length === 0 ? (
            <OrderEmpty />
          ) : (
            filteredOrders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
              />
            ))
          )}

        </div>

      </section>
    </MainLayout>
  );
}

export default Orders;