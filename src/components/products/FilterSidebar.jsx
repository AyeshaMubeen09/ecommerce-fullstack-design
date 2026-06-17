import { ChevronDown } from "lucide-react";

function FilterSidebar({ view }) {
    const isList = view === "list";
const isGrid = view === "grid";

  return (
    <aside className="space-y-1">

      {/* Category */}
      <div className="border-b border-[#DEE2E7] pb-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-[16px] text-[#1C1C1C]">
            Category
          </h3>

          <ChevronDown size={16} />
        </div>

        <ul className="space-y-3 text-[16px] text-[#505050]">
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern tech</li>

          <li className="text-[#0D6EFD] cursor-pointer">
            See all
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-[16px]">
            Brands
          </h3>

          <ChevronDown size={16} />
        </div>

        <div className="space-y-3 text-[15px]">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            Samsung
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            Apple
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Huawei
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            Poco
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Lenovo
          </label>

          <p className="text-[#0D6EFD] text-sm cursor-pointer">
            See all
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[16px]">
            Features
          </h3>

          <ChevronDown size={16} />
        </div>

        {(isList || isGrid) && (
          <div className="space-y-3 mt-4 text-[15px]">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Metallic
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Plastic cover
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              8GB Ram
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Super power
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Large Memory
            </label>

            <p className="text-[#0D6EFD] text-sm cursor-pointer">
              See all
            </p>
          </div>
        )}
      </div>

      {/* Price Range */}

{view === "list" ? (
  <div className="border-b border-[#DEE2E7] pb-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-[16px] text-[#1C1C1C]">
        Price range
      </h3>

      <ChevronDown
        size={18}
      />
    </div>

    {/* Slider */}
    <div className="px-1">
      <div className="relative h-2 bg-[#AFD0FF] rounded-full">
        <div className="absolute left-[15%] right-[20%] h-2 bg-[#0D6EFD] rounded-full"></div>

        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0D6EFD] rounded-full"></div>

        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0D6EFD] rounded-full"></div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 mt-5">
      <div>
        <p className="text-[13px] text-[#8B96A5] mb-1">
          Min
        </p>

        <input
          type="text"
          value="0"
          readOnly
          className="w-full h-[40px] border border-[#DEE2E7] rounded-md px-3 text-[14px]"
        />
      </div>

      <div>
        <p className="text-[13px] text-[#8B96A5] mb-1">
          Max
        </p>

        <input
          type="text"
          value="999999"
          readOnly
          className="w-full h-[40px] border border-[#DEE2E7] rounded-md px-3 text-[14px]"
        />
      </div>
    </div>

    <button className="w-full mt-4 h-[40px] border border-[#DEE2E7] rounded-md text-[#0D6EFD] font-medium bg-white">
      Apply
    </button>
  </div>
) : (
  <div className="border-b border-[#DEE2E7] pb-5">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-[16px] text-[#1C1C1C]">
        Price range
      </h3>

      <ChevronDown
        size={18}
      />
    </div>
  </div>
)}
      {/* Condition */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[16px]">
            Condition
          </h3>

          <ChevronDown size={16} />
        </div>

        {(isList) && (
          <div className="space-y-3 mt-4 text-[15px]">
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" defaultChecked />
              Any
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="condition" />
              Refurbished
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="condition" />
              Brand new
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="condition" />
              Old items
            </label>
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className="border-b border-[#DEE2E7] py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[16px]">
            Ratings
          </h3>

          <ChevronDown size={16} />
        </div>

        {(isList) && (
          <div className="space-y-3 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-[#FF9017]">★★★★★</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-[#FF9017]">★★★★☆</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-[#FF9017]">★★★☆☆</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-[#FF9017]">★★☆☆☆</span>
            </label>
          </div>
        )}
      </div>


      {/* Manufacturer */}
      {(isGrid) && (
      <div className="border-b border-[#DEE2E7] py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[16px]">
            Manufacturer
          </h3>

          <ChevronDown size={16}
    />
</div>
</div>
      )}

    </aside>
  );
}

export default FilterSidebar;