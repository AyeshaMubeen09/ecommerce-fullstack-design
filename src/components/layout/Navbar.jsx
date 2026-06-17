import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import ReactCountryFlag from "react-country-flag";

import { Link } from "react-router-dom";
import {
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        {/* Top Header */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto h-[70px] md:h-[86px] px-4 flex items-center justify-between">
            {/* Mobile Left */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() =>
                  setMobileMenuOpen(true)
                }
              >
                <Menu size={26} />
              </button>

              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <img
                  src={logo}
                  alt="Brand Logo"
                  className="h-9 w-auto object-contain"
                />

                <h1 className="text-[18px] font-bold text-[#0D6EFD]">
                  Brand
                </h1>
              </Link>
            </div>

            {/* Desktop Logo */}
            <Link
              to="/"
              className="hidden md:flex items-center gap-2 shrink-0"
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="h-11 w-auto object-contain"
              />

              <h1 className="text-[28px] font-bold text-[#0D6EFD]">
                Brand
              </h1>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-[680px] h-[40px]">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 border border-[#0D6EFD] px-4 text-sm outline-none rounded-l-md"
              />

              <select className="w-[145px] border-y border-r border-[#0D6EFD] text-sm px-3 outline-none">
                <option>All category</option>
              </select>

              <button className="w-[100px] bg-[#0D6EFD] text-white text-sm font-medium rounded-r-md">
                Search
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-7 text-[#8B96A5]">
              <button className="flex flex-col items-center gap-1 text-[12px]">
                <User size={20} strokeWidth={1.8} />
                <span>Profile</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-[12px]">
                <MessageSquare
                  size={20}
                  strokeWidth={1.8}
                />
                <span>Message</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-[12px]">
                <Heart
                  size={20}
                  strokeWidth={1.8}
                />
                <span>Orders</span>
              </button>

              <Link
                to="/cart"
                className="flex flex-col items-center gap-1 text-[12px] hover:text-[#0D6EFD]"
              >
                <ShoppingCart
                  size={20}
                  strokeWidth={1.8}
                />
                <span>My cart</span>
              </Link>
            </div>

            {/* Mobile Right Icons */}
            <div className="flex items-center gap-5 md:hidden">
              <Link to="/cart">
                <ShoppingCart size={24} />
              </Link>

              <User size={24} />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 py-3 bg-white">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B96A5]"
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full h-[44px] rounded-md border border-[#DEE2E7] pl-12 pr-4 outline-none text-[16px]"
            />
          </div>

          {/* Mobile Category Chips */}
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-1">
            <button className="whitespace-nowrap px-4 h-[34px] rounded-full bg-[#EFF2F4] text-[13px] text-[#0D6EFD]">
              All category
            </button>

            <button className="whitespace-nowrap px-4 h-[34px] rounded-full bg-[#EFF2F4] text-[13px]">
              Gadgets
            </button>

            <button className="whitespace-nowrap px-4 h-[34px] rounded-full bg-[#EFF2F4] text-[13px]">
              Clothes
            </button>

            <button className="whitespace-nowrap px-4 h-[34px] rounded-full bg-[#EFF2F4] text-[13px]">
              Electronics
            </button>

            <button className="whitespace-nowrap px-4 h-[34px] rounded-full bg-[#EFF2F4] text-[13px]">
              Home
            </button>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className="hidden md:block bg-white">
          <div className="max-w-7xl mx-auto h-[56px] px-4 flex items-center justify-between">
            <div className="flex items-center gap-7 text-[15px] text-[#1C1C1C]">
              <Link
                to="/products"
                className="flex items-center gap-2 font-medium hover:text-[#0D6EFD]"
              >
                <Menu size={18} />
                All category
              </Link>

              <Link
                to="/products"
                className="hover:text-[#0D6EFD]"
              >
                Hot offers
              </Link>

              <Link
                to="/products"
                className="hover:text-[#0D6EFD]"
              >
                Gift boxes
              </Link>

              <Link
                to="/products"
                className="hover:text-[#0D6EFD]"
              >
                Projects
              </Link>

              <Link
                to="/products"
                className="hover:text-[#0D6EFD]"
              >
                Menu item
              </Link>

              <button className="flex items-center gap-1">
                Help
                <ChevronDown size={15} />
              </button>
            </div>

            <div className="flex items-center gap-8 text-[15px]">
              <button className="flex items-center gap-1">
                English, USD
                <ChevronDown size={15} />
              </button>

              <button className="flex items-center gap-2">
                <span>Ship to</span>

                <ReactCountryFlag
                  countryCode="DE"
                  svg
                  style={{
                    width: "22px",
                    height: "16px",
                  }}
                />

                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Category Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          />

          <div className="fixed top-0 left-0 w-[280px] h-screen bg-white z-50 md:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold text-lg">
                Categories
              </h2>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <X size={24} />
              </button>
            </div>

            <div className="py-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/products"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="block px-5 py-3 text-[#1C1C1C] hover:bg-[#F7FAFC]"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;