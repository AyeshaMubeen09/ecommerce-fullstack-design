import AdminLayout from "../layouts/AdminLayout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import productImages from "../../data/productImages";

import {
  getAllOrders,
} from "../../api/orderApi";

import {
  Plus,
  ChevronRight,
  Package,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
} from "lucide-react";

import {
  getProducts,
  deleteProduct,
} from "../services/productService";

function AdminProducts() {
  /* =========================
      PAGE INFO
  ========================= */
  const page = "products";

  const pageTitles = {
    dashboard: "Dashboard",
    products: "Products",
    orders: "Orders",
    users: "Users",
    categories: "Categories",
    coupons: "Coupons",
    reviews: "Reviews",
    reports: "Reports",
    settings: "Settings",
  };

  /* =========================
      NAVIGATION
  ========================= */
  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
      STATE
  ========================= */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] =
    useState(1);

const [orders, setOrders] = useState([]);

useEffect(() => {
  fetchProducts();
  fetchAllOrders();
}, []);

const fetchProducts = async () => {
  try {
    const data = await getProducts();
    setProducts(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const fetchAllOrders = async () => {
  try {
    const data = await getAllOrders();
    setOrders(data);
  } catch (error) {
    console.error("Failed to load orders:", error);
    setOrders([]);
  }
};


 const [productsPerPage, setProductsPerPage] = useState(
  window.innerWidth < 1024 ? 10 : 20
);

useEffect(() => {
  const handleResize = () => {
    setProductsPerPage(window.innerWidth < 1024 ? 10 : 20);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  /* =========================
      FILTER INPUTS
  ========================= */
  const [searchInput, setSearchInput] =
    useState("");

  const [categoryInput, setCategoryInput] =
    useState("");

  const [shippingInput, setShippingInput] =
    useState("");

  /* =========================
      APPLIED FILTERS
  ========================= */
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [shipping, setShipping] =
    useState("");

  /* =========================
      RESET PAGE WHEN FILTERS CHANGE
  ========================= */
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    category,
    shipping,
  ]);

  /* =========================
      SCROLL TO HASH
  ========================= */
  useEffect(() => {
    if (location.hash) {
      const element =
        document.querySelector(
          location.hash
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  /* =========================
      URL FILTER
  ========================= */
  const searchParams =
    new URLSearchParams(location.search);

  const filter =
    searchParams.get("filter");

  /* =========================
      PRODUCT IMAGE
  ========================= */
  const getProductImage = (image) => {
    if (
      image?.startsWith("http") ||
      image?.startsWith("https")
    ) {
      return image;
    }

    return (
      productImages[image] ||
      "/placeholder.png"
    );
  };


  /* =========================
      DELETE PRODUCT
  ========================= */
  const deleteHandler = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      fetchProducts();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete product."
      );
    }
  };

  /* =========================
      FILTER PRODUCTS
  ========================= */
  const filteredProducts =
    products.filter((product) => {
      const matchesDashboardFilter =
        filter === "low-stock"
          ? product.stock <= 10
          : true;

 const searchText = [
  product.name,
  product.description,
  product.category,
  product.brand,
  product.color,
  product.features,
  product.condition,
  product.discount,
  product.price,
  product.originalPrice,
  product.stock,
  product.rating,
  product.orders,
  product.freeShipping ? "free shipping" : "paid shipping",
]
  .join(" ")
  .toLowerCase();

const matchesSearch =
  searchText.includes(
    search.toLowerCase().trim()
  );

      const matchesCategory =
        !category ||
        product.category ===
          category;

      const matchesShipping =
        shipping === ""
          ? true
          : String(
              product.freeShipping
            ) === shipping;

      return (
        matchesDashboardFilter &&
        matchesSearch &&
        matchesCategory &&
        matchesShipping
      );
    });

  /* =========================
      PAGINATION
  ========================= */
  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  const indexOfLastProduct =
    currentPage *
    productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct -
    productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

  /* =========================
      SEARCH
  ========================= */
  const searchHandler = () => {
    setSearch(searchInput.trim());

    setCategory(categoryInput);

    setShipping(shippingInput);

    setCurrentPage(1);
  };

  /* =========================
      EXPORT CSV
  ========================= */
  const exportProductsHandler =
    () => {
      const csvRows = [
        [
          "Name",
          "Category",
          "Price",
          "Stock",
          "Brand",
          "Free Shipping",
        ],
      ];

      filteredProducts.forEach(
        (product) => {
          csvRows.push([
            product.name,
            product.category,
            product.price,
            product.stock,
            product.brand,
            product.freeShipping
              ? "Yes"
              : "No",
          ]);
        }
      );

      const csvContent = csvRows
        .map((row) =>
          row.join(",")
        )
        .join("\n");

      const blob = new Blob(
        [csvContent],
        {
          type: "text/csv",
        }
      );

      const url =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        "filtered-products.csv";

      document.body.appendChild(
        link
      );

      link.click();

      document.body.removeChild(
        link
      );

      window.URL.revokeObjectURL(
        url
      );
    };

  return (
    <AdminLayout>
  <div className="px-4 md:px-6 xl:px-8 py-5 md:py-6">

    {/* =========================
        PAGE HEADER
    ========================= */}
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-start
        md:justify-between
        gap-5
        mb-8
      "
    >
      {/* Left */}
      <div>
        <h1
          className="
            text-2xl
            md:text-[30px]
            font-bold
            text-[#1C1C1C]
            leading-none
          "
        >
          {pageTitles[page]}
        </h1>

        <div
          className="
            flex
            items-center
            gap-2
            mt-3
            text-sm
          "
        >
          <Link
            to="/admin"
            className="
              text-[#8B96A5]
              hover:text-[#0D6EFD]
            "
          >
            Dashboard
          </Link>

          <ChevronRight
            size={14}
            className="text-[#8B96A5]"
          />

          <span className="text-[#556987]">
            Products
          </span>
        </div>
      </div>

      {/* Add Product */}
      <Link
        to="/admin/products/create"
        className="
          h-12
          md:h-[48px]
          w-full
          md:w-auto
          px-6
          rounded-xl
          bg-[#0D6EFD]
          text-white
          font-medium
          flex
          items-center
          justify-center
          gap-2
          hover:bg-[#0B63E5]
          transition
        "
      >
        <Plus size={18} />
        Add Product
      </Link>
    </div>

    {/* =========================
        PRODUCT STATS
    ========================= */}

    <div
      className="
        grid
        grid-cols-2
        xl:grid-cols-4
        gap-4
        md:gap-6
        mb-8
      "
    >

      {/* Total Products */}

      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex justify-between items-start">

          <div>
            <p className="text-xs md:text-sm text-[#8B96A5]">
              Total Products
            </p>

            <h3 className="text-2xl md:text-[34px] font-bold mt-2">
              {products.length}
            </h3>
          </div>

          <div
            className="
              w-11
              h-11
              md:w-14
              md:h-14
              rounded-xl
              bg-[#EEF4FF]
              flex
              items-center
              justify-center
            "
          >
            <Package
              size={22}
              className="text-[#0D6EFD]"
            />
          </div>

        </div>
      </div>

      {/* In Stock */}

      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex justify-between items-start">

          <div>
            <p className="text-xs md:text-sm text-[#8B96A5]">
              In Stock
            </p>

            <h3 className="text-2xl md:text-[34px] font-bold mt-2">
              {
                products.filter(
                  p => p.stock > 0
                ).length
              }
            </h3>
          </div>

          <div
            className="
              w-11
              h-11
              md:w-14
              md:h-14
              rounded-xl
              bg-[#EAFBF0]
              flex
              items-center
              justify-center
            "
          >
            <CheckCircle2
              size={22}
              className="text-green-600"
            />
          </div>

        </div>
      </div>

      {/* Orders */}
<div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 shadow-sm">
  <div className="flex justify-between items-start">

    <div>
      <p className="text-xs md:text-sm text-[#8B96A5]">
        Orders
      </p>

      <h3 className="text-2xl md:text-[34px] font-bold mt-2">
        {
    orders.filter(
      (order) => order.status !== "Cancelled"
    ).length
  }
      </h3>
    </div>

    <div
      className="
        w-11
        h-11
        md:w-14
        md:h-14
        rounded-xl
        bg-[#FFF5E6]
        flex
        items-center
        justify-center
      "
    >
      <FileText
        size={22}
        className="text-[#F2994A]"
      />
    </div>

  </div>
</div>

      {/* Out Of Stock */}

      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex justify-between items-start">

          <div>
            <p className="text-xs md:text-sm text-[#8B96A5]">
              Out of Stock
            </p>

            <h3 className="text-2xl md:text-[34px] font-bold mt-2">
              {
                products.filter(
                  p =>
                    Number(p.stock) === 0
                ).length
              }
            </h3>
          </div>

          <div
            className="
              w-11
              h-11
              md:w-14
              md:h-14
              rounded-xl
              bg-[#FFECEC]
              flex
              items-center
              justify-center
            "
          >
            <AlertTriangle
              size={22}
              className="text-[#FA3434]"
            />
          </div>

        </div>
      </div>

    </div>

    {/* =========================
        FILTERS
    ========================= */}

    <div
      className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-2xl
        p-4
        shadow-sm
        mb-8
      "
    >

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {/* Search */}

        <div className="relative">

          <Search
            size={17}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#8B96A5]
            "
          />

          <input
            type="text"
            value={searchInput}
            placeholder="Search products..."
            onChange={(e) => {
              const value = e.target.value;

              setSearchInput(value);

              if (value.trim() === "") {
                setSearch("");
                setCategory(categoryInput);
                setShipping(shippingInput);
                setCurrentPage(1);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchHandler();
              }
            }}
            className="
              w-full
              h-11
              pl-10
              pr-4
              border
              border-[#DEE2E7]
              rounded-xl
            "
          />
        </div>

        {/* Selects */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-3
          "
        >
          <select
            value={categoryInput}
            onChange={(e) =>
              setCategoryInput(
                e.target.value
              )
            }
            className="h-11 px-4 border rounded-xl"
          >
            <option value="">
              All Categories
            </option>

            {[...new Set(
              products.map(
                p => p.category
              )
            )].map(cat => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

          <select
            value={shippingInput}
            onChange={(e)=>
              setShippingInput(
                e.target.value
              )
            }
            className="h-11 px-4 border rounded-xl"
          >
            <option value="">
              All Shipping
            </option>

            <option value="true">
              Free Shipping
            </option>

            <option value="false">
              Paid Shipping
            </option>
          </select>

          <div
            className="
              flex
              gap-3
            "
          >
            <button
              onClick={searchHandler}
              className="
                flex-1
                h-11
                rounded-xl
                bg-[#0D6EFD]
                text-white
              "
            >
              Search
            </button>

            <button
              onClick={exportProductsHandler}
              className="
                flex-1
                h-11
                border
                rounded-xl
              "
            >
              Export
            </button>
          </div>

        </div>

      </div>

    </div>
{/* =========================
    DESKTOP PRODUCTS TABLE
========================= */}
<div className="hidden md:block">
  <div
    id="products-table"
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      overflow-hidden
    "
  >
    <div className="overflow-x-auto">
      <table className="w-full">

        {/* =========================
            TABLE HEADER
        ========================= */}
        <thead>
          <tr
            className="
              h-[56px]
              border-b
              border-[#EFF2F4]
              bg-[#FAFBFC]
              text-[#505050]
              text-[14px]
              font-semibold
            "
          >
            <th className="w-[60px] px-6 text-left">
              <input type="checkbox" />
            </th>

            <th className="min-w-[320px] px-4 text-left">
              Product
            </th>

            <th className="min-w-[180px] px-4 text-left">
              Category
            </th>

            <th className="min-w-[120px] px-4 text-left">
              Price
            </th>

            <th className="min-w-[100px] px-4 text-left">
              Stock
            </th>

            <th className="min-w-[150px] px-4 text-left">
              Date Added
            </th>

            <th className="min-w-[140px] px-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        {/* =========================
            TABLE BODY
        ========================= */}
        <tbody>

          {products.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="
                  py-16
                  text-center
                  text-[#8B96A5]
                "
              >
                No products found.
              </td>
            </tr>
          ) : (
            currentProducts.map((product) => (
              <tr
                key={product._id}
                className="
                  border-b
                  border-[#EFF2F4]
                  hover:bg-[#FAFBFC]
                  transition
                "
              >
                {/* Checkbox */}
                <td className="px-6">
                  <input type="checkbox" />
                </td>

                {/* Product */}
                <td className="px-4 py-5">
                  <div className="flex items-center gap-4">

                    <img
                      src={getProductImage(product.image)}
                      alt={product.name}
                      className="
                        w-12
                        h-12
                        rounded-xl
                        object-cover
                        border
                        border-[#EFF2F4]
                        shrink-0
                      "
                    />

                    <div className="min-w-0">
                      <h4
                        className="
                          text-[15px]
                          font-semibold
                          text-[#1C1C1C]
                          truncate
                        "
                      >
                        {product.name}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          text-[#8B96A5]
                        "
                      >
                        ID:{" "}
                        {product.id ||
                          product._id.slice(-6)}
                      </p>
                    </div>

                  </div>
                </td>

                {/* Category */}
                <td className="px-4">
                  <span
                    className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      bg-[#F5F7FA]
                      text-[#505050]
                      text-[13px]
                      font-medium
                    "
                  >
                    {product.category}
                  </span>
                </td>

                {/* Price */}
                <td
                  className="
                    px-4
                    font-semibold
                    whitespace-nowrap
                  "
                >
                  $
                  {Number(
                    product.price
                  ).toLocaleString()}
                </td>

                {/* Stock */}
                <td className="px-4">
                  <span
                    className={`font-semibold ${
                      product.stock > 0
                        ? "text-[#00B517]"
                        : "text-[#FA3434]"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>

                {/* Date */}
                <td
                  className="
                    px-4
                    text-[#606060]
                    whitespace-nowrap
                  "
                >
                  {new Date(
                    product.createdAt
                  ).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-4">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        navigate(
                          `/admin/products/edit/${product._id}`
                        )
                      }
                      className="
                        w-9
                        h-9
                        rounded-lg
                        border
                        border-[#C7D2FE]
                        text-[#0D6EFD]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#EEF4FF]
                        transition
                      "
                    >
                      <Pencil size={15} />
                    </button>

                    <button
                      onClick={() =>
                        deleteHandler(
                          product._id
                        )
                      }
                      className="
                        w-9
                        h-9
                        rounded-lg
                        border
                        border-[#FECACA]
                        text-[#FA3434]
                        flex
                        items-center
                        justify-center
                        hover:bg-red-50
                        transition
                      "
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  </div>
</div>
{/* =========================
    MOBILE PRODUCT CARDS
========================= */}
<div className="md:hidden space-y-4">

  {products.length === 0 ? (

    <div
      className="
        bg-white
        rounded-2xl
        border
        border-[#E5E7EB]
        py-12
        text-center
        text-[#8B96A5]
      "
    >
      No products found.
    </div>

  ) : (

    currentProducts.map((product) => (

      <div
        key={product._id}
        className="
          bg-white
          border
          border-[#E5E7EB]
          rounded-2xl
          p-4
          shadow-sm
        "
      >

        {/* =========================
            TOP
        ========================= */}

        <div className="flex gap-3">

          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="
              w-20
              h-20
              rounded-xl
              object-cover
              border
              border-[#EFF2F4]
              shrink-0
            "
          />

          <div className="flex-1 min-w-0">

            <h3
              className="
                text-[16px]
                font-semibold
                text-[#1C1C1C]
                line-clamp-2
              "
            >
              {product.name}
            </h3>

            <span
              className="
                inline-flex
                mt-2
                px-3
                py-1
                rounded-full
                bg-[#F5F7FA]
                text-[12px]
                font-medium
                text-[#606060]
              "
            >
              {product.category}
            </span>

            <p
              className="
                mt-2
                text-xs
                text-[#8B96A5]
              "
            >
              ID: {product.id || product._id.slice(-6)}
            </p>

          </div>

        </div>

        {/* =========================
            PRICE / STOCK
        ========================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            mt-4
          "
        >

          <div
            className="
              rounded-xl
              bg-[#F8FAFC]
              p-3
            "
          >
            <p className="text-xs text-[#8B96A5]">
              Price
            </p>

            <h4
              className="
                mt-1
                font-bold
                text-[#1C1C1C]
              "
            >
              $
              {Number(
                product.price
              ).toLocaleString()}
            </h4>

          </div>

          <div
            className="
              rounded-xl
              bg-[#F8FAFC]
              p-3
            "
          >
            <p className="text-xs text-[#8B96A5]">
              Stock
            </p>

            <h4
              className={`mt-1 font-bold ${
                product.stock > 0
                  ? "text-[#00B517]"
                  : "text-[#FA3434]"
              }`}
            >
              {product.stock}
            </h4>

          </div>

        </div>

        {/* =========================
            DATE
        ========================= */}

        <div
          className="
            flex
            justify-between
            items-center
            mt-4
            text-sm
          "
        >
          <span className="text-[#8B96A5]">
            Added
          </span>

          <span className="font-medium text-[#1C1C1C]">
            {new Date(
              product.createdAt
            ).toLocaleDateString()}
          </span>

        </div>

        {/* =========================
            ACTIONS
        ========================= */}

        <div
          className="
            flex
            gap-3
            mt-5
          "
        >

          <button
            onClick={() =>
              navigate(
                `/admin/products/edit/${product._id}`
              )
            }
            className="
              flex-1
              h-11
              rounded-xl
              border
              border-[#C7D2FE]
              text-[#0D6EFD]
              flex
              items-center
              justify-center
              gap-2
              hover:bg-[#EEF4FF]
              transition
            "
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() =>
              deleteHandler(product._id)
            }
            className="
              flex-1
              h-11
              rounded-xl
              border
              border-[#FECACA]
              text-[#FA3434]
              flex
              items-center
              justify-center
              gap-2
              hover:bg-red-50
              transition
            "
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      </div>

    ))

  )}

</div>

{/* =========================
    RESPONSIVE PAGINATION
========================= */}
<div
  className="
    bg-white
    border
    border-[#EFF2F4]
    border-t-0
    rounded-b-2xl
    px-4
    md:px-6
    py-4
  "
>
  {/* =========================
      MOBILE
  ========================= */}
  <div className="flex flex-col gap-4 md:hidden">

    {/* Showing Products */}
    <p
      className="
        text-center
        text-sm
        text-[#606060]
      "
    >
      Showing{" "}
      <span className="font-semibold">
        {filteredProducts.length === 0
          ? 0
          : indexOfFirstProduct + 1}
      </span>

      {" - "}

      <span className="font-semibold">
        {Math.min(
          indexOfLastProduct,
          filteredProducts.length
        )}
      </span>

      {" of "}

      <span className="font-semibold">
        {filteredProducts.length}
      </span>
    </p>

    {/* Pagination Buttons */}
    <div className="flex items-center gap-3">

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.max(prev - 1, 1)
          )
        }
        disabled={currentPage === 1}
        className="
          flex-1
          h-11
          rounded-xl
          border
          border-[#DEE2E7]
          flex
          items-center
          justify-center
          gap-2
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
        Prev
      </button>

      <div
        className="
          min-w-[70px]
          h-11
          rounded-xl
          bg-[#0D6EFD]
          text-white
          flex
          items-center
          justify-center
          font-semibold
        "
      >
        {currentPage}/{Math.max(totalPages, 1)}
      </div>

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
        disabled={
          currentPage === totalPages ||
          totalPages === 0
        }
        className="
          flex-1
          h-11
          rounded-xl
          border
          border-[#DEE2E7]
          flex
          items-center
          justify-center
          gap-2
          disabled:opacity-40
        "
      >
        Next
        <ChevronRight size={18} />
      </button>

    </div>

  </div>

  {/* =========================
      DESKTOP
  ========================= */}
  <div
    className="
      hidden
      md:flex
      items-center
      justify-between
    "
  >
    <p className="text-[14px] text-[#606060]">
      Showing{" "}
      <span className="font-medium">
        {filteredProducts.length === 0
          ? 0
          : indexOfFirstProduct + 1}
      </span>

      {" "}to{" "}

      <span className="font-medium">
        {Math.min(
          indexOfLastProduct,
          filteredProducts.length
        )}
      </span>

      {" "}of{" "}

      <span className="font-medium">
        {filteredProducts.length}
      </span>

      {" "}products
    </p>

    <div className="flex items-center gap-2">

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.max(prev - 1, 1)
          )
        }
        disabled={currentPage === 1}
        className="
          w-10
          h-10
          border
          border-[#DEE2E7]
          rounded-lg
          flex
          items-center
          justify-center
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
      </button>

      <div
        className="
          min-w-[48px]
          h-10
          px-4
          rounded-lg
          bg-[#0D6EFD]
          text-white
          flex
          items-center
          justify-center
          font-medium
        "
      >
        {currentPage}
      </div>

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(
              prev + 1,
              totalPages
            )
          )
        }
        disabled={
          currentPage === totalPages ||
          totalPages === 0
        }
        className="
          w-10
          h-10
          border
          border-[#DEE2E7]
          rounded-lg
          flex
          items-center
          justify-center
          disabled:opacity-40
        "
      >
        <ChevronRight size={18} />
      </button>

    </div>

  </div>

</div>

</div>

</AdminLayout>

  );
}

export default AdminProducts;