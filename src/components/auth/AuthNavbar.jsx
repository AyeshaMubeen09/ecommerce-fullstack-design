import { Link } from "react-router-dom";
import {
  Globe,
  ChevronDown,
  Heart,
  ShoppingCart,
} from "lucide-react";

import logo from "../../assets/logo/logo.svg";

function AuthNavbar({ page = "login" }) {
  const isRegisterPage =
    page === "register";

  const isProfilePage =
  page === "profile";

  const cartItems =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  return (
    <header className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* =========================
            AUTH NAVBAR
        ========================== */}
        <div className="h-[76px] flex items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Brand"
              className="h-10 w-auto"
            />

            <div className="leading-none">
              <h1 className="text-[26px] font-bold text-[#0D6EFD]">
                Brand
              </h1>

              <p className="text-[12px] text-[#6B7280] mt-1">
                Global Marketplace
              </p>
            </div>
          </Link>

          {/* =========================
              RIGHT SIDE
          ========================== */}

<div className="hidden md:flex items-center gap-8">

  {/* Top Links */}
  <div className="flex items-center gap-6 text-[13px] text-[#374151]">

    <button className="flex items-center gap-1 hover:text-[#0D6EFD] transition">
      <Globe size={15} />

      <span>English, USD</span>

      <ChevronDown size={14} />
    </button>

    <button className="hover:text-[#0D6EFD] transition">
      Help Center
    </button>

    <button className="hover:text-[#0D6EFD] transition">
      Track Order
    </button>

  </div>

  {/* Divider */}
  <div className="w-px h-8 bg-[#E5E7EB]" />

  {/* =========================
      PROFILE NAVBAR
  ========================= */}
  {isProfilePage ? (

 <div className="flex items-center gap-6">

  {/* Wishlist */}
  <Link
    to="/cart#saved"
    className="
      relative
      text-[#374151]
      hover:text-[#0D6EFD]
      transition
    "
  >
    <Heart size={22} />
  </Link>

  {/* Cart */}
  <Link
    to="/cart"
    className="
      relative
      text-[#374151]
      hover:text-[#0D6EFD]
      transition
    "
  >
    <ShoppingCart size={22} />

{cartItems.length > 0 && (
  <span
    className="
      absolute
      -top-2
      -right-2
      min-w-[20px]
      h-5
      px-1
      rounded-full
      bg-[#0D6EFD]
      text-white
      text-[11px]
      flex
      items-center
      justify-center
      font-medium
    "
  >
    {cartItems.length}
  </span>
)}
  </Link>

  {/* Profile */}
  <button className="flex items-center gap-2">

    <div
      className="
        w-15
        h-13
        rounded-full
        bg-[#0D6EFD]
        text-white
        flex
        items-center
        justify-center
        text-xs
        font-semibold
      "
    >
      A
    </div>

    <ChevronDown size={16} />
  </button>

</div>

  ) : (

    /* LOGIN + REGISTER CTA */
    <div className="flex items-center gap-4">

      <p className="text-[14px] text-[#374151]">
        {isRegisterPage
          ? "Already have an account?"
          : "Don't have an account?"}
      </p>

      <Link
        to={
          isRegisterPage
            ? "/login"
            : "/register"
        }
        className="
          h-[40px]
          px-6
          rounded-lg
          border
          border-[#0D6EFD]
          text-[#0D6EFD]
          font-medium
          text-[14px]
          flex
          items-center
          justify-center
          hover:bg-[#F5F9FF]
          transition
        "
      >
        {isRegisterPage
          ? "Sign in"
          : "Create account"}
      </Link>

    </div>

  )}

</div>

        </div>

      </div>
    </header>
  );
}

export default AuthNavbar;