import { Link } from "react-router-dom";

import heroBanner from "../../assets/home/hero-banner.jpg";
import userImage from "../../assets/profile/user.jpg";

// Hero category links
const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 mt-3 md:mt-5">
      <div className="bg-transparent md:bg-white md:border md:border-[#DEE2E7] rounded-none md:rounded-md p-0 md:p-3">
        <div className="grid lg:grid-cols-[250px_1fr_200px] gap-4">

          {/* =========================
              LEFT SIDEBAR CATEGORIES
          ========================== */}
          <div className="hidden lg:block">
            <ul className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/products"
                >
                  <li className="px-3 py-2 rounded cursor-pointer hover:bg-[#F7FAFC] transition">
                    {category}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* =========================
              HERO BANNER
          ========================== */}
          <div
            className="
              relative
              h-[180px]
              md:h-[300px]
              lg:h-[400px]
              rounded-none
              md:rounded-md
              overflow-hidden
              bg-cover
              bg-center
            "
            style={{
              backgroundImage: `url(${heroBanner})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

            {/* Banner Content */}
            <div className="relative z-10 px-5 py-6 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <p className="text-[18px] md:text-[24px] lg:text-[28px] text-[#1C1C1C]">
                Latest trending
              </p>

              <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-bold leading-tight text-[#1C1C1C] mt-1 max-w-[240px] md:max-w-[300px]">
                Electronic items
              </h2>

              {/* Desktop CTA */}
              <Link
  to="/products"
  className="
    hidden
    md:inline-flex
    mt-6
    bg-white
    border
    border-[#DEE2E7]
    px-6
    py-2
    rounded-md
    font-medium
    hover:bg-gray-50
    transition
  "
>
  Learn more
</Link>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE PROMOTION AREA
          ========================== */}
          <div className="hidden lg:flex flex-col gap-3">

            {/* User Card */}
            <div className="bg-[#E3F0FF] rounded-md p-4">
              <div className="flex items-center gap-3">
                <img
                  src={userImage}
                  alt="User"
                  className="w-11 h-11 rounded-full object-cover border border-white"
                />

                <div>
                  <p className="text-sm text-[#1C1C1C]">
                    <b>Hi, user</b>
                  </p>

                  <p className="text-sm text-[#1C1C1C]">
                    <b>Let's get started</b>
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 h-[40px] bg-[#0D6EFD] text-white rounded-md text-sm font-medium hover:bg-[#005ade] transition">
                Join now
              </button>

              <button className="w-full mt-2 h-[40px] bg-white border border-[#DEE2E7] rounded-md text-sm font-medium hover:bg-gray-50 transition">
                Log in
              </button>
            </div>

            {/* Promotion Card 1 */}
            <div className="bg-[#F38332] rounded-md p-4 text-white min-h-[95px] flex flex-col justify-center">
              <h3 className="font-medium text-[16px]">
                Get US $10 off
              </h3>

              <p className="text-sm mt-1">
                with a new supplier
              </p>
            </div>

            {/* Promotion Card 2 */}
            <div className="bg-[#55BDC3] rounded-md p-4 text-white min-h-[95px] flex flex-col justify-center">
              <h3 className="font-medium text-[16px]">
                Send quotes with
              </h3>

              <p className="text-sm mt-1">
                supplier preferences
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;