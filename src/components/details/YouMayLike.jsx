import one from "../../assets/recommended/item3.jpg";
import two from "../../assets/recommended/item1.jpg";
import three from "../../assets/recommended/item2.jpg";
import four from "../../assets/recommended/item11.jpg";
import five from "../../assets/recommended/item5.jpg";

const items = [
  {
    id: 1,
    image: one,
    title: "Men's Business Blazer",
    price: "$79.00 - $129.00",
  },
  {
    id: 2,
    image: two,
    title: "Classic Cotton Polo Shirt",
    price: "$24.99 - $39.99",
  },
  {
    id: 3,
    image: three,
    title: "Winter Jacket",
    price: "$89.00 - $149.00",
  },
  {
    id: 4,
    image: four,
    title: "New Summer Men T-Shirt",
    price: "$34.00 - $59.00",
  },
  {
    id: 5,
    image: five,
    title: "Casual Travel Backpack",
    price: "$39.00 - $69.00",
  },
];

function YouMayLike() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md p-4">
        <h3 className="font-semibold text-[18px] text-[#1C1C1C] mb-4">
          You may like
        </h3>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3"
            >
              <div className="w-[80px] h-[80px] border border-[#DEE2E7] rounded-md flex items-center justify-center bg-white shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[60px] object-contain"
                />
              </div>

              <div className="flex-1">
                <h4 className="text-[14px] leading-5 text-[#1C1C1C]">
                  {item.title}
                </h4>

                <p className="text-[#8B96A5] text-[14px] mt-1">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden mt-4">
        <h2 className="text-[18px] font-semibold px-4 mb-3">
          You may like
        </h2>

        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                shrink-0
                w-[170px]
                bg-white
                border
                border-[#DEE2E7]
                rounded-xl
                p-3
              "
            >
              <div className="h-[120px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[100px] object-contain"
                />
              </div>

              <p className="font-semibold text-[15px] mt-3">
                {item.price}
              </p>

              <p className="text-[#606060] text-[13px] mt-1 leading-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YouMayLike;