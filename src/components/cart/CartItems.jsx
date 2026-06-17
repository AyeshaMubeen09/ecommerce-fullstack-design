import { MoreVertical, Minus, Plus } from "lucide-react";
import cartItems from "../../data/cartItems";

function CartItems() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-5">
        {cartItems.map((item, index) => (
          <div key={item.id}>
            <div className="flex justify-between gap-5 py-4">
              <div className="flex gap-4">
                <div className="w-[90px] h-[90px] border border-[#DEE2E7] rounded-md flex items-center justify-center bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[70px] object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-medium text-[16px] text-[#1C1C1C]">
                    {item.title}
                  </h3>

                  <p className="text-[#8B96A5] text-[14px] mt-1">
                    {item.details}
                  </p>

                  <p className="text-[#8B96A5] text-[14px]">
                    Seller: {item.seller}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button className="h-[30px] px-3 border border-[#DEE2E7] rounded-md bg-white text-[#FA3434] text-[13px] font-medium">
                      Remove
                    </button>

                    <button className="h-[30px] px-3 border border-[#DEE2E7] rounded-md bg-white text-[#0D6EFD] text-[13px] font-medium">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-[18px] font-semibold text-[#1C1C1C]">
                  ${item.price}
                </p>

                <select className="mt-4 h-[40px] px-3 border border-[#DEE2E7] rounded-md bg-white">
                  <option>Qty: {item.qty}</option>
                </select>
              </div>
            </div>

            {index !== cartItems.length - 1 && (
              <div className="border-b border-[#EFF2F4]" />
            )}
          </div>
        ))}

        <div className="flex justify-between items-center pt-5 mt-2 border-t border-[#EFF2F4]">
          <button className="h-[40px] px-5 rounded-md bg-[#127FFF] text-white font-medium">
            ← Back to shop
          </button>

          <button className="h-[40px] px-5 rounded-md border border-[#DEE2E7] bg-white text-[#0D6EFD] font-medium">
            Remove all
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-white">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="px-4 py-5 border-b border-[#E5E5E5]"
          >
            {/* Top */}
            <div className="flex gap-3">
              <div className="w-[92px] h-[92px] rounded-md border border-[#DEE2E7] flex items-center justify-center bg-[#FAFAFA] shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[70px] object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between gap-2">
                  <h3 className="text-[15px] leading-5 text-[#1C1C1C]">
                    {item.title}
                  </h3>

                  <button>
                    <MoreVertical
                      size={18}
                      className="text-[#8B96A5]"
                    />
                  </button>
                </div>

                <p className="text-[#8B96A5] text-[14px] mt-1">
                  {item.details}
                </p>

                <p className="text-[#8B96A5] text-[14px]">
                  Seller: {item.seller}
                </p>
              </div>
            </div>

            {/* Bottom Row */}
          <div className="flex justify-between items-end mt-4">
              <div className="flex border border-[#DEE2E7] rounded-md overflow-hidden shadow-sm">
                <button className="w-[56px] h-[44px] flex items-center justify-center">
                  <Minus size={18} />
                </button>

                <div className="w-[90px] h-[44px] border-x border-[#DEE2E7] flex items-center justify-center font-medium">
                  {item.qty}
                </div>

                <button className="w-[56px] h-[44px] flex items-center justify-center">
                  <Plus size={18} />
                </button>
              </div>

              <p className="font-semibold text-[18px] text-[#1C1C1C]">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartItems;