import {
  Eye,
  Package,
} from "lucide-react";

function OrdersTable({
  orders,
  onView,
  onStatusChange,
}) {
  /* =========================
      STATUS COLORS
  ========================= */

  const statusStyles = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    Processing:
      "bg-blue-100 text-blue-700",

    Packed:
      "bg-purple-100 text-purple-700",

    Shipped:
      "bg-indigo-100 text-indigo-700",

    Delivered:
      "bg-green-100 text-green-700",

    Cancelled:
      "bg-red-100 text-red-700",
  };

  return (
    <>
      {/* =========================
          DESKTOP TABLE
      ========================= */}

      <div
        className="
          hidden
          lg:block
          bg-white
          border
          border-[#DEE2E7]
          rounded-2xl
          overflow-hidden
        "
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* =========================
                TABLE HEADER
            ========================= */}

            <thead className="bg-[#F8FAFC]">
              <tr className="text-left">

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Order ID
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Customer
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Products
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Date
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Payment
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Total
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                  "
                >
                  Status
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#556987]
                    text-center
                  "
                >
                  Actions
                </th>

              </tr>
            </thead>

            {/* =========================
                TABLE BODY
            ========================= */}

            <tbody>

              {orders.length === 0 ? (

                <tr>

                  <td
                    colSpan={8}
                    className="
                      py-16
                      text-center
                    "
                  >
                    <Package
                      size={55}
                      className="
                        mx-auto
                        text-[#C4CDD5]
                        mb-4
                      "
                    />

                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-[#1C1C1C]
                      "
                    >
                      No Orders Found
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[#8B96A5]
                      "
                    >
                      Try changing your search or filters.
                    </p>

                  </td>

                </tr>

              ) : (

                orders.map((order) => (

                  <tr
                    key={order.id}
                    className="
                      border-t
                      border-[#EEF1F4]
                      hover:bg-[#FAFBFC]
                      transition
                    "
                  >

                    {/* ORDER ID */}

                    <td className="px-6 py-5">

                      <p
                        className="
                          font-semibold
                          text-[#1C1C1C]
                        "
                      >
                        {order.id}
                      </p>

                    </td>

                    {/* CUSTOMER */}

                    <td className="px-6 py-5">

                      <h3
                        className="
                          font-semibold
                          text-[#1C1C1C]
                        "
                      >
                        {order.customer}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-[#8B96A5]
                        "
                      >
                        {order.email}
                      </p>

                    </td>

                    {/* PRODUCTS */}

                    <td className="px-6 py-5">

                      <p className="font-medium">

                        {
                          order.products.length
                        } Product
                        {order.products.length >
                        1
                          ? "s"
                          : ""}

                      </p>

                    </td>

                    {/* DATE */}

                    <td className="px-6 py-5">

                      <span
                        className="
                          text-sm
                          text-[#556987]
                        "
                      >
                        {order.createdAt}
                      </span>

                    </td>

                    {/* PAYMENT */}

                    <td className="px-6 py-5">

                      <span
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-[#EEF6FF]
                          text-[#0D6EFD]
                          text-xs
                          font-semibold
                        "
                      >
                        {order.payment}
                      </span>

                    </td>

                    {/* TOTAL */}

                    <td className="px-6 py-5">

                      <span
                        className="
                          font-bold
                          text-[#1C1C1C]
                        "
                      >
                        Rs{" "}
                        {order.total.toLocaleString()}
                      </span>

                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <select
                        value={order.status}
                        onChange={(e) =>
                          onStatusChange(
                            order.id,
                            e.target.value
                          )
                        }
                        className={`
                          w-[150px]
                          h-[42px]
                          rounded-xl
                          border
                          border-[#DEE2E7]
                          px-3
                          font-medium
                          text-sm
                          focus:outline-none
                          ${statusStyles[
                            order.status
                          ]}
                        `}
                      >

                        <option>
                          Pending
                        </option>

                        <option>
                          Processing
                        </option>

                        <option>
                          Packed
                        </option>

                        <option>
                          Shipped
                        </option>

                        <option>
                          Delivered
                        </option>

                        <option>
                          Cancelled
                        </option>

                      </select>

                    </td>


                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      <div className="flex justify-center">
                        <button
                          onClick={() => onView(order)}
                          className="
                            h-[42px]
                            px-4
                            rounded-xl
                            bg-[#0D6EFD]
                            hover:bg-[#0B63E5]
                            text-white
                            transition
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                          "
                        >
                          <Eye size={16} />

                          View
                        </button>
                      </div>
                    </td>

                  </tr>

                ))
              )}

            </tbody>
          </table>
        </div>
      </div>

      {/* =========================
          MOBILE CARDS
      ========================= */}

      <div className="lg:hidden space-y-4">

        {orders.length === 0 ? (

          <div
            className="
              bg-white
              border
              border-[#DEE2E7]
              rounded-2xl
              p-8
              text-center
            "
          >
            <Package
              size={50}
              className="
                mx-auto
                text-[#C4CDD5]
                mb-4
              "
            />

            <h3
              className="
                text-lg
                font-semibold
              "
            >
              No Orders Found
            </h3>

            <p
              className="
                mt-2
                text-[#8B96A5]
              "
            >
              Try another filter.
            </p>
          </div>

        ) : (

          orders.map((order) => (

            <div
              key={order.id}
              className="
                bg-white
                border
                border-[#DEE2E7]
                rounded-2xl
                p-5
              "
            >

              {/* HEADER */}

              <div className="flex justify-between items-start">

                <div>

                  <h2
                    className="
                      font-bold
                      text-[#1C1C1C]
                    "
                  >
                    {order.id}
                  </h2>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    {order.createdAt}
                  </p>

                </div>

              </div>

              {/* CUSTOMER */}

              <div className="mt-5">

                <p
                  className="
                    text-sm
                    text-[#8B96A5]
                  "
                >
                  Customer
                </p>

                <h3
                  className="
                    mt-1
                    font-semibold
                    text-[#1C1C1C]
                  "
                >
                  {order.customer}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#8B96A5]
                  "
                >
                  {order.email}
                </p>

              </div>

              {/* SUMMARY */}

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-4
                "
              >

                <div>

                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    Products
                  </p>

                  <h4
                    className="
                      mt-1
                      font-semibold
                    "
                  >
                    {order.products.length}
                  </h4>

                </div>

                <div>

                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    Total
                  </p>

                  <h4
                    className="
                      mt-1
                      font-bold
                    "
                  >
                    Rs {order.total.toLocaleString()}
                  </h4>

                </div>

                <div>

                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    Payment
                  </p>

                  <h4
                    className="
                      mt-1
                      font-medium
                    "
                  >
                    {order.payment}
                  </h4>

                </div>

                <div>

                  <p
                    className="
                      text-sm
                      text-[#8B96A5]
                    "
                  >
                    Status
                  </p>

                  <select
                    value={order.status}
                    onChange={(e) =>
                      onStatusChange(
                        order.id,
                        e.target.value
                      )
                    }
                    className="
                      mt-2
                      w-full
                      h-[42px]
                      border
                      border-[#DEE2E7]
                      rounded-xl
                      px-3
                      text-sm
                      focus:outline-none
                    "
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Packed</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>

                </div>

              </div>

              {/* BUTTON */}

              <button
                onClick={() => onView(order)}
                className="
                  mt-6
                  w-full
                  h-[48px]
                  rounded-xl
                  bg-[#0D6EFD]
                  hover:bg-[#0B63E5]
                  text-white
                  font-medium
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Eye size={18} />

                View Order Details
              </button>

            </div>

          ))

        )}

      </div>

    </>
  );
}

export default OrdersTable;
