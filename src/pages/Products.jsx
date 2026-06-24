import { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  ArrowLeft,
  ShoppingCart,
  User,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

/* Layout */
import MainLayout from "../layouts/MainLayout";

/* Components */
import Breadcrumb from "../components/products/Breadcrumb";
import FilterSidebar from "../components/products/FilterSidebar";
import ProductTabs from "../components/products/ProductTabs";
import ProductsGrid from "../components/products/ProductsGrid";
import Pagination from "../components/products/Pagination";
import Newsletter from "../components/home/Newsletter";

/* Data / API */
import productImages from "../data/productImages";
import { getProducts } from "../api/productApi";

function Products() {
  /* =========================
     STATE (DATA)
  ========================= */
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  /* =========================
     UI STATE
  ========================= */
  const [view, setView] = useState("grid");

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  /* =========================
     URL STATE
  ========================= */
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const categoryFromUrl = searchParams.get("category") || "";

  /* =========================
     FILTER STATE
  ========================= */
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);
  const [toast, setToast] = useState("");

  /* =========================
     URL CATEGORY SYNC
  ========================= */
  useEffect(() => {
    setSelectedCategories(
      categoryFromUrl ? [categoryFromUrl] : []
    );
  }, [categoryFromUrl]);

    /* =========================
        Wishlist
  ========================= */

  useEffect(() => {
  const storedWishlist = JSON.parse(
    localStorage.getItem("wishlist")
  ) || [];

  setSavedItems(storedWishlist);
}, []);

  /* =========================
     VIEW DEPENDENT PAGINATION SIZE
  ========================= */
  useEffect(() => {
    setProductsPerPage(view === "grid" ? 9 : 7);
    setCurrentPage(1);
  }, [view]);

  /* =========================
     FETCH PRODUCTS
  ========================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (error) {
        console.error("Products fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  /* =========================
     RECOMMENDED PRODUCTS
  ========================= */
  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const data = await getProducts();
        setRecommendedProducts(data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendedProducts();
  }, []);

  /* =========================
     FILTER LOGIC
  ========================= */
  useEffect(() => {
    let filtered = [...allProducts];

    /* SEARCH */
    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();

      filtered = filtered.filter((product) =>
        [
          product.name,
          product.title,
          product.description,
          product.brand,
          product.category,
        ]
          .filter(Boolean)
          .some((field) =>
            field.toString().toLowerCase().includes(term)
          )
      );
    }

    /* BRAND FILTER */
    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.includes(p.brand)
      );
    }

    /* MANUFACTURER */
    if (selectedManufacturer) {
      filtered = filtered.filter(
        (p) => p.brand === selectedManufacturer
      );
    }

    /* CATEGORY */
    if (selectedCategories.length) {
      filtered = filtered.filter((p) => {
        const productCategories =
          p.category?.split(",").map((c) => c.trim()) || [];

        return selectedCategories.some((c) =>
          productCategories.includes(c)
        );
      });
    }

    /* FEATURES */
    if (selectedFeatures.length) {
      filtered = filtered.filter((p) => {
        const productFeatures = Array.isArray(p.features)
          ? p.features.flatMap((f) =>
              f.split(",").map((x) => x.trim())
            )
          : [];

        return selectedFeatures.some((f) =>
          productFeatures.includes(f)
        );
      });
    }

    /* CONDITION */
    if (selectedCondition) {
      filtered = filtered.filter(
        (p) => p.condition === selectedCondition
      );
    }

    /* RATINGS */
    if (selectedRatings.length) {
      filtered = filtered.filter((p) => {
        const rating = parseFloat(p.rating || 0);

        return selectedRatings.some(
          (r) => rating >= r && rating < r + 1
        );
      });
    }

    /* PRICE */
    filtered = filtered.filter(
      (p) =>
        p.price >= minPrice && p.price <= maxPrice
    );

    setProducts(filtered);
    setCurrentPage(1);
  }, [
    allProducts,
    searchTerm,
    selectedBrands,
    selectedCategories,
    selectedFeatures,
    selectedCondition,
    selectedManufacturer,
    selectedRatings,
    minPrice,
    maxPrice,
  ]);

  /* =========================
     DERIVED DATA (MEMOIZED)
  ========================= */
  const categories = useMemo(() => {
    return [
      ...new Set(
        allProducts.flatMap((p) =>
          p.category
            ? p.category.split(",").map((c) => c.trim())
            : []
        )
      ),
    ];
  }, [allProducts]);

  const activeFilters = useMemo(
    () => [
      ...selectedBrands,
      ...selectedCategories,
      ...selectedFeatures,
      ...(selectedCondition ? [selectedCondition] : []),
      ...(selectedManufacturer ? [selectedManufacturer] : []),
      ...selectedRatings.map((r) => `${r} Stars`),
    ],
    [
      selectedBrands,
      selectedCategories,
      selectedFeatures,
      selectedCondition,
      selectedManufacturer,
      selectedRatings,
    ]
  );

  /* =========================
     FILTER HELPERS
  ========================= */
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedFeatures([]);
    setSelectedRatings([]);
    setSelectedCondition("");
    setSelectedManufacturer("");
    setMinPrice(0);
    setMaxPrice(999999);
  };

  const removeFilter = (filter) => {
    setSelectedBrands((p) => p.filter((i) => i !== filter));
    setSelectedCategories((p) => p.filter((i) => i !== filter));
    setSelectedFeatures((p) => p.filter((i) => i !== filter));

    if (filter === selectedCondition) setSelectedCondition("");
    if (filter === selectedManufacturer) setSelectedManufacturer("");

    if (filter.includes("Stars")) {
      const rating = Number(filter.split(" ")[0]);
      setSelectedRatings((p) => p.filter((r) => r !== rating));
    }
  };

  //wishlist toggle function 

