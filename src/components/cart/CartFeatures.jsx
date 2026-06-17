import {
  Lock,
  MessageCircle,
  Truck,
} from "lucide-react";

function CartFeatures() {
  return (
    <div className="flex items-center gap-24 py-8">
      {/* Secure payment */}
      <div className="flex items-center gap-4">
        <div className="w-[52px] h-[52px] rounded-full bg-[#DEE2E7] flex items-center justify-center shrink-0">
          <Lock
            size={22}
            className="text-[#8B96A5]"
          />
        </div>

        <div>
          <h3 className="text-[18px] font-medium text-[#1C1C1C] leading-5">
            Secure payment
          </h3>

          <p className="text-[14px] text-[#8B96A5] mt-1">
            Secure checkout
          </p>
        </div>
      </div>

      {/* Customer support */}
      <div className="flex items-center gap-4">
        <div className="w-[52px] h-[52px] rounded-full bg-[#DEE2E7] flex items-center justify-center shrink-0">
          <MessageCircle
            size={22}
            className="text-[#8B96A5]"
          />
        </div>

        <div>
          <h3 className="text-[18px] font-medium text-[#1C1C1C] leading-5">
            Customer support
          </h3>

          <p className="text-[14px] text-[#8B96A5] mt-1">
            24/7 support
          </p>
        </div>
      </div>

      {/* Free delivery */}
      <div className="flex items-center gap-4">
        <div className="w-[52px] h-[52px] rounded-full bg-[#DEE2E7] flex items-center justify-center shrink-0">
          <Truck
            size={22}
            className="text-[#8B96A5]"
          />
        </div>

        <div>
          <h3 className="text-[18px] font-medium text-[#1C1C1C] leading-5">
            Free delivery
          </h3>

          <p className="text-[14px] text-[#8B96A5] mt-1">
            Free of cost 
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartFeatures;