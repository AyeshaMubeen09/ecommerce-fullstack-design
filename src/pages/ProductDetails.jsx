import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, User } from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import products from "../data/products";

import Breadcrumb from "../components/products/Breadcrumb";

import ProductGallery from "../components/details/ProductGallery";
import ProductInfo from "../components/details/ProductInfo";
import SupplierCard from "../components/details/SupplierCard";

import ProductTabs from "../components/details/ProductTabs";
import YouMayLike from "../components/details/YouMayLike";

import RelatedProducts from "../components/details/RelatedProducts";
import DiscountBanner from "../components/details/DiscountBanner";

function ProductDetails() {
const { id } = useParams();
const navigate = useNavigate();

const product = products.find(
(item) => item.id === Number(id)
);

if (!product) {
return (
<MainLayout>
<div className="max-w-7xl mx-auto py-10">
Product not found
</div>
</MainLayout>
);
}

return (
<MainLayout
hideNavbarMobile
hideFooterMobile
>
{/* MOBILE HEADER */}
<div className="lg:hidden sticky top-0 z-50 bg-white border-b border-[#DEE2E7]">

    <div className="h-[56px] px-4 flex items-center justify-between">

      <button
        onClick={() => navigate("/products")}
        className="flex items-center"
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="flex-1 text-center px-3 text-[16px] font-semibold truncate">
        {product.name}
      </h1>

      <div className="flex items-center gap-4">

        <Link to="/cart">
          <ShoppingCart size={22} />
        </Link>

        <User size={22} />

      </div>

    </div>

  </div>

  <section className="max-w-7xl mx-auto px-4 py-4 lg:py-6 pb-[90px] lg:pb-6">

    {/* Desktop Breadcrumb */}
    <div className="hidden lg:block">
      <Breadcrumb />
    </div>

    {/* Product Section */}
    <div className="bg-white border border-[#DEE2E7] rounded-md p-4 md:p-5 mt-0 lg:mt-4">

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr_280px] gap-6">

        <ProductGallery product={product} />

        <ProductInfo product={product} />

        {/* Desktop Only Supplier */}
        <div className="hidden lg:block">
          <SupplierCard />
        </div>

      </div>

    </div>

    {/* Description + You May Like */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5 mt-5">

      <ProductTabs />

      <YouMayLike />

    </div>

    {/* Desktop Only Related Products */}
    <div className="hidden lg:block mt-5">
      <RelatedProducts />
    </div>

    {/* Desktop Only Discount Banner */}
    <div className="hidden lg:block mt-5">
      <DiscountBanner />
    </div>

  </section>
</MainLayout>

);
}

export default ProductDetails;