import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaApplePay,
} from "react-icons/fa";

function CartSummary() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block space-y-4">

        {/* Coupon Card */}
        <div className="bg-white border border-[#DEE2E7] rounded-md p-4">
          <h3 className="text-[16px] text-[#505050] mb-3">
            Have a coupon?
          </h3>

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
        </div>

        {/* Desktop Summary */}
        <div className="bg-white border border-[#DEE2E7] rounded-md p-5">
          <div className="space-y-3 text-[15px]">

            <div className="flex justify-between">
              <span className="text-[#505050]">
                Subtotal:
              </span>

              <span className="text-[#505050]">
                $1403.97
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#505050]">
                Discount:
              </span>

              <span className="text-[#FA3434]">
                - $60.00
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#505050]">
                Tax:
              </span>

              <span className="text-[#00B517]">
                + $14.00
              </span>
            </div>

          </div>

          <div className="border-t border-[#EFF2F4] my-5" />

          <div className="flex justify-between items-center">
            <span className="text-[18px] font-semibold text-[#1C1C1C]">
              Total:
            </span>

            <span className="text-[22px] font-bold text-[#1C1C1C]">
              $1357.97
            </span>
          </div>

          <button
            className="
              w-full
              h-[48px]
              mt-5
              rounded-md
              bg-[#00B517]
              text-white
              text-[16px]
              font-medium
            "
          >
            Checkout
          </button>

          <div className="flex justify-center gap-2 mt-5">
            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcVisa size={20} className="text-[#1434CB]" />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcMastercard size={18} className="text-[#EB001B]" />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcPaypal size={18} className="text-[#003087]" />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaCcAmex size={18} className="text-[#006FCF]" />
            </div>

            <div className="w-[44px] h-[30px] border border-[#DEE2E7] rounded-md flex items-center justify-center">
              <FaApplePay size={18} className="text-black" />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-white border-t border-[#E5E5E5] p-4">

        <div className="space-y-3">

          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Items (3):
            </span>

            <span className="font-medium">
              $32.00
            </span>
          </div>

          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Shipping:
            </span>

            <span className="font-medium">
              $10.00
            </span>
          </div>

          <div className="flex justify-between text-[15px]">
            <span className="text-[#8B96A5]">
              Tax:
            </span>

            <span className="font-medium">
              $7.00
            </span>
          </div>

        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-[18px] font-semibold">
            Total:
          </span>

          <span className="text-[22px] font-bold">
            $220.00
          </span>
        </div>

        <button
          className="
            w-full
            h-[52px]
            mt-5
            rounded-md
            bg-[#00B517]
            text-white
            text-[18px]
            font-medium
          "
        >
          Checkout (3 items)
        </button>

      </div>
    </>
  );
}

export default CartSummary;