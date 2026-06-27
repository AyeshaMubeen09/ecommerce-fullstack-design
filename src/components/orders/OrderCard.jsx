import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Eye,
} from "lucide-react";

import productImages from "../../data/productImages";

function OrderCard({ order }) {
  /* =========================
      STATE
  ========================= */

  const [expanded, setExpanded] =
    useState(false);

  /* =========================
      PRODUCT IMAGE
  ========================= */

  const getProductImage = (image) => {
    if (!image) {
      return "/placeholder.png";
    }

    if (
      image.startsWith("http") ||
      image.startsWith("https")
    ) {
      return image;
    }

    return (
      productImages[image] ||
      image ||
      "/placeholder.png"
    );
  };

  /* =========================
      STATUS COLORS
  ========================= */

  const statusClasses = {
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

  /* =========================
      BUY AGAIN
  ========================= */

  const buyAgainHandler = () => {
    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    let updatedCart = [...cart];

    order.items.forEach((item) => {
      const product = item.product || {
  _id: item.product,
  name: item.name,
  image: item.image,
  price: item.price,
};

      const exists = updatedCart.some(
        (cartItem) =>
          (cartItem._id ||
            cartItem.id) === product._id
      );

      if (!exists) {
        updatedCart.push({
          ...product,
          price:
            item.price ||
            product.price,
          qty:
            item.quantity || 1,
        });
      }
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(
      "Products added to your cart."
    );
  };


  return (
    <div
      className="
        bg-white
        border
        border-[#DEE2E7]
        rounded-2xl
        overflow-hidden
      "
    >
      {/* HEADER */}

      <div className="p-5 border-b border-[#F0F2F4]">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-4
          "
        >
          <div>
            <h2 className="text-lg font-bold">
              Order #
              {order._id.slice(-8)}
            </h2>

            <p className="text-sm text-[#8B96A5] mt-1">
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusClasses[
                  order.status
                ] ||
                "bg-gray-100 text-gray-700"
              }`}
            >
              {order.status}
            </span>

            <button
              onClick={() =>
                setExpanded(
                  !expanded
                )
              }
              className="flex items-center gap-2 text-[#0D6EFD]"
            >
              {expanded ? (
                <>
                  <ChevronUp
                    size={18}
                  />
                  Hide
                </>
              ) : (
                <>
                  <ChevronDown
                    size={18}
                  />
                  View
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SUMMARY */}

      <div className="p-5">
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          <div>
            <p className="text-sm text-[#8B96A5]">
              Items
            </p>

            <h3 className="mt-1 font-semibold">
              {order.items.length}
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#8B96A5]">
              Total
            </p>

            <h3 className="mt-1 font-semibold text-[#0D6EFD]">
              $
              {order.totalPrice.toFixed(
                2
              )}
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#8B96A5]">
              Payment
            </p>

            <h3 className="mt-1 font-semibold">
              {
                order.paymentMethod
              }
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#8B96A5]">
              Customer
            </p>

            <h3 className="mt-1 font-semibold">
              {order.user?.name}
            </h3>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}

      {expanded && (
        <div className="border-t border-[#F0F2F4] p-5">
          <div className="space-y-4">
            {order.items.map(
              (item) => (
                <div
                  key={item.product?._id || item._id || item.name}
                  
                  className="flex gap-4 items-center"
                >
<img
  src={getProductImage(
    item.product?.image || item.image
  )}
  alt={
    item.product?.name || item.name
  }
  className="
    w-20
    h-20
    rounded-xl
    border
    object-contain
    bg-white
  "
/>

<h3 className="font-semibold">
  {item.product?.name || item.name}
</h3>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {
                        item.product
                          ?.name
                      }
                    </h3>

                    <p className="text-sm text-[#8B96A5] mt-1">
                      Qty:
                      {" "}
                      {
                        item.quantity
                      }
                    </p>
                  </div>

                  <div className="font-bold">
                    $
                    {item.price}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={
                buyAgainHandler
              }
              className="
                flex-1
                h-[48px]
                rounded-xl
                bg-[#0D6EFD]
                text-white
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <RotateCcw
                size={18}
              />
              Buy Again
            </button>

            <button
              className="
                flex-1
                h-[48px]
                rounded-xl
                border
                border-[#DEE2E7]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Eye size={18} />
              Order Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderCard;