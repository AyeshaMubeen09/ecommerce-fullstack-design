import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ShoppingCart,
  User,
  Search,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import Breadcrumb from "../components/products/Breadcrumb";
import FilterSidebar from "../components/products/FilterSidebar";
import ProductTabs from "../components/products/ProductTabs";
import ProductsGrid from "../components/products/ProductsGrid";
import Pagination from "../components/products/Pagination";
import Newsletter from "../components/home/Newsletter";

import recommendedProducts from "../data/recommendedProducts";

function Products() {
  const [view, setView] = useState("list");

  const categories = [
    "Tablets",
    "Phones",
    "Ipads",
    "Ipod",
    "Samsung",
    "Huawei",
    "Apple",
    "Xiaomi",
  ];

  return (
    <MainLayout
      hideNavbarMobile
      hideFooterMobile
    >
      {/* ========================= */}
      {/* MOBILE VERSION (FIGMA) */}
      {/* ========================= */}
      <div className="md:hidden bg-[#F7FAFC] min-h-screen">

        {/* Header */}
        <div className="bg-white px-4 pt-4 pb-3">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <Link to="/">
  <ArrowLeft size={22} />
</Link>

              <h1 className="font-semibold text-[20px]">
                Mobile accessory
              </h1>
            </div>

            <div className="flex items-center gap-5">
  <Link to="/cart">
    <ShoppingCart
      size={22}
      className="cursor-pointer"
    />
  </Link>

  <User size={22} />
</div>

          </div>

          {/* Search */}
          <div className="relative mt-4">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B96A5]"
            />

            <input
              type="text"
              placeholder="Search"
              className="
                w-full
                h-[48px]
                rounded-md
                border
                border-[#DEE2E7]
                bg-[#F7FAFC]
                pl-11
                pr-4
                outline-none
              "
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide mt-4 pb-1">
            {categories.map((item) => (
              <button
                key={item}
                className="
                  shrink-0
                  h-[40px]
                  px-4
                  rounded-md
                  bg-[#EFF2F4]
                  text-[#0D6EFD]
                  text-[15px]
                  font-medium
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-3 flex gap-2">

          <button
            className="
              flex-1
              h-[40px]
              bg-white
              border
              border-[#DEE2E7]
              rounded-md
              flex
              items-center
              justify-center
              gap-2
            "
          >
            Sort: Newest
          </button>

          <button
            className="
              flex-1
              h-[40px]
              bg-white
              border
              border-[#DEE2E7]
              rounded-md
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <SlidersHorizontal size={16} />
            Filter (3)
          </button>

          <button
            className="
              w-[42px]
              h-[40px]
              bg-white
              border
              border-[#DEE2E7]
              rounded-md
              flex
              items-center
              justify-center
            "
            onClick={() => setView("grid")}
          >
            <Grid2X2 size={18} />
          </button>

          <button
            className="
              w-[42px]
              h-[40px]
              bg-white
              border
              border-[#DEE2E7]
              rounded-md
              flex
              items-center
              justify-center
            "
            onClick={() => setView("list")}
          >
            <List size={18} />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="px-4 pb-4 flex gap-2 overflow-x-auto scrollbar-hide">

          <button className="h-[36px] px-4 border border-[#0D6EFD] rounded-md bg-white shrink-0">
            Huawei ✕
          </button>

          <button className="h-[36px] px-4 border border-[#0D6EFD] rounded-md bg-white shrink-0">
            Apple ✕
          </button>

          <button className="h-[36px] px-4 border border-[#0D6EFD] rounded-md bg-white shrink-0">
            64GB ✕
          </button>
        </div>

        {/* Products */}
        <div className="px-4">
          <ProductsGrid view={view} />
        </div>

       {/* You May Like */}
<div className="mt-6 px-4 pb-8">

  <h2 className="text-[22px] font-semibold mb-4">
    You may also like
  </h2>

  <div className="flex gap-3 overflow-x-auto scrollbar-hide">

    {recommendedProducts.slice(0, 10).map((product) => (
      <div
        key={product.id}
        className="
          shrink-0
          w-[170px]
          bg-white
          border
          border-[#DEE2E7]
          rounded-md
          overflow-hidden
        "
      >

        <div className="h-[140px] flex items-center justify-center p-3">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>

        <div className="p-3">

          <p className="font-semibold text-[#1C1C1C]">
            {product.price}
          </p>

          <p className="text-sm text-[#606060] mt-1 leading-5">
            {product.title}
          </p>

        </div>

      </div>
    ))}

  </div>
</div>
      </div>

      {/* ========================= */}
      {/* DESKTOP VERSION */}
      {/* ========================= */}
      <div className="hidden md:block">
        <section className="max-w-7xl mx-auto px-4 py-6">
          <Breadcrumb />

          <div className="grid lg:grid-cols-[240px_1fr] gap-5">
            <FilterSidebar view={view} />

            <div>
              <ProductTabs
                view={view}
                setView={setView}
              />

              <div className="flex flex-wrap items-center gap-2 mb-5">

                <button className="h-[32px] px-3 border border-[#0D6EFD] rounded-md bg-white">
                  Samsung ✕
                </button>

                <button className="h-[32px] px-3 border border-[#0D6EFD] rounded-md bg-white">
                  Poco ✕
                </button>

                <button className="h-[32px] px-3 border border-[#0D6EFD] rounded-md bg-white">
                  Apple ✕
                </button>

                <button className="ml-2 text-[#0D6EFD] text-[14px] font-medium">
                  Clear all filter
                </button>
              </div>

              <ProductsGrid view={view} />

              <div className="mt-6">
                <Pagination />
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </div>
    </MainLayout>
  );
}

export default Products;