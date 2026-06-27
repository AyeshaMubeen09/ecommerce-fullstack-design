import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  DollarSign,
  FileText,
  Image as ImageIcon,
  Package,
  Save,
} from "lucide-react";

import AdminLayout from "../layouts/AdminLayout";

import {
  getProductById,
  updateProduct,
} from "../services/productService";

import {
  getProductImage,
} from "../../data/productImages";

/* =========================
    REUSABLE ACCORDION
========================= */
function AccordionSection({
  title,
  icon: Icon,
  open,
  setOpen,
  children,
}) {
  return (
    <div
      className="
        bg-white
        border
        border-[#DEE2E7]
        rounded-2xl
        shadow-sm
        overflow-hidden
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full
          h-14
          px-6
          flex
          items-center
          justify-between
          hover:bg-[#F8FAFC]
          transition
        "
      >
        <div className="flex items-center gap-3">
          <Icon
            size={18}
            className="text-[#0D6EFD]"
          />

          <span
            className="
              font-semibold
              text-[#1C1C1C]
            "
          >
            {title}
          </span>
        </div>

        <ChevronDown
          size={18}
          className={`
            transition-transform
            duration-300
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {open && (
        <div
          className="
            border-t
            border-[#EFF2F4]
            p-6
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}

function AdminEditProduct() {
  const navigate = useNavigate();

  const { id } = useParams();

  /* =========================
      PAGE STATE
  ========================= */

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  /* =========================
      ACCORDION STATE
  ========================= */

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(true);

  const [
    pricingOpen,
    setPricingOpen,
  ] = useState(true);

  const [
    descriptionOpen,
    setDescriptionOpen,
  ] = useState(true);

  /* =========================
      FORM STATE
  ========================= */

  const [formData, setFormData] =
    useState({
      name: "",
      price: "",
      originalPrice: "",
      discount: "",
      category: "",
      brand: "",
      color: "",
      stock: "",
      image: "",
      description: "",
      freeShipping: false,
    });

  /* =========================
      COMMON INPUT STYLES
  ========================= */

  const inputClass =
    `
      w-full
      h-[48px]
      px-4
      border
      border-[#DEE2E7]
      rounded-xl
      outline-none
      transition
      focus:ring-2
      focus:ring-[#0D6EFD]/20
      focus:border-[#0D6EFD]
    `;

  const textareaClass =
    `
      w-full
      min-h-[220px]
      px-4
      py-3
      border
      border-[#DEE2E7]
      rounded-xl
      resize-none
      outline-none
      transition
      focus:ring-2
      focus:ring-[#0D6EFD]/20
      focus:border-[#0D6EFD]
    `;

  /* =========================
      LOAD PRODUCT
  ========================= */

  useEffect(() => {
    const fetchProduct =
      async () => {
        try {
          const product =
            await getProductById(id);

          setFormData({
            name:
              product.name || "",

            price:
              product.price || "",

            originalPrice:
              product.originalPrice ||
              "",

            discount:
              product.discount || "",

            category:
              product.category || "",

            brand:
              product.brand || "",

            color:
              product.color || "",

            stock:
              product.stock || "",

            image:
              product.image || "",

            description:
              product.description ||
              "",

            freeShipping:
              product.freeShipping ||
              false,
          });
        } catch (error) {
          console.error(error);

          alert(
            "Failed to load product."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchProduct();
  }, [id]);

  /* =========================
      INPUT CHANGE HANDLER
  ========================= */

  const changeHandler = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  /* =========================
      UPDATE PRODUCT
  ========================= */

  const submitHandler =
    async (e) => {
      e.preventDefault();

      try {
        setSaving(true);

        await updateProduct(id, {
          ...formData,

          price:
            Number(
              formData.price
            ) || 0,

          originalPrice:
            Number(
              formData.originalPrice
            ) || 0,

          stock:
            Number(
              formData.stock
            ) || 0,
        });

        alert(
          "Product updated successfully!"
        );

        navigate(
          "/admin/products"
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to update product."
        );
      } finally {
        setSaving(false);
      }
    };

  /* =========================
      LOADING SCREEN
  ========================= */

  if (loading) {
    return (
      <AdminLayout>
        <div
          className="
            flex
            items-center
            justify-center
            h-[70vh]
            text-lg
            font-medium
            text-[#556987]
          "
        >
          Loading product...
        </div>
      </AdminLayout>
    );
  }

return (

        <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">

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
            gap-5
            mb-8
          "
        >
          <div>

            <h1
              className="
                text-3xl
                font-bold
                text-[#1C1C1C]
              "
            >
              Edit Product
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
                Edit Product
              </span>

            </div>

          </div>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/products")
            }
            className="
              w-full
              sm:w-auto
              h-12
              px-6
              border
              border-[#DEE2E7]
              rounded-xl
              flex
              items-center
              justify-center
              gap-2
              hover:bg-[#F8FAFC]
              transition
            "
          >
            <ArrowLeft size={18} />
            Back
          </button>

        </div>

        <form onSubmit={submitHandler}>

          <div
            className="
              grid
              xl:grid-cols-[340px_1fr]
              gap-6
              items-start
            "
          >

            {/* =========================
                LEFT SIDEBAR
            ========================= */}
            <aside
              className="
                xl:sticky
                xl:top-6
                space-y-6
              "
            >

              {/* IMAGE CARD */}
              <div
                className="
                  bg-white
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  shadow-sm
                  overflow-hidden
                "
              >

                <div
                  className="
                    h-14
                    px-6
                    border-b
                    border-[#EFF2F4]
                    flex
                    items-center
                    gap-3
                  "
                >
                  <ImageIcon
                    size={18}
                    className="text-[#0D6EFD]"
                  />

                  <h2 className="font-semibold">
                    Product Image
                  </h2>

                </div>

                <div className="p-6">

                  <div
                    className="
                      w-full
                      h-[260px]
                      rounded-2xl
                      border
                      border-[#EFF2F4]
                      overflow-hidden
                      bg-[#FAFAFA]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={getProductImage(
                        formData.image
                      )}
                      alt={formData.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>

                  <p
                    className="
                      text-xs
                      text-[#8B96A5]
                      mt-4
                      mb-2
                    "
                  >
                    Image Key / URL
                  </p>

                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={changeHandler}
                    className={inputClass}
                  />

                  <p
                    className="
                      mt-4
                      text-xs
                      text-[#8B96A5]
                      leading-5
                    "
                  >
                    Supported image keys from
                    your product image library
                    will preview instantly.
                  </p>

                </div>

              </div>

            </aside>

            {/* =========================
                RIGHT CONTENT
            ========================= */}
            <div className="space-y-6">

              {/* =========================
                  PRODUCT DETAILS
              ========================= */}

              <AccordionSection
                title="Product Details"
                icon={Package}
                open={detailsOpen}
                setOpen={setDetailsOpen}
              >

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-5
                  "
                >

                  <div>

                    <label
                      className="
                        block
                        text-sm
                        mb-2
                        font-medium
                      "
                    >
                      Product Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      className="
                        block
                        text-sm
                        mb-2
                        font-medium
                      "
                    >
                      Category
                    </label>

                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={changeHandler}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      className="
                        block
                        text-sm
                        mb-2
                        font-medium
                      "
                    >
                      Brand
                    </label>

                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={changeHandler}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      className="
                        block
                        text-sm
                        mb-2
                        font-medium
                      "
                    >
                      Color
                    </label>

                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={changeHandler}
                      className={inputClass}
                    />

                  </div>

                </div>

              </AccordionSection>

                            {/* =========================
                  PRICING & INVENTORY
              ========================= */}

              <AccordionSection
                title="Pricing & Inventory"
                icon={DollarSign}
                open={pricingOpen}
                setOpen={setPricingOpen}
              >

                <div className="space-y-8">

                  {/* =========================
                      PRICING
                  ========================= */}
                  <div>

                    <h3
                      className="
                        text-[15px]
                        font-semibold
                        text-[#1C1C1C]
                        mb-5
                      "
                    >
                      Pricing
                    </h3>

                    <div
                      className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-5
                      "
                    >

                      {/* Selling Price */}
                      <div>

                        <label
                          className="
                            block
                            text-sm
                            font-medium
                            mb-2
                          "
                        >
                          Selling Price
                        </label>

                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={changeHandler}
                          placeholder="0.00"
                          className={inputClass}
                        />

                      </div>

                      {/* Original Price */}
                      <div>

                        <label
                          className="
                            block
                            text-sm
                            font-medium
                            mb-2
                          "
                        >
                          Original Price
                        </label>

                        <input
                          type="number"
                          name="originalPrice"
                          value={formData.originalPrice}
                          onChange={changeHandler}
                          placeholder="0.00"
                          className={inputClass}
                        />

                      </div>

                      {/* Discount */}
                      <div>

                        <label
                          className="
                            block
                            text-sm
                            font-medium
                            mb-2
                          "
                        >
                          Discount
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

                  </div>

                  <div className="border-t border-[#EFF2F4]" />

                  {/* =========================
                      INVENTORY
                  ========================= */}
                  <div>

                    <h3
                      className="
                        text-[15px]
                        font-semibold
                        text-[#1C1C1C]
                        mb-5
                      "
                    >
                      Inventory
                    </h3>

                    <div
                      className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-6
                        items-end
                      "
                    >

                      {/* Stock */}
                      <div>

                        <label
                          className="
                            block
                            text-sm
                            font-medium
                            mb-2
                          "
                        >
                          Stock Quantity
                        </label>

                        <input
                          type="number"
                          name="stock"
                          value={formData.stock}
                          onChange={changeHandler}
                          placeholder="0"
                          className={inputClass}
                        />

                      </div>

                      {/* Shipping */}
                      <div>

                        <label
                          className="
                            block
                            text-sm
                            font-medium
                            mb-3
                          "
                        >
                          Shipping
                        </label>

                        <label
                          className="
                            flex
                            items-center
                            gap-3
                            h-[48px]
                            px-4
                            border
                            border-[#DEE2E7]
                            rounded-xl
                            cursor-pointer
                            hover:bg-[#F8FAFC]
                            transition
                          "
                        >

                          <input
                            type="checkbox"
                            name="freeShipping"
                            checked={
                              formData.freeShipping
                            }
                            onChange={
                              changeHandler
                            }
                            className="
                              w-4
                              h-4
                              accent-[#0D6EFD]
                            "
                          />

                          <div>

                            <p
                              className="
                                text-sm
                                font-medium
                              "
                            >
                              Free Shipping
                            </p>

                            <p
                              className="
                                text-xs
                                text-[#8B96A5]
                              "
                            >
                              Eligible for free delivery
                            </p>

                          </div>

                        </label>

                      </div>

                    </div>

                  </div>

                </div>

              </AccordionSection>

                            {/* =========================
                  DESCRIPTION
              ========================= */}

              <AccordionSection
                title="Description"
                icon={FileText}
                open={descriptionOpen}
                setOpen={setDescriptionOpen}
              >
                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-medium
                      mb-3
                    "
                  >
                    Product Description
                  </label>

                  <textarea
                    rows={10}
                    name="description"
                    value={formData.description}
                    onChange={changeHandler}
                    placeholder="Write a detailed product description..."
                    className={textareaClass}
                  />

                  <p
                    className="
                      mt-3
                      text-xs
                      text-[#8B96A5]
                    "
                  >
                    Include important product features,
                    specifications, warranty information,
                    materials, or anything customers should know.
                  </p>

                </div>

              </AccordionSection>

              {/* =========================
                  ACTION BUTTONS
              ========================= */}

              <div
                className="
                  bg-white
                  border
                  border-[#DEE2E7]
                  rounded-2xl
                  shadow-sm
                  p-5
                "
              >

                <div
                  className="
                    flex
                    flex-col-reverse
                    sm:flex-row
                    justify-end
                    gap-4
                  "
                >

                  {/* Cancel */}

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/admin/products")
                    }
                    className="
                      w-full
                      sm:w-auto
                      h-12
                      px-8
                      border
                      border-[#DEE2E7]
                      rounded-xl
                      font-medium
                      hover:bg-[#F8FAFC]
                      transition
                    "
                  >
                    Cancel
                  </button>

                  {/* Save */}

                  <button
                    type="submit"
                    disabled={saving}
                    className="
                      w-full
                      sm:w-auto
                      min-w-[190px]
                      h-12
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
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                      transition
                    "
                  >

                    <Save size={18} />

                    {saving
                      ? "Saving..."
                      : "Save Changes"}

                  </button>

                </div>

              </div>

            </div>

          </div>

        </form>

      </div>

    </AdminLayout>
  );
}

export default AdminEditProduct;