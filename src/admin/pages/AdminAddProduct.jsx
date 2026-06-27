import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import {
  ChevronRight,
  ArrowLeft,
  Save,
} from "lucide-react";

import {
  createProduct,
} from "../services/productService";

function AdminAddProduct() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    originalPrice: "",
    category: "",
    brand: "",
    stock: "",
    image: "",
    description: "",
    discount: "",
    color: "",
    condition: "",
    freeShipping: false,
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

const [loading, setLoading] =
  useState(false);

  const submitHandler = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    await createProduct({
      ...formData,
      id: Number(formData.id),
      price: Number(formData.price),
      originalPrice:
        Number(formData.originalPrice) || 0,
      stock:
        Number(formData.stock) || 0,
    });

    alert("Product added successfully!");

    navigate("/admin/products");
  } catch (error) {
    console.error(error);
    alert("Failed to add product");
  } finally {
    setLoading(false);
  }
};

const inputClass =
  "w-full h-[50px] px-4 border border-[#DEE2E7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D6EFD]/20 transition";

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

{/* =========================
    PAGE HEADER
========================= */}
<div
  className="
    flex
    flex-col
    lg:flex-row
    lg:items-start
    lg:justify-between
    gap-4
    mb-8
  "
>
  <div>
    <h1
      className="
        text-2xl
        sm:text-3xl
        font-bold
        text-[#1C1C1C]
      "
    >
      Add Product
    </h1>

    <div
      className="
        flex
        flex-wrap
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

      <Link
        to="/admin/products"
        className="
          text-[#8B96A5]
          hover:text-[#0D6EFD]
        "
      >
        Products
      </Link>

      <ChevronRight
        size={14}
        className="text-[#8B96A5]"
      />

      <span className="text-[#556987]">
        Add Product
      </span>
    </div>
  </div>

  <Link
    to="/admin/products"
    className="
      h-[48px]
      px-5
      border
      border-[#DEE2E7]
      rounded-xl
      flex
      items-center
      justify-center
      gap-2
      text-[14px]
      hover:bg-[#F8FAFC]
      w-full
      sm:w-auto
    "
  >
    <ArrowLeft size={18} />
    Back
  </Link>
</div>

        {/* =========================
            FORM CARD
        ========================= */}
        <div
  className="
    bg-white
    border
    border-[#DEE2E7]
    rounded-2xl
    p-4
    sm:p-6
    lg:p-8
  "
>
          <form
            onSubmit={submitHandler}
            className="space-y-6"
          >
{/* =========================
    BASIC INFO
========================= */}
<div>
  <h2
    className="
      text-[18px]
      font-semibold
      mb-5
    "
  >
    Product Information
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm mb-2">
        Product ID
      </label>

      <input
        type="number"
        name="id"
        required
        value={formData.id}
        onChange={changeHandler}
        className={inputClass}
      />
    </div>

    <div>
      <label className="block text-sm mb-2">
        Product Name
      </label>

      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={changeHandler}
        className={inputClass}
      />
    </div>
  </div>
</div>

{/* =========================
    PRICE SECTION
========================= */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
  <div>
    <label className="block text-sm mb-2">
      Price
    </label>

    <input
      type="number"
      name="price"
      required
      value={formData.price}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>

  <div>
    <label className="block text-sm mb-2">
      Original Price
    </label>

    <input
      type="number"
      name="originalPrice"
      required
      value={formData.originalPrice}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>

  <div>
    <label className="block text-sm mb-2">
      Discount %
    </label>

    <input
      type="text"
      name="discount"
      value={formData.discount}
      onChange={changeHandler}
      placeholder="10%"
      className={inputClass}
    />
  </div>
</div>

{/* =========================
    CATEGORY & INVENTORY
========================= */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
  <div>
    <label className="block text-sm mb-2">
      Category
    </label>

    <input
      type="text"
      name="category"
      required
      value={formData.category}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>

  <div>
    <label className="block text-sm mb-2">
      Brand
    </label>

    <input
      type="text"
      name="brand"
      required
      value={formData.brand}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>

  <div>
    <label className="block text-sm mb-2">
      Stock
    </label>

    <input
      type="number"
      name="stock"
      required
      value={formData.stock}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>
</div>

{/* =========================
    IMAGE URL
========================= */}
<div>
  <label className="block text-sm mb-2">
    Product Image URL
  </label>

  <input
    type="url"
    name="image"
    required
    value={formData.image}
    onChange={changeHandler}
    className={inputClass}
  />
</div>

{/* =========================
    EXTRA DETAILS
========================= */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div>
    <label className="block text-sm mb-2">
      Color
    </label>

    <input
      type="text"
      name="color"
      required
      value={formData.color}
      onChange={changeHandler}
      className={inputClass}
    />
  </div>

  <div>
    <label className="block text-sm mb-2">
      Condition
    </label>

    <input
      type="text"
      name="condition"
      required
      value={formData.condition}
      onChange={changeHandler}
      placeholder="New"
      className={inputClass}
    />
  </div>
</div>

{/* =========================
    DESCRIPTION
========================= */}
<div>
  <label className="block text-sm mb-2">
    Description
  </label>

  <textarea
    rows={6}
    name="description"
    required
    value={formData.description}
    onChange={changeHandler}
    className="
      w-full
      px-4
      py-3
      border
      border-[#DEE2E7]
      rounded-xl
      resize-none
      focus:outline-none
      focus:ring-2
      focus:ring-[#0D6EFD]/20
      transition
    "
  />
</div>

{/* =========================
    FREE SHIPPING
========================= */}
<label
  className="
    flex
    items-center
    gap-3
    text-sm
    font-medium
  "
>
  <input
    type="checkbox"
    name="freeShipping"
    checked={formData.freeShipping}
    onChange={changeHandler}
    className="
      w-4
      h-4
      accent-[#0D6EFD]
    "
  />

  <span>Free Shipping</span>
</label>

{/* =========================
    ACTIONS
========================= */}
<div className="pt-2">
<button
  type="submit"
  disabled={loading}
  className="
    w-full
    sm:w-auto
    min-w-[180px]
    h-[52px]
    px-8
    rounded-xl
    bg-[#0D6EFD]
    text-white
    flex
    items-center
    justify-center
    gap-2
    font-medium
    hover:bg-[#0B63E5]
    transition
    disabled:opacity-60
  "
>
  <Save size={18} />

  {loading
    ? "Saving..."
    : "Save Product"}
</button>
</div>
</form>
</div>
</div>

</AdminLayout>
);
}

export default AdminAddProduct;