const handleToggleSave = (product) => {
 const exists = savedItems.some(
  (item) =>
    (item._id || item.id) ===
    (product._id || product.id)
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

  /* =========================
     RENDER
  ========================= */
  return (
    <MainLayout hideNavbarMobile hideFooterMobile>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden bg-[#F7FAFC] min-h-screen">

        {/* Header */}
        <div className="bg-white px-4 pt-4 pb-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link to="/">
                <ArrowLeft size={22} />
              </Link>

              <h1 className="font-semibold text-[20px]">
                {selectedCategories[0] || "All Products"}
              </h1>
            </div>

            <div className="flex gap-5">
              <Link to="/cart">
                <ShoppingCart size={22} />
              </Link>
              <User size={22} />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto mt-4 pb-1 scrollbar-hide">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setSelectedCategories(
                    selectedCategories.includes(item)
                      ? []
                      : [item]
                  )
                }
                className={`shrink-0 h-[40px] px-4 rounded-md text-[15px] font-medium ${
                  selectedCategories.includes(item)
                    ? "bg-[#0D6EFD] text-white"
                    : "bg-[#EFF2F4] text-[#0D6EFD]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-3 flex gap-2">
          <button className="flex-1 h-[40px] bg-white border rounded-md flex items-center justify-center gap-2">
            Sort: Newest
          </button>

          <button className="flex-1 h-[40px] bg-white border rounded-md flex items-center justify-center gap-2">
            <SlidersHorizontal size={16} />
            Filter ({activeFilters.length})
          </button>

          <button
            onClick={() => setView("grid")}
            className="w-[42px] h-[40px] border rounded-md flex items-center justify-center"
          >
            <Grid2X2 size={18} />
          </button>

          <button
            onClick={() => setView("list")}
            className="w-[42px] h-[40px] border rounded-md flex items-center justify-center"
          >
            <List size={18} />
          </button>
        </div>

        {/* Products */}
        <div className="px-4">
           <ProductsGrid
           products={products}
           view={view}
           currentPage={currentPage}
           productsPerPage={productsPerPage}
           savedItems={savedItems}
           onToggleSave={handleToggleSave}
/>
        </div>

        {/* You may like */}
        <div className="mt-6 px-4 pb-8">
          <h2 className="text-[22px] font-semibold mb-4">
            You may also like
          </h2>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {recommendedProducts.slice(0, 10).map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="shrink-0 w-[170px] bg-white border rounded-md overflow-hidden"
              >
                <div className="h-[140px] flex items-center justify-center p-3">
                  <img
                    src={productImages[product.image] || product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="p-3">
                  <p className="font-semibold">${product.price}</p>
                  <p className="text-sm text-[#606060]">
                    {product.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <section className="max-w-7xl mx-auto px-4 py-6">

          <Breadcrumb selectedCategories={selectedCategories} />

          <div className="grid lg:grid-cols-[240px_1fr] gap-5">

            {/* Sidebar */}
            <div className="sticky top-4">
              <FilterSidebar
                products={allProducts}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedFeatures={selectedFeatures}
                setSelectedFeatures={setSelectedFeatures}
                selectedCondition={selectedCondition}
                setSelectedCondition={setSelectedCondition}
                selectedRatings={selectedRatings}
                setSelectedRatings={setSelectedRatings}
                selectedManufacturer={selectedManufacturer}
                setSelectedManufacturer={setSelectedManufacturer}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </div>

            {/* Content */}
            <div>
              <ProductTabs
                view={view}
                setView={setView}
                products={products}
                activeFilters={activeFilters}
                clearAllFilters={clearAllFilters}
                removeFilter={removeFilter}
                categoryFromUrl={categoryFromUrl}
                selectedCategories={selectedCategories}
              />

                <ProductsGrid
           products={products}
           view={view}
           currentPage={currentPage}
           productsPerPage={productsPerPage}
           savedItems={savedItems}
           onToggleSave={handleToggleSave}
/>

              {products.length > 0 ? (
                <Pagination
                  totalProducts={products.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  productsPerPage={productsPerPage}
                  setProductsPerPage={setProductsPerPage}
                />
              ) : (
                <div className="bg-white border rounded-md py-20 text-center mt-5">
                  <h3 className="text-[20px] font-semibold">
                    No Products Found
                  </h3>

                  <button
                    onClick={clearAllFilters}
                    className="mt-5 px-6 h-[44px] bg-[#0D6EFD] text-white rounded-md"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <Newsletter />
      </div>

      {toast && (
  <div
    className="
      fixed
      bottom-5
      right-5
      z-50
      bg-[#1C1C1C]
      text-white
      px-4
      py-3
      rounded-md
      shadow-lg
    "
  >
    {toast}
  </div>
)}
    </MainLayout>
  );
}

export default Products;