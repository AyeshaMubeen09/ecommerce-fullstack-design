import {
  MessageSquareText,
  ShoppingBasket,
} from "lucide-react";

function ProductInfo({ product }) {
  return (
    <div>
      {/* Stock */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#00B517] font-medium text-[14px]">
          ✓ In stock
        </span>
      </div>

      {/* Title */}
    <h1 className="text-[22px] lg:text-[20px] font-semibold text-[#1C1C1C] leading-7">
        Apple iPhone 12 (128GB) – Red
      </h1>

      {/* Rating Row */}
     <div className="flex flex-wrap items-center gap-3 mt-3 text-[14px]">
        <span className="text-[#FF9017]">
          ★★★★★
        </span>

        <span className="text-[#FF9017]">
          4.8
        </span>

        <span className="text-[#DEE2E7]">|</span>

        <div className="flex items-center gap-1 text-[#787A80]">
          <MessageSquareText size={15} />
          <span>328 reviews</span>
        </div>

        <span className="text-[#DEE2E7]">|</span>

        <div className="flex items-center gap-1 text-[#787A80]">
          <ShoppingBasket size={15} />
          <span>1,245 sold</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 bg-[#FFF4E8] rounded-md overflow-hidden border border-[#FFE5C4]">
        <div className="p-4 border-r border-[#FFE5C4]">
          <h3 className="text-[#FA3434] text-[20px] font-semibold">
            $699
          </h3>

          <p className="text-[13px] text-[#606060] mt-1">
            1–2 units
          </p>
        </div>

        <div className="p-4 border-r border-[#FFE5C4]">
          <h3 className="text-[20px] font-semibold text-[#1C1C1C]">
            $679
          </h3>

          <p className="text-[13px] text-[#606060] mt-1">
            3–5 units
          </p>
        </div>

        <div className="p-4">
          <h3 className="text-[20px] font-semibold text-[#1C1C1C]">
            $649
          </h3>

          <p className="text-[13px] text-[#606060] mt-1">
            6+ units
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-5 lg:hidden">
  <button
    className="
      flex-1
      h-[48px]
      bg-[#0D6EFD]
      text-white
      rounded-md
      font-medium
    "
  >
    Add to Cart
  </button>

  <button
    className="
      flex-1
      h-[48px]
      border
      border-[#0D6EFD]
      text-[#0D6EFD]
      rounded-md
      font-medium
      bg-white
    "
  >
    Buy Now
  </button>
</div>

      {/* Product Information */}
     <div className="hidden lg:block mt-5 text-[15px]">

        {/* Block 1 */}
        <div className="border-b border-[#E7E7E7] pb-4 space-y-3">
          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Price:
            </span>

            <span className="text-[#505050]">
              Retail & wholesale available
            </span>
          </div>
        </div>

        {/* Block 2 */}
        <div className="py-4 border-b border-[#E7E7E7] space-y-3">
          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Model:
            </span>

            <span className="text-[#505050]">
              iPhone 12
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Storage:
            </span>

            <span className="text-[#505050]">
              128GB
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Display:
            </span>

            <span className="text-[#505050]">
              6.1" Super Retina XDR OLED
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Processor:
            </span>

            <span className="text-[#505050]">
              Apple A14 Bionic Chip
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Color:
            </span>

            <span className="text-[#505050]">
              Red
            </span>
          </div>
        </div>

        {/* Block 3 */}
        <div className="py-4 border-b border-[#E7E7E7] space-y-3">
          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Connectivity:
            </span>

            <span className="text-[#505050]">
              5G, Wi-Fi 6, Bluetooth 5.0
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Protection:
            </span>

            <span className="text-[#505050]">
              Buyer Protection & Easy Returns
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr]">
            <span className="text-[#8B96A5]">
              Warranty:
            </span>

            <span className="text-[#505050]">
              1 Year Manufacturer Warranty
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductInfo;