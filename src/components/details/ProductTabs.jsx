import { useState } from "react";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        <div className="flex border-b border-[#DEE2E7]">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-5 py-4 text-[15px] font-medium border-b-2 ${
              activeTab === "description"
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5]"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-4 text-[15px] font-medium border-b-2 ${
              activeTab === "reviews"
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5]"
            }`}
          >
            Reviews
          </button>

          <button
            onClick={() => setActiveTab("shipping")}
            className={`px-5 py-4 text-[15px] font-medium border-b-2 ${
              activeTab === "shipping"
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5]"
            }`}
          >
            Shipping
          </button>

          <button
            onClick={() => setActiveTab("seller")}
            className={`px-5 py-4 text-[15px] font-medium border-b-2 ${
              activeTab === "seller"
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5]"
            }`}
          >
            About seller
          </button>
        </div>

        <div className="p-5">
          <p className="text-[#505050] leading-7">
            This device combines premium design, powerful performance,
            and long-lasting battery life for everyday use.
          </p>

          <p className="text-[#505050] leading-7 mt-4">
            Featuring a high-resolution display, advanced connectivity
            options, and durable construction.
          </p>

          <div className="mt-6 w-[75%] border border-[#DEE2E7] rounded-md overflow-hidden">
            <div className="grid grid-cols-[170px_1fr] text-[14px]">
              <div className="bg-[#EFF2F4] px-4 py-2.5 border-r border-b border-[#DEE2E7]">
                Model
              </div>
              <div className="px-4 py-2.5 border-b border-[#DEE2E7]">
                X-Pro Series
              </div>

              <div className="bg-[#EFF2F4] px-4 py-2.5 border-r border-b border-[#DEE2E7]">
                Display
              </div>
              <div className="px-4 py-2.5 border-b border-[#DEE2E7]">
                6.7" Full HD IPS Display
              </div>

              <div className="bg-[#EFF2F4] px-4 py-2.5 border-r border-b border-[#DEE2E7]">
                Processor
              </div>
              <div className="px-4 py-2.5 border-b border-[#DEE2E7]">
                Octa-Core 3.2 GHz
              </div>

              <div className="bg-[#EFF2F4] px-4 py-2.5 border-r border-b border-[#DEE2E7]">
                Storage
              </div>
              <div className="px-4 py-2.5 border-b border-[#DEE2E7]">
                256GB Internal Storage
              </div>

              <div className="bg-[#EFF2F4] px-4 py-2.5 border-r border-[#DEE2E7]">
                Memory
              </div>
              <div className="px-4 py-2.5">
                8GB RAM
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-[14px] text-[#505050]">
            <p>✓ High-resolution display with vivid colors</p>
            <p>✓ Fast processor for multitasking and gaming</p>
            <p>✓ Long-lasting battery with quick charging support</p>
            <p>✓ Wi-Fi, Bluetooth, and USB-C connectivity</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-4">
        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Description
          </h3>

          <p className="text-[14px] text-[#505050] leading-6">
            This device combines premium design, powerful
            performance and long-lasting battery life for
            everyday use. Whether you're browsing, streaming,
            gaming or working on the go, it delivers a smooth
            and reliable experience.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Specifications
          </h3>

          <div className="space-y-3 text-[14px]">
            <div className="flex justify-between">
              <span className="text-[#8B96A5]">Model</span>
              <span>X-Pro Series</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#8B96A5]">Display</span>
              <span>6.7" IPS</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#8B96A5]">Storage</span>
              <span>256GB</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#8B96A5]">RAM</span>
              <span>8GB</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Features
          </h3>

          <div className="space-y-2 text-[14px] text-[#505050]">
            <p>✓ High-resolution display</p>
            <p>✓ Fast processor</p>
            <p>✓ Long battery life</p>
            <p>✓ USB-C connectivity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTabs;