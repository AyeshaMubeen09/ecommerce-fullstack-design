import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

import {
  ArrowLeft,
  ShoppingCart,
  User,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import Breadcrumb from "../components/products/Breadcrumb";

import ProductGallery from "../components/details/ProductGallery";
import ProductInfo from "../components/details/ProductInfo";
import SupplierCard from "../components/details/SupplierCard";

import ProductTabs from "../components/details/ProductTabs";
import YouMayLike from "../components/details/YouMayLike";

import RelatedProducts from "../components/details/RelatedProducts";
import DiscountBanner from "../components/details/DiscountBanner";

import { getProductById } from "../api/productApi";

/**
 * ==================================================
 * ProductDetails Page
 * ==================================================
 *
 * Responsibilities:
 * - Fetch single product by ID
 * - Display gallery
 * - Display product information
 * - Display supplier details
 * - Display tabs section
 * - Display recommendations
 * - Display related products
 * GET /api/products/:id
 * POST /api/cart
 * POST /api/wishlist
 *
 * ==================================================
 */

function ProductDetails() {
  // =========================
  // Route Params
  // =========================
  const { id } = useParams();
  const navigate = useNavigate();

  // =========================
  // State
  // =========================
  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [savedItems, setSavedItems] =
  useState([]);

  const [toast, setToast] =
  useState("");

  const [isInCart, setIsInCart] =
  useState(false);

  /* =========================
    USER STATE
========================= */

const [userInfo, setUserInfo] =
  useState(() => {
    return JSON.parse(
      localStorage.getItem("userInfo")
    );
  });

useEffect(() => {
  const syncUser = () => {
    setUserInfo(
      JSON.parse(
        localStorage.getItem("userInfo")
      )
    );
  };

  window.addEventListener(
    "storage",
    syncUser
  );

  window.addEventListener(
    "focus",
    syncUser
  );

  return () => {
    window.removeEventListener(
      "storage",
      syncUser
    );

    window.removeEventListener(
      "focus",
      syncUser
    );
  };
}, []);

  // =========================
  // Fetch Product
  // =========================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data =
          await getProductById(id);

        setProduct(data);

        const cart =
        JSON.parse(
        localStorage.getItem("cart")
        ) || [];

        const exists = cart.some(
        (item) => item._id === data._id
        );

setIsInCart(exists);

        // Return user to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.error(
          "Product fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  //wishlist 

  useEffect(() => {
  const storedWishlist = JSON.parse(
    localStorage.getItem("wishlist")
  ) || [];

  setSavedItems(storedWishlist);
}, []);

const isSaved = savedItems.some(
  (item) => item._id === product?._id
);

  //wishlist toggle 

  const handleToggleSave = (product) => {
  const exists = savedItems.some(
    (item) => item._id === product._id
  );

  let updatedWishlist;

  if (exists) {
    updatedWishlist = savedItems.filter(
      (item) => item._id !== product._id
    );

    setToast("Removed from saved items");
  } else {
    updatedWishlist = [
      ...savedItems,
      product,
    ];

    setToast("Product saved for later");
  }

  setSavedItems(updatedWishlist);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );

  setTimeout(() => {
    setToast("");
  }, 2500);
};


//Moblie Add to cart function 

const handleAddToCart = () => {
  const cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const exists = cart.some(
    (item) => item._id === product._id
  );

  if (exists) return;

  const updatedCart = [
    ...cart,
    product,
  ];

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  setIsInCart(true);

  alert("Product added to cart");
};

/* =========================
    BACK BUTTON
========================= */

const handleBack = () => {
  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate("/products");
  }
};

  // =========================
  // Loading State
  // =========================
  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-16 text-center">
          <p className="text-[#8B96A5]">
            Loading product...
          </p>
        </div>
      </MainLayout>
    );
  }

  // =========================
  // Product Not Found
  // =========================
  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-16 text-center">
          <h2 className="text-[22px] font-semibold">
            Product not found
          </h2>

          <Link
            to="/products"
            className="
              inline-flex
              mt-4
              px-5
              h-[42px]
              items-center
              rounded-md
              bg-[#0D6EFD]
              text-white
            "
          >
            Back to Products
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      hideNavbarMobile
      hideFooterMobile
    >
{/* =========================================
    MOBILE HEADER
========================================= */}
<div className="lg:hidden sticky top-0 z-50 bg-white border-b border-[#DEE2E7]">
  <div className="h-[56px] px-4 flex items-center justify-between">

    {/* Back */}
    <button
      onClick={handleBack}
      className="flex items-center active:scale-95"
    >
      <ArrowLeft size={22} />
    </button>

    {/* Product Name */}
    <h1
      className="
        flex-1
        text-center
        px-3
        text-[16px]
        font-semibold
        truncate
      "
    >
      {product.name}
    </h1>

    {/* Actions */}
    <div className="flex items-center gap-4">

      <Link
        to="/cart"
        className="hover:text-[#0D6EFD]"
      >
        <ShoppingCart size={22} />
      </Link>

      <Link
        to={
          userInfo
            ? "/profile"
            : "/login"
        }
        className="hover:text-[#0D6EFD]"
      >
        <User size={22} />
      </Link>

    </div>

  </div>
</div>

      {/* =========================================
          PAGE CONTENT
      ========================================= */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          py-4
          lg:py-6
          pb-[90px]
          lg:pb-6
        "
      >
        {/* Breadcrumb */}
        <Breadcrumb
  selectedCategories={[
    product?.category,
  ]}
  productName={product?.name}
/>

        {/* =========================================
            PRODUCT OVERVIEW
        ========================================= */}
        <div
          className="
            bg-white
            border
            border-[#DEE2E7]
            rounded-md
            p-4
            md:p-5
            mt-0
            lg:mt-4
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[380px_1fr_280px]
              gap-6
            "
          >
            {/* Gallery */}
            <ProductGallery
              product={product}
            />

            {/* Product Details */}
            <ProductInfo
             product={product}
             onAddToCart={handleAddToCart}
             isInCart={isInCart}
             />

            {/* Supplier */}
            <div className="hidden lg:block">
              <SupplierCard
               product={product}
               isSaved={isSaved}
               onSaveForLater={() =>
               handleToggleSave(product)
               }
              />
            </div>
          </div>
        </div>

        {/* =========================================
            TABS + RECOMMENDATIONS
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_280px]
            gap-5
            mt-5
          "
        >
          <ProductTabs
            product={product}
          />

          <YouMayLike
            product={product}
          />
        </div>

        {/* =========================================
            RELATED PRODUCTS
        ========================================= */}
        <div className="hidden lg:block mt-5">
          <RelatedProducts
            product={product}
          />
        </div>

        {/* =========================================
            DISCOUNT BANNER
        ========================================= */}
        <div className="hidden lg:block mt-5">
          <DiscountBanner />
        </div>
      </section>
    </MainLayout>
  );
}

export default ProductDetails;