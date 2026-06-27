import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaApplePay,
} from "react-icons/fa";

import { useState } from "react";

/**
 * ==================================================
 * CartSummary
 * ==================================================
 * Purpose:
 * - Displays cart totals
 * - Desktop coupon section
 * - Desktop checkout card
 * - Mobile order summary
 *
 * Data Source:
 * - Receives cartItems from Cart.jsx
 *
 * Future Backend Integration:
 * POST /api/coupons/apply
 * POST /api/orders/checkout
 * ==================================================
 */
function CartSummary({
  cartItems,
  onCheckout,
}) {
  // =========================
  // Calculations
  // =========================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.qty || 1),
    0
  );
  const [couponApplied, setCouponApplied] =
  useState(false);

  const handleApplyCoupon = () => {
  setCouponApplied(true);
  };

  // TEMP LOGIC
  // Replace with backend coupon system later
  const discount =
    subtotal > 500 ? subtotal * 0.05 : 0;

  // TEMP LOGIC
  // Replace with backend tax calculation later
  const tax = subtotal * 0.1;

  const total =
    subtotal - discount + tax;

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + Number(item.qty || 1),
    0
  );

  return (
    <>
      {/* =========================================
          DESKTOP SUMMARY
      ========================================= */}
      <div className="hidden lg:block space-y-4">
       {/* =========================
              COUPON CARD
           ========================= */}
<div className="bg-white border border-[#DEE2E7] rounded-md p-4">
  <h3 className="text-[16px] text-[#505050] mb-3">
    Have a coupon?
  </h3>

  {!couponApplied ? (
    <div className="flex">
      <input
        type="text"
        placeholder="Add coupon"
        className="
          flex-1
          h-[40px]
          px-3
          border
          border-[#DEE2E7]
          rounded-l-md
          outline-none
          text-[14px]
        "
      />

      <button
        onClick={handleApplyCoupon}
        className="
          w-[85px]
          h-[40px]
          border
          border-l-0
          border-[#DEE2E7]
          rounded-r-md
          bg-white
          text-[#0D6EFD]
          font-medium
        "
      >
        Apply
      </button>
    </div>
  ) : (
    <div className="h-[40px] flex items-center">
      <p className="text-[14px] text-[#00B517] font-medium">
        ✓ Coupon applied successfully
      </p>
    </div>
  )}
</div>

        {/* =========================
            ORDER SUMMARY CARD
        ========================= */}
        <div className="bg-white border border-[#DEE2E7] rounded-md p-5">
          {/* Summary Rows */}
          <div className="space-y-3 text-[15px]">
            <div className="flex justify-between">
              <span className="text-[#505050]">
                Subtotal:
              </span>

              <span className="text-[#505050]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#505050]">
                Discount:
              </span>

              <span className="text-[#FA3434]">
                - ${discount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#505050]">
                Tax:
              </span>

              <span className="text-[#00B517]">
                + ${tax.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#EFF2F4] my-5" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-semibold text-[#1C1C1C]">
              Total:
            </span>

            <span className="text-[22px] font-bold text-[#1C1C1C]">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Checkout */}
<button
  onClick={onCheckout}
  disabled={cartItems.length === 0}
  className="
    w-full
    h-[54px]
    rounded-lg
    bg-[#0D6EFD]
    text-white
    font-semibold
    disabled:bg-gray-300
    disabled:cursor-not-allowed
  "
>
  Checkout
</button>

          {/* Payment Methods */}
          <div className="flex justify-center gap-2 mt-5">
            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcVisa
                size={20}
                className="text-[#1434CB]"
              />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcMastercard
                size={18}
                className="text-[#EB001B]"
              />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcPaypal
                size={18}
                className="text-[#003087]"
              />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcAmex
                size={18}
                className="text-[#006FCF]"
              />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaApplePay
                size={18}
                className="text-black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE SUMMARY
      ========================================= */}
      <div className="lg:hidden bg-white border-t border-[#E5E5E5] p-4">
        {/* Summary Rows */}
        <div className="space-y-3">
          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Items ({totalItems}):
            </span>

            <span className="font-medium">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {/* Hidden on Figma mobile but kept dynamic */}
          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Discount:
            </span>

            <span className="font-medium text-[#FA3434]">
              - ${discount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Tax:
            </span>

            <span className="font-medium text-[#00B517]">
              + ${tax.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-[18px] font-semibold">
            Total:
          </span>

          <span className="text-[22px] font-bold">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Checkout */}
<button
  onClick={onCheckout}
  disabled={cartItems.length === 0}
  className="
    w-full
    h-[52px]
    mt-5
    rounded-md
    bg-[#00B517]
    text-white
    text-[18px]
    font-medium
    disabled:bg-gray-300
    disabled:cursor-not-allowed
  "
>
  Checkout ({totalItems} items)
</button>
      </div>
    </>
  );
}

export default CartSummary;