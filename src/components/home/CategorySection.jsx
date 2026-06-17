import homeBanner from "../../assets/home/home-banner.jpg";
import electronicsBanner from "../../assets/electronics/electronics-banner.jpg";

import homeChair from "../../assets/home/chair.jpg";
import homeSofa from "../../assets/home/sofa.jpg";
import homeDish from "../../assets/home/dish.jpg";
import homeLamp from "../../assets/home/lamp.jpg";
import homeMixer from "../../assets/home/mixer.jpg";
import homeBlender from "../../assets/home/blender.jpg";
import homeAppliance from "../../assets/home/appliance.jpg";
import homeCoffee from "../../assets/home/coffee.jpg";

import electronicsLaptop from "../../assets/electronics/laptop.jpg";
import electronicsPhone from "../../assets/electronics/phone.jpg";
import electronicsCamera from "../../assets/electronics/camera.jpg";
import electronicsWatch from "../../assets/electronics/watch.jpg";
import electronicsHeadphone from "../../assets/electronics/headphone.jpg";
import electronicsTablet from "../../assets/electronics/tablet.jpg";
import electronicsSpeaker from "../../assets/electronics/speaker.jpg";
import electronicsDrone from "../../assets/electronics/drone.jpg";

function CategorySection({ title, categoryType }) {
  const homeProducts = [
    {
      id: 1,
      name: "Soft Lounge Chair",
      price: "From USD 19",
      image: homeChair,
    },
    {
      id: 2,
      name: "Modern Table Lamp",
      price: "From USD 19",
      image: homeSofa,
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "From USD 19",
      image: homeDish,
    },
    {
      id: 4,
      name: "Ceramic Flower Pot",
      price: "From USD 19",
      image: homeLamp,
    },
    {
      id: 5,
      name: "Juicer Blender",
      price: "From USD 100",
      image: homeMixer,
    },
    {
      id: 6,
      name: "Coffee Machine",
      price: "From USD 39",
      image: homeBlender,
    },
    {
      id: 7,
      name: "Leather Wallet",
      price: "From USD 19",
      image: homeAppliance,
    },
    {
      id: 8,
      name: "Indoor Decorative Plant",
      price: "From USD 10",
      image: homeCoffee,
    },
  ];

  const electronicsProducts = [
    {
      id: 1,
      name: "Smart Watch Series",
      price: "From USD 19",
      image: electronicsWatch,
    },
    {
      id: 2,
      name: "DSLR Camera",
      price: "From USD 340",
      image: electronicsLaptop,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "From USD 89",
      image: electronicsCamera,
    },
    {
      id: 4,
      name: "Electric Kettle",
      price: "From USD 10",
      image: electronicsHeadphone,
    },
    {
      id: 5,
      name: "Gaming Headset",
      price: "From USD 90",
      image: electronicsPhone,
    },
    {
      id: 6,
      name: "Laptop Computer",
      price: "From USD 120",
      image: electronicsTablet,
    },
    {
      id: 7,
      name: "Smartphone Pro",
      price: "From USD 25",
      image: electronicsSpeaker,
    },
    {
      id: 8,
      name: "iPhone Series",
      price: "From USD 199",
      image: electronicsDrone,
    },
  ];

  const products =
    categoryType === "electronics"
      ? electronicsProducts
      : homeProducts;

  const bannerImage =
    categoryType === "electronics"
      ? electronicsBanner
      : homeBanner;

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">

      {/* MOBILE VERSION */}
      <div className="lg:hidden bg-white border border-[#DEE2E7] rounded-md overflow-hidden">

        {/* Header Banner */}
        <div
          className="relative h-[120px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 p-5">
            <h2 className="text-[18px] font-semibold text-[#1C1C1C] max-w-[180px]">
              {title}
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Products */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[140px] h-[160px] border-r border-[#DEE2E7] p-3 flex-shrink-0"
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>

              <h3 className="mt-2 text-[14px] text-[#1C1C1C] line-clamp-1">
                {product.name}
              </h3>

              <p className="text-[13px] text-[#8B96A5] mt-1">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Source Now */}
        <div className="p-4 border-t border-[#DEE2E7]">
          <button className="text-[#0D6EFD] text-[18px] font-medium">
            Source now →
          </button>
        </div>
      </div>

      {/* DESKTOP VERSION (UNCHANGED) */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        <div className="grid lg:grid-cols-[280px_1fr]">

          <div
            className="relative min-h-[257px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          >
            <div className="absolute inset-0 bg-white/10" />

            <div className="relative z-10 p-6">
              <h2 className="text-[24px] font-semibold text-[#1C1C1C] max-w-[180px] leading-tight">
                {title}
              </h2>

              <button className="mt-5 bg-white border border-[#DEE2E7] rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-50 transition">
                Source now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative border-l border-b border-[#DEE2E7] p-4 h-[127px]"
              >
                <h3 className="text-[15px] text-[#1C1C1C]">
                  {product.name}
                </h3>

                <p className="text-[13px] text-[#8B96A5] mt-1">
                  {product.price}
                </p>

                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute bottom-3 right-3 w-[72px] h-[72px] object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CategorySection;