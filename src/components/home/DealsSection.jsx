import watchImg from "../../assets/deals/watch.jpg";
import laptopImg from "../../assets/deals/laptop.jpg";
import cameraImg from "../../assets/deals/camera.jpg";
import headphoneImg from "../../assets/deals/headphone.jpg";
import phoneImg from "../../assets/deals/phone.jpg";

function DealsSection() {
  const products = [
    {
      id: 1,
      title: "Smart watches",
      discount: "-25%",
      image: watchImg,
    },
    {
      id: 2,
      title: "Laptops",
      discount: "-15%",
      image: laptopImg,
    },
    {
      id: 3,
      title: "GoPro cameras",
      discount: "-40%",
      image: cameraImg,
    },
    {
      id: 4,
      title: "Headphones",
      discount: "-25%",
      image: headphoneImg,
    },
    {
      id: 5,
      title: "Smartphones",
      discount: "-10%",
      image: phoneImg,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 mt-6">
      <div className="bg-white border-y md:border border-[#DEE2E7] md:rounded-md overflow-hidden">
        <div className="lg:grid lg:grid-cols-[280px_1fr]">

          {/* MOBILE HEADER */}
          <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-[#DEE2E7]">
            <div>
              <h2 className="text-[18px] font-semibold text-[#1C1C1C] leading-none">
                Deals and offers
              </h2>

              <p className="text-[#8B96A5] text-[14px] mt-1">
                Electronic equipments
              </p>
            </div>

            <div className="flex gap-1">
              {[
                ["13", "Hour"],
                ["34", "Min"],
                ["56", "Sec"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="w-[40px] h-[44px] bg-[#EFF2F4] flex flex-col items-center justify-center"
                >
                  <span className="text-[18px] font-semibold text-[#8B96A5] leading-none">
                    {value}
                  </span>

                  <span className="text-[11px] text-[#8B96A5]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP LEFT SIDE */}
          <div className="hidden lg:block p-5 border-r border-[#DEE2E7]">
            <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
              Deals and offers
            </h2>

            <p className="text-[#8B96A5] text-[15px] mt-1">
              Hygiene equipments
            </p>

            <div className="flex gap-1 mt-5">
              {[
                ["04", "Days"],
                ["13", "Hour"],
                ["34", "Min"],
                ["56", "Sec"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="w-[45px] h-[50px] rounded bg-[#606060] text-white flex flex-col items-center justify-center"
                >
                  <span className="font-bold text-sm">
                    {value}
                  </span>

                  <span className="text-[11px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE SCROLL STRIP */}
          <div className="lg:hidden overflow-x-auto">
            <div className="flex min-w-max">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    w-[148px]
                    shrink-0
                    border-r
                    border-[#DEE2E7]
                    flex
                    flex-col
                    items-center
                    py-5
                    px-3
                  "
                >
                  <div className="h-[95px] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[75px] object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-[14px] text-center text-[#1C1C1C]">
                    {product.title}
                  </h3>

                  <span className="mt-3 px-4 py-1 rounded-full bg-[#FFE3E3] text-[#EB001B] text-[13px] font-medium">
                    {product.discount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP PRODUCTS */}
          <div className="hidden lg:grid lg:grid-cols-5">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col items-center justify-center py-5 px-4 ${
                  index !== products.length - 1
                    ? "border-r border-[#DEE2E7]"
                    : ""
                }`}
              >
                <div className="h-[140px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[120px] max-w-[120px] object-contain"
                  />
                </div>

                <h3 className="mt-3 text-[15px] text-center text-[#1C1C1C]">
                  {product.title}
                </h3>

                <span className="mt-2 px-3 py-1 rounded-full bg-[#FFE3E3] text-[#EB001B] text-[13px] font-medium">
                  {product.discount}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default DealsSection;