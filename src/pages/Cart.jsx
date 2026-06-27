import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import CartFeatures from "../components/cart/CartFeatures";
import SavedForLater from "../components/cart/SavedForLater";
import DiscountBanner from "../components/cart/DiscountBanner";
import { createOrder } from "../api/orderApi";



/**
 * ==================================================
 * Cart Page
 * ==================================================
 * Current:
 * - Displays cart products
 * - Displays cart summary
 * - Displays saved-for-later products
 *
 * Backend Integration:
 * GET    /api/cart
 * PATCH  /api/cart/:id
 * DELETE /api/cart/:id
 *
 * GET    /api/wishlist
 * DELETE /api/wishlist/:id
 * POST   /api/cart/move-from-wishlist
 * ==================================================
 */

function Cart() {
// =========================================
// State
// =========================================
const navigate = useNavigate();
const [cartItems, setCartItems] =
  useState(() => {
    try {
      const storedCart =
        localStorage.getItem("cart");

      return storedCart
        ? JSON.parse(storedCart)
        : [];
    } catch (error) {
      console.error(
        "Failed to load cart:",
        error
      );
      return [];
    }
  });

const location = useLocation();

useEffect(() => {
  if (location.hash === "#saved") {
    const element =
      document.getElementById("saved");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}, [location]);

const [wishlistItems, setWishlistItems] =
  useState(() => {
    try {
      const storedWishlist =
        localStorage.getItem("wishlist");

      return storedWishlist
        ? JSON.parse(storedWishlist)
        : [];
    } catch (error) {
      console.error(
        "Failed to load wishlist:",
        error
      );
      return [];
    }
  });

  //checkout 

const checkoutHandler = async () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  try {
    const subtotal = cartItems.reduce(
      (sum, item) =>
        sum +
        Number(item.price) *
          Number(item.qty || 1),
      0
    );

    const shippingPrice = 0;

    const taxPrice = subtotal * 0.1;

    const totalPrice =
      subtotal +
      shippingPrice +
      taxPrice;

    const orderData = {
      items: cartItems.map((item) => ({
        product:
          item._id || item.id,

        name: item.name,

        image: item.image,

        price: item.price,

        quantity:
          item.qty || 1,
      })),

      shippingAddress: {
        fullName: "Customer",
        address: "123 Main Street",
        city: "Islamabad",
        postalCode: "44000",
        country: "Pakistan",
        phone: "+92 300 0000000",
      },

      paymentMethod:
        "Cash on Delivery",

      subtotal,

      shippingPrice,

      taxPrice,

      totalPrice,
    };

    await createOrder(orderData);

    setCartItems([]);

   localStorage.setItem(
  "cart",
  JSON.stringify([])
);

    alert(
      "Order placed successfully!"
    );

    navigate("/orders");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
        "Failed to place order."
    );
  }
};

  // =========================================
  // Wishlist Actions
  // DELETE /api/wishlist/:id
  // =========================================
  const removeWishlistItem = (id) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) =>
          (item._id || item.id) !== id
      )
    );
  };

  // move to cart 

 const moveToCart = (product) => {
 const existsInCart = cartItems.some(
    (item) =>
      (item._id || item.id) ===
      (product._id || product.id)
  );

  if (!existsInCart) {
    const updatedCart = [
      ...cartItems,
      {
        ...product,
        qty: 1,
      },
    ];

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  //updated wish list 

  const updatedWishlist = wishlistItems.filter(
    (item) =>
      (item._id || item.id) !==
      (product._id || product.id)
  );

  setWishlistItems(updatedWishlist);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );
};

//Save for later 

const saveForLater = (product) => {
  const existsInWishlist =
    wishlistItems.some(
      (item) =>
        (item._id || item.id) ===
        (product._id || product.id)
    );

  if (existsInWishlist) return;

  const updatedWishlist = [
    ...wishlistItems,
    product,
  ];

  setWishlistItems(updatedWishlist);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );
};

//Persistence 

useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );
}, [cartItems]);

useEffect(() => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlistItems)
  );
}, [wishlistItems]);


  return (
    <MainLayout
      hideNavbarMobile={true}
      hideFooterMobile={true}
    >
      {/* =========================================
          MOBILE HEADER
      ========================================= */}
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

      {/* =========================================
          PAGE CONTENT
      ========================================= */}
      <section className="max-w-7xl mx-auto px-0 lg:px-4 py-0 lg:py-6">
        {/* =========================================
            DESKTOP TITLE
        ========================================= */}
        <h1 className="hidden lg:block text-[28px] font-semibold text-[#1C1C1C] mb-5">
          My cart ({cartItems.length})
        </h1>

        {/* =========================================
            MAIN CART SECTION
        ========================================= */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-5">
         <CartItems
          cartItems={cartItems}
          setCartItems={setCartItems}
          onSaveForLater={saveForLater}
          />

          <CartSummary
  cartItems={cartItems}
  onCheckout={checkoutHandler}
/>
        </div>

        {/* =========================================
            FEATURES
            Desktop Only
        ========================================= */}
        <div className="hidden lg:block">
          <CartFeatures />
        </div>

        {/* =========================================
            SAVED FOR LATER / WISHLIST
        ========================================= */}
        <div id="saved">
        <SavedForLater
        wishlistItems={wishlistItems}
        onRemoveWishlist={removeWishlistItem}
        onMoveToCart={moveToCart}
        />
        </div>

        {/* =========================================
            PROMOTIONAL BANNER
            Desktop Only
        ========================================= */}
        <div className="hidden lg:block">
          <DiscountBanner />
        </div>
      </section>
    </MainLayout>
  );
}

export default Cart;