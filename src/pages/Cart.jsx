import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import CartFeatures from "../components/cart/CartFeatures";
import SavedForLater from "../components/cart/SavedForLater";
import DiscountBanner from "../components/cart/DiscountBanner";

function Cart() {
  return (
    <MainLayout
      hideNavbarMobile={true}
      hideFooterMobile={true}
    >
      {/* MOBILE HEADER */}
    {/* MOBILE HEADER */}
<div className="lg:hidden bg-white border-b border-[#DEE2E7] sticky top-0 z-30">
  <div className="h-[56px] px-4 flex items-center">

    <Link
      to="/products"
      className="mr-3"
    >
      <ArrowLeft size={22} />
    </Link>

    <h1 className="text-[18px] font-semibold">
      My Cart
    </h1>

  </div>
</div>

      <section className="max-w-7xl mx-auto px-0 lg:px-4 py-0 lg:py-6">

        {/* DESKTOP TITLE */}
        <h1 className="hidden lg:block text-[28px] font-semibold text-[#1C1C1C] mb-5">
          My cart (3)
        </h1>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-5">

          <CartItems />

          <CartSummary />

        </div>

        {/* DESKTOP FEATURES */}
        <div className="hidden lg:block">
          <CartFeatures />
        </div>

        {/* SAVED FOR LATER */}
        <SavedForLater />

        {/* DESKTOP DISCOUNT BANNER */}
        <div className="hidden lg:block">
          <DiscountBanner />
        </div>

      </section>
    </MainLayout>
  );
}

export default Cart;