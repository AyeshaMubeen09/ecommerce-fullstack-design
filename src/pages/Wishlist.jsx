import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  ShoppingCart,
  Heart,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import productImages from "../data/productImages";

function Wishlist() {
  /* =========================
      NAVIGATION
  ========================= */
  const navigate = useNavigate();

  /* =========================
      STATE
  ========================= */
  const [savedItems, setSavedItems] =
    useState([]);

  const [toast, setToast] =
    useState("");

  /* =========================
      LOAD WISHLIST
  ========================= */
  useEffect(() => {
    const wishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    setSavedItems(wishlist);
  }, []);

  /* =========================
      REMOVE ITEM
  ========================= */
  const removeItem = (productId) => {
    const updatedWishlist =
      savedItems.filter(
        (item) => item._id !== productId
      );

    setSavedItems(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setToast(
      "Removed from wishlist"
    );

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* =========================
      ADD TO CART
  ========================= */
  const addToCart = (product) => {
    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    const exists = cart.some(
      (item) =>
        item._id === product._id
    );

    if (!exists) {
      cart.push(product);

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      setToast(
        "Added to cart"
      );
    } else {
      setToast(
        "Already in cart"
      );
    }

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* =========================
      RENDER
  ========================= */
  return (
    <MainLayout
      hideNavbarMobile
      hideFooterMobile
    >

      {/* =========================
          MOBILE ONLY
      ========================= */}
      <div className="md:hidden bg-[#F7FAFC] min-h-screen">

        {/* =========================
            HEADER
        ========================= */}
        <div className="sticky top-0 z-50 bg-white border-b border-[#DEE2E7]">

          <div className="h-[56px] px-4 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <button
                onClick={() => {
                  if (
                    window.history.length > 1
                  ) {
                    navigate(-1);
                  } else {
                    navigate("/products");
                  }
                }}
              >
                <ArrowLeft size={22} />
              </button>

              <h1 className="text-[18px] font-semibold">
                Wishlist
              </h1>

            </div>

            <Link to="/cart">
              <ShoppingCart
                size={22}
              />
            </Link>

          </div>

        </div>
                {/* =========================
            CONTENT
        ========================= */}

        <div className="px-4 py-5">

          {/* Page Title */}
          <div className="mb-5">
            <h2 className="text-[24px] font-semibold">
              Saved Items
            </h2>

            <p className="text-[#8B96A5] text-sm mt-1">
              {savedItems.length} item
              {savedItems.length !== 1 && "s"} saved
            </p>
          </div>

          {/* Wishlist Items */}
          {savedItems.length > 0 ? (

            <div className="space-y-4">

              {savedItems.map((product) => (

                <div
                  key={product._id}
                  className="
                    bg-white
                    rounded-xl
                    border
                    border-[#DEE2E7]
                    overflow-hidden
                  "
                >

                  {/* Clickable Area */}
                  <Link
                    to={`/products/${product._id}`}
                    className="
                      flex
                      gap-4
                      p-4
                    "
                  >

                    {/* Product Image */}
                    <div
                      className="
                        w-[95px]
                        h-[95px]
                        bg-[#F7FAFC]
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >

                      <img
                        src={
                          productImages[
                            product.image
                          ] || product.image
                        }
                        alt={product.name}
                        className="
                          max-w-full
                          max-h-full
                          object-contain
                        "
                      />

                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">

                      <h3
                        className="
                          font-semibold
                          text-[16px]
                          leading-5
                          line-clamp-2
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          text-sm
                          text-[#8B96A5]
                          mt-2
                        "
                      >
                        {product.category}
                      </p>

                      <div className="mt-2 flex items-center gap-2">

                        <span
                          className="
                            text-[#FF9017]
                            text-sm
                          "
                        >
                          ★★★★☆
                        </span>

                        <span
                          className="
                            text-sm
                            text-[#8B96A5]
                          "
                        >
                          {product.rating || "4.5"}
                        </span>

                      </div>

                      <p
                        className="
                          mt-3
                          text-[20px]
                          font-bold
                          text-[#1C1C1C]
                        "
                      >
                        ${product.price}
                      </p>

                    </div>

                  </Link>

                  {/* Bottom Buttons */}
                  <div
                    className="
                      border-t
                      border-[#DEE2E7]
                      p-4
                      flex
                      gap-3
                    "
                  >

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                      className="
                        flex-1
                        h-[44px]
                        rounded-lg
                        bg-[#0D6EFD]
                        text-white
                        font-medium
                        active:scale-[0.98]
                        transition
                      "
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() =>
                        removeItem(product._id)
                      }
                      className="
                        w-[52px]
                        h-[44px]
                        rounded-lg
                        border
                        border-[#DEE2E7]
                        flex
                        items-center
                        justify-center
                        text-[#FA3434]
                        active:scale-[0.97]
                        transition
                      "
                    >
                      <Heart
                        size={20}
                        fill="currentColor"
                      />
                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (
                        /* =========================
                EMPTY STATE
            ========================= */
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                py-16
              "
            >
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-[#FFEAF0]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Heart
                  size={40}
                  className="text-[#FF5A7A]"
                />
              </div>

              <h2 className="text-[24px] font-semibold">
                Your wishlist is empty
              </h2>

              <p
                className="
                  mt-3
                  text-[#8B96A5]
                  max-w-[280px]
                "
              >
                Save products you like and
                they'll appear here for quick
                access later.
              </p>

              <button
                onClick={() =>
                  navigate("/products")
                }
                className="
                  mt-8
                  h-[48px]
                  px-8
                  rounded-lg
                  bg-[#0D6EFD]
                  text-white
                  font-medium
                "
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>

      {/* =========================
          DESKTOP PLACEHOLDER
      ========================= */}

      <div className="hidden md:flex min-h-[70vh] items-center justify-center">
        <div className="text-center">

          <Heart
            size={54}
            className="mx-auto text-[#0D6EFD]"
          />

          <h2 className="mt-5 text-3xl font-semibold">
            Wishlist
          </h2>

          <p className="mt-3 text-[#8B96A5]">
            This page is currently optimized
            for the mobile version.
          </p>

          <button
            onClick={() =>
              navigate("/products")
            }
            className="
              mt-8
              h-[46px]
              px-7
              rounded-lg
              bg-[#0D6EFD]
              text-white
            "
          >
            Browse Products
          </button>

        </div>
      </div>

      {/* =========================
          TOAST
      ========================= */}

      {toast && (
        <div
          className="
            fixed
            bottom-5
            left-1/2
            -translate-x-1/2
            bg-[#1C1C1C]
            text-white
            px-5
            py-3
            rounded-lg
            shadow-xl
            z-50
          "
        >
          {toast}
        </div>
      )}

    </MainLayout>
  );
}

export default Wishlist;