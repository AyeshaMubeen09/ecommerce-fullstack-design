import {
  ShieldCheck,
  Globe,
  Heart,
} from "lucide-react";

import ReactCountryFlag from "react-country-flag";

function SupplierCard() {
  return (
    <div className="mt-4 lg:mt-0">
      <div className="border border-[#DEE2E7] rounded-xl p-4 bg-white shadow-sm">

        {/* Supplier Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#EFF2F4]">
          <div className="w-12 h-12 rounded-lg bg-[#C6F3F1] flex items-center justify-center text-[#4CA7A7] font-semibold text-[20px] shrink-0">
            R
          </div>

          <div className="min-w-0">
            <p className="text-[13px] text-[#8B96A5]">
              Supplier
            </p>

            <h3 className="font-semibold text-[15px] md:text-[16px] text-[#1C1C1C] truncate">
              Guanjoi Trading LLC
            </h3>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-3">

          <div className="flex items-center gap-2 text-[#505050] text-[14px]">
            <ReactCountryFlag
              countryCode="DE"
              svg
              style={{
                width: "20px",
                height: "15px",
              }}
            />

            <span>Germany, Berlin</span>
          </div>

          <div className="flex items-center gap-2 text-[#505050] text-[14px]">
            <ShieldCheck
              size={16}
              className="text-[#8B96A5]"
            />

            <span>Verified Seller</span>
          </div>

          <div className="flex items-center gap-2 text-[#505050] text-[14px]">
            <Globe
              size={16}
              className="text-[#8B96A5]"
            />

            <span>Worldwide shipping</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-2">

          <button className="w-full h-[44px] rounded-lg bg-[#0D6EFD] text-white font-medium text-[15px]">
            Send inquiry
          </button>

          <button className="w-full h-[44px] rounded-lg border border-[#DEE2E7] bg-white text-[#0D6EFD] font-medium text-[15px]">
            Seller's profile
          </button>

        </div>
      </div>

      {/* Save for later */}
      <button className="mt-4 w-full h-[44px] border border-[#DEE2E7] rounded-lg bg-white flex items-center justify-center gap-2 text-[#0D6EFD] font-medium">
        <Heart
          size={18}
          className="text-[#0D6EFD]"
        />

        <span>Save for later</span>
      </button>
    </div>
  );
}

export default SupplierCard;