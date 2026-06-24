import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MoreVertical,
  Minus,
  Plus,
} from "lucide-react";

import productImages from "../../data/productImages";

function CartItems({
  cartItems = [],
  setCartItems,
  onSaveForLater,
}) {
  const [activeMenu, setActiveMenu] =
    useState(null);

 const [savedItems, setSavedItems] =
  useState({});

  const getId = (item) =>
  item?._id || item?.id;

  // =========================
  // QUANTITY HANDLERS
  // =========================

 const increaseQty = (id) => {
  if (!setCartItems) return;

  setCartItems((prev) =>
    prev.map((item) =>
      getId(item) === id
        ? {
            ...item,
            qty:
              (Number(item.qty) || 1) + 1,
          }
        : item
    )
  );
};

const decreaseQty = (id) => {
  if (!setCartItems) return;

  setCartItems((prev) =>
    prev.map((item) =>
      getId(item) === id
        ? {
            ...item,
            qty: Math.max(
              1,
              (Number(item.qty) || 1) - 1
            ),
          }
        : item
    )
  );
};

  // =========================
  // REMOVE ITEM
  // =========================

const removeItem = (id) => {
  if (!setCartItems) return;

  setCartItems((prev) =>
    prev.filter(
      (item) => getId(item) !== id
    )
  );
};


  // =========================
  // REMOVE ALL
  // =========================

  const removeAllItems = () => {
    if (!setCartItems) return;

    setCartItems([]);
  };

  //handler 

  const handleSaveForLater = (item) => {
  const id = getId(item);

  setSavedItems((prev) => ({
    ...prev,
    [id]: true,
  }));

  onSaveForLater?.(item);
};

  //empty cart 

  if (!cartItems.length) {
  return (
    <div className="bg-white border border-[#DEE2E7] rounded-md p-10 text-center">
      <h3 className="text-[20px] font-semibold text-[#1C1C1C]">
        Your cart is empty
      </h3>

      <Link
        to="/products"
        className="inline-flex mt-4 px-5 h-[40px] items-center rounded-md bg-[#127FFF] text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

  return (
    <>
      {/* ========================= */}
      {/* DESKTOP VERSION */}
      {/* ========================= */}

      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-5">
        {cartItems.map(
          (item, index) => {
            const imageSrc =
              productImages[
                item.image
              ] || item.image;

            return (
              <div key={item._id}>
                <div className="flex justify-between gap-5 py-4">
                  {/* LEFT */}

                  <div className="flex gap-4">
                    <div className="w-[90px] h-[90px] border border-[#DEE2E7] rounded-md flex items-center justify-center bg-white">
                      <img
                        src={imageSrc}
                        alt={item.name}
                        className="max-h-[70px] object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium text-[16px] text-[#1C1C1C]">
                        {item.name}
                      </h3>

                      <p className="text-[#8B96A5] text-[14px] mt-1">
                        Category:{" "}
                        {item.category ||
                          "N/A"}
                      </p>

                      <p className="text-[#8B96A5] text-[14px]">
                        Brand:{" "}
                        {item.brand ||
                          "N/A"}
                      </p>

                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() =>
                            removeItem(
                              item._id
                            )
                          }
                          className="h-[30px] px-3 border border-[#DEE2E7] rounded-md bg-white text-[#FA3434] text-[13px] font-medium"
                        >
                          Remove
                        </button>

                        <button
  onClick={() =>
    handleSaveForLater(item)
  }
  className={`h-[30px] px-3 border rounded-md text-[13px] font-medium transition-colors ${
    savedItems[getId(item)]
      ? "bg-green-50 border-green-500 text-green-600"
      : "bg-white border-[#DEE2E7] text-[#0D6EFD]"
  }`}
>
  {savedItems[getId(item)]
    ? "Saved for later"
    : "Save for later"}
</button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}

                  <div className="flex flex-col items-end">
                    <p className="text-[18px] font-semibold text-[#1C1C1C]">
                      $
                      {Number(
                        item.price || 0
                      ).toFixed(2)}
                    </p>

                    <select
                      value={
                        Number(
                          item.qty
                        ) || 1
                      }
                      onChange={(e) =>
                        setCartItems(
                          (prev) =>
                            prev.map(
                              (
                                product
                              ) =>
                                product._id ===
                                item._id
                                  ? {
                                      ...product,
                                      qty:
                                        Number(
                                          e
                                            .target
                                            .value
                                        ) ||
                                        1,
                                    }
                                  : product
                            )
                        )
                      }
                      className="mt-4 h-[40px] px-3 border border-[#DEE2E7] rounded-md bg-white"
                    >
                      {[1, 2, 3, 4, 5].map(
                        (
                          qty
                        ) => (
                          <option
                            key={
                              qty
                            }
                            value={
                              qty
                            }
                          >
                            Qty:{" "}
                            {qty}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {index !==
                  cartItems.length -
                    1 && (
                  <div className="border-b border-[#EFF2F4]" />
                )}
              </div>
            );
          }
        )}

        <div className="flex justify-between items-center pt-5 mt-2 border-t border-[#EFF2F4]">
          <Link
            to="/products"
            className="h-[40px] px-5 rounded-md bg-[#127FFF] text-white font-medium flex items-center"
          >
            ← Back to shop
          </Link>

          <button
            onClick={
              removeAllItems
            }
            className="h-[40px] px-5 rounded-md border border-[#DEE2E7] bg-white text-[#0D6EFD] font-medium"
          >
            Remove all
          </button>
        </div>
      </div>

      {/* ========================= */}
      {/* MOBILE VERSION */}
      {/* ========================= */}

      <div className="lg:hidden bg-white">
        {cartItems.map(
          (item) => {
            const imageSrc =
              productImages[
                item.image
              ] || item.image;

            return (
              <div
                key={item._id}
                className="px-4 py-5 border-b border-[#E5E5E5]"
              >
                <div className="flex gap-3">
                  <div className="w-[92px] h-[92px] rounded-md border border-[#DEE2E7] flex items-center justify-center bg-[#FAFAFA] shrink-0">
                    <img
                      src={imageSrc}
                      alt={item.name}
                      className="max-h-[70px] object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-[15px] leading-5 text-[#1C1C1C]">
                        {item.name}
                      </h3>

                      <div className="relative">
                        <button
                          onClick={() =>
                            setActiveMenu(
                              activeMenu ===
                                item._id
                                ? null
                                : item._id
                            )
                          }
                        >
                          <MoreVertical
                            size={
                              18
                            }
                            className="text-[#8B96A5]"
                          />
                        </button>

                        {activeMenu ===
                          item._id && (
                          <div className="absolute right-0 top-7 z-20 w-[170px] bg-white border border-[#DEE2E7] rounded-lg shadow-lg overflow-hidden">
                            <button
  onClick={() => {
    handleSaveForLater(item);
    setActiveMenu(null);
  }}
  className={`w-full px-4 py-3 text-left text-[14px] ${
    savedItems[getId(item)]
      ? "text-green-600"
      : ""
  } hover:bg-[#F7FAFC]`}
>
  {savedItems[getId(item)]
    ? "Saved for later"
    : "Save for later"}
</button>

                            <Link
                              to={`/products/${item._id}`}
                              onClick={() =>
                                setActiveMenu(
                                  null
                                )
                              }
                              className="block px-4 py-3 text-[14px] hover:bg-[#F7FAFC]"
                            >
                              View product
                            </Link>

                            <button
                              onClick={() => {
                                removeItem(
                                  item._id
                                );
                                setActiveMenu(
                                  null
                                );
                              }}
                              className="w-full px-4 py-3 text-left text-[14px] text-[#FA3434] hover:bg-[#FFF5F5]"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-[#8B96A5] text-[14px] mt-1">
                      {item.category}
                    </p>

                    <p className="text-[#8B96A5] text-[14px]">
                      Brand:{" "}
                      {item.brand ||
                        "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex border border-[#DEE2E7] rounded-md overflow-hidden shadow-sm">
                    <button
                      onClick={() =>
                        decreaseQty(
                          item._id
                        )
                      }
                      className="w-[56px] h-[44px] flex items-center justify-center"
                    >
                      <Minus
                        size={
                          18
                        }
                      />
                    </button>

                    <div className="w-[90px] h-[44px] border-x border-[#DEE2E7] flex items-center justify-center font-medium">
                      {Number(
                        item.qty
                      ) || 1}
                    </div>

                    <button
                      onClick={() =>
                        increaseQty(
                          item._id
                        )
                      }
                      className="w-[56px] h-[44px] flex items-center justify-center"
                    >
                      <Plus
                        size={
                          18
                        }
                      />
                    </button>
                  </div>

                  <p className="font-semibold text-[18px] text-[#1C1C1C]">
                    $
                    {Number(
                      item.price || 0
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default CartItems;