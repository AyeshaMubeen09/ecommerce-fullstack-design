import { ShoppingCart } from "lucide-react";

import phone from "../../assets/electronics/speaker.jpg";
import watch from "../../assets/deals/watch.jpg";
import laptop from "../../assets/deals/laptop.jpg";
import tablet from "../../assets/electronics/blue.jpg";

const savedItems = [
  {
    id: 1,
    image: phone,
    price: 57.7,
    name: "Regular Fit Resort Shirt",
  },
  {
    id: 2,
    image: tablet,
    price: 57.7,
    name: "Regular Fit Resort Shirt",
  },
  {
    id: 3,
    image: watch,
    price: 57.7,
    name: "Regular Fit Resort Shirt",
  },
  {
    id: 4,
    image: laptop,
    price: 799.5,
    name: "Ultrabook Pro Laptop",
  },
];

function SavedForLater() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-5 mt-8">
        <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
          Saved for later
        </h2>

        <div className="grid grid-cols-4 gap-5">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#DEE2E7] rounded-md p-4"
            >
              <div className="h-[220px] bg-[#EEEEEE] rounded-md flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-[170px] object-contain"
                />
              </div>

              <h3 className="mt-4 text-[18px] font-semibold text-[#1C1C1C]">
                ${item.price}
              </h3>

              <p className="mt-2 text-[15px] text-[#606060] leading-5 line-clamp-2 min-h-[40px]">
                {item.name}
              </p>

              <button
                className="
                  mt-4
                  w-full
                  h-[40px]
                  border
                  border-[#DEE2E7]
                  rounded-md
                  bg-white
                  text-[#0D6EFD]
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <ShoppingCart size={16} />
                Move to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden mt-6">
        <h2 className="text-[18px] font-semibold text-[#1C1C1C] mb-4">
          Saved for later
        </h2>

        <div className="space-y-3">
          {savedItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#DEE2E7] rounded-md p-3 flex gap-3"
            >
              <div className="w-[90px] h-[90px] flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-[80px] object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-[16px] text-[#505050]">
                  {item.name}
                </h3>

                <p className="text-[18px] font-semibold mt-1">
                  ${item.price}
                </p>

                <div className="flex gap-3 mt-3">
                  <button className="h-[36px] px-3 border border-[#DEE2E7] rounded-md text-[#0D6EFD] bg-white text-sm">
                    Move to cart
                  </button>

                  <button className="h-[36px] px-3 border border-[#DEE2E7] rounded-md text-[#FA3434] bg-white text-sm">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedForLater;