import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Package,
  CreditCard,
  Calendar,
  Truck,
} from "lucide-react";

function OrderDetailsModal({
  isOpen,
  order,
  onClose,
  onStatusChange,
}) {
  if (!isOpen || !order) return null;

  /* =========================
      ORDER TIMELINE
  ========================= */

  const timeline = [
    "Pending",
    "Processing",
    "Packed",
    "Shipped",
    "Delivered",
  ];

  const currentStep =
    timeline.indexOf(order.status);

  /* =========================
      CALCULATIONS
  ========================= */

  const subtotal = order.products.reduce(
    (sum, product) =>
      sum +
      product.price *
        product.quantity,
    0
  );

  const shipping = 0;

  const tax = 0;

  const total =
    subtotal + shipping + tax;

  return (
    <>
      {/* =========================
          OVERLAY
      ========================= */}

      <div
        className="
          fixed
          inset-0
          bg-black/40
          z-50
          overflow-y-auto
          p-4
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            my-10
            bg-white
            rounded-3xl
            shadow-2xl
            overflow-hidden
          "
        >

          {/* =========================
              HEADER
          ========================= */}
<div
  className="
    px-5
    sm:px-8
    py-6
    border-b
    border-[#EEF1F4]
    flex
    justify-between
    items-start
    gap-4
  "
>
  {/* Left */}
  <div className="min-w-0 flex-1">

    <h2
      className="
        text-xl
        sm:text-2xl
        font-bold
        text-[#1C1C1C]
      "
    >
      Order Details
    </h2>

    <p
      className="
        mt-2
        text-sm
        text-[#8B96A5]
        break-all
      "
    >
      {order._id || order.id}
    </p>

    <div
      className="
        mt-3
        flex
        flex-wrap
        items-center
        gap-3
      "
    >
      <div className="flex items-center gap-2 text-sm text-[#8B96A5]">
        <Calendar size={16} />
        <span>{order.createdAt}</span>
      </div>

      <span
        className="
          px-3
          py-1
          rounded-full
          text-xs
          font-medium
          bg-yellow-100
          text-yellow-700
        "
      >
        {order.status}
      </span>
    </div>

  </div>

  {/* Close */}
  <button
    onClick={onClose}
    className="
      flex-shrink-0
      w-10
      h-10
      sm:w-11
      sm:h-11
      rounded-xl
      border
      border-[#DEE2E7]
      hover:bg-[#F8FAFC]
      flex
      items-center
      justify-center
    "
  >
    <X size={20} />
  </button>
</div>
          {/* =========================
              CONTENT
          ========================= */}

          <div
  className="
    p-5
    sm:p-8
    grid
    lg:grid-cols-3
    gap-6
    lg:gap-8
  "
>

            {/* =========================
                LEFT COLUMN
            ========================= */}

            <div className="lg:col-span-2 space-y-6">

              {/* CUSTOMER */}

              <div
                className="
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-2 mb-5">

                  <User
                    size={20}
                    className="text-[#0D6EFD]"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Customer Information
                  </h3>

                </div>

                <div
                  className="
                    grid
                    sm:grid-cols-2
                    gap-5
                  "
                >

                  <div>

                    <p className="text-sm text-[#8B96A5]">
                      Customer Name
                    </p>

                    <h4 className="mt-1 font-semibold">
                      {order.customer}
                    </h4>

                  </div>

                  <div>

                    <p className="text-sm text-[#8B96A5]">
                      Phone
                    </p>

                    <div className="mt-1 flex items-center gap-2">

                      <Phone size={16} />

                      {order.phone}

                    </div>

                  </div>

                  <div>

                    <p className="text-sm text-[#8B96A5]">
                      Email
                    </p>

                    <div className="mt-1 flex items-center gap-2">

                      <Mail size={16} />

                      {order.email}

                    </div>

                  </div>

                  <div>

                    <p className="text-sm text-[#8B96A5]">
                      Ordered On
                    </p>

                    <div className="mt-1 flex items-center gap-2">

                      <Calendar size={16} />

                      {order.createdAt}

                    </div>

                  </div>

                </div>

              </div>

              {/* SHIPPING */}

              <div
                className="
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-2 mb-5">

                  <MapPin
                    size={20}
                    className="text-[#0D6EFD]"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Shipping Address
                  </h3>

                </div>

                <div className="space-y-2">

                  <p>
                    {order.shippingAddress.house}
                  </p>

                  <p>
                    {order.shippingAddress.street}
                  </p>

                  <p>
                    {order.shippingAddress.city}
                  </p>

                  <p>
                    {order.shippingAddress.country}
                  </p>

                </div>

              </div>

              {/* PRODUCTS */}

              <div
                className="
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-2 mb-5">

                  <Package
                    size={20}
                    className="text-[#0D6EFD]"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Ordered Products
                  </h3>

                </div>

                <div className="space-y-4">

                  {order.products.map(
                    (product) => (
                    <div
                      key={product.id}
                      className="
                        flex
                        justify-between
                        items-center
                        border
                        border-[#EEF1F4]
                        rounded-xl
                        p-4
                      "
                    >
                      <div>
                        <h4
                          className="
                            font-semibold
                            text-[#1C1C1C]
                          "
                        >
                          {product.name}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-[#8B96A5]
                          "
                        >
                          Quantity: {product.quantity}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold">
                          Rs{" "}
                          {product.price.toLocaleString()}
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-[#8B96A5]
                          "
                        >
                          Rs{" "}
                          {(
                            product.price *
                            product.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {/* =========================
                    ORDER SUMMARY
                ========================= */}

                <div
                  className="
                    mt-8
                    border-t
                    border-[#EEF1F4]
                    pt-6
                    space-y-3
                  "
                >
                  <div className="flex justify-between">
                    <span>Subtotal</span>

                    <span>
                      Rs {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>

                    <span>Rs 0</span>
                  </div>

                  <div
                    className="
                      pt-3
                      border-t
                      border-[#EEF1F4]
                      flex
                      justify-between
                      text-lg
                      font-bold
                    "
                  >
                    <span>Total</span>

                    <span>
                      Rs {total.toLocaleString()}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* =========================
                RIGHT COLUMN
            ========================= */}

            <div className="space-y-6">

              {/* PAYMENT */}

              <div
                className="
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  p-6
                "
              >
                <div className="flex items-center gap-2 mb-5">
                  <CreditCard
                    size={20}
                    className="text-[#0D6EFD]"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Payment
                  </h3>
                </div>

                <p className="font-semibold">
                  {order.payment}
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#8B96A5]
                  "
                >
                  Payment gateway will be
                  integrated later.
                </p>
              </div>
              
              {/* TIMELINE */}

              <div
                className="
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  p-6
                "
              >
                <div className="flex items-center gap-2 mb-6">
                  <Truck
                    size={20}
                    className="text-[#0D6EFD]"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Delivery Progress
                  </h3>
                </div>

                <div className="space-y-5">
                  {timeline.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >
                        <div
                          className={`
                            w-5
                            h-5
                            rounded-full
                            ${
                              index <=
                              currentStep
                                ? "bg-[#0D6EFD]"
                                : "bg-[#D9E1EA]"
                            }
                          `}
                        />

                        <div>
                          <p
                            className={`
                              font-medium
                              ${
                                index <=
                                currentStep
                                  ? "text-[#1C1C1C]"
                                  : "text-[#8B96A5]"
                              }
                            `}
                          >
                            {step}
                          </p>

                          {index ===
                            currentStep && (
                            <p
                              className="
                                text-xs
                                text-[#0D6EFD]
                                mt-1
                              "
                            >
                              Current Status
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* CLOSE */}

              <button
                onClick={onClose}
                className="
                  w-full
                  h-[50px]
                  rounded-xl
                  border
                  border-[#DEE2E7]
                  hover:bg-[#F8FAFC]
                  transition
                  font-medium
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default OrderDetailsModal;