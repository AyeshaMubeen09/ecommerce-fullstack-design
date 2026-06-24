import { useState } from "react";

/**
 * ==================================================
 * ProductTabs
 * ==================================================
 * Product Details Tabs Section
 *
 * Desktop:
 * - Description
 * - Reviews
 * - Shipping
 * - Seller Information
 *
 * Mobile:
 * - Simplified stacked information cards
 *
 * Dynamic Data:
 * - Description
 * - Specifications
 * - Features
 * - Reviews Summary
 * - Seller Information
 *
 * Future Backend:
 * GET /api/products/:id/reviews
 * GET /api/sellers/:id
 * ==================================================
 */

function ProductTabs({ product }) {
  // =========================
  // Active Tab State
  // =========================
  const [activeTab, setActiveTab] =
    useState("description");

  // =========================
  // Tab Navigation
  // =========================
  const tabs = [
    {
      id: "description",
      label: "Description",
    },
    {
      id: "reviews",
      label: "Reviews",
    },
    {
      id: "shipping",
      label: "Shipping",
    },
    {
      id: "seller",
      label: "About seller",
    },
  ];

  // =========================
  // Product Specifications
  // =========================
  const specifications = [
    {
      label: "Product Name",
      value: product?.name || "N/A",
    },
    {
      label: "Brand",
      value: product?.brand || "N/A",
    },
    {
      label: "Category",
      value: product?.category || "N/A",
    },
    {
      label: "Price",
      value: `$${product?.price || 0}`,
    },
    {
      label: "Stock",
      value: product?.stock || 0,
    },
  ];

  // =========================
  // Seller Information
  // =========================
  const sellerInfo = [
    {
      label: "Brand",
      value: product?.brand || "Unknown",
    },
    {
      label: "Category",
      value: product?.category || "N/A",
    },
    {
      label: "Product ID",
      value: product?._id || "N/A",
    },
  ];

  return (
    <>
      {/* =========================================
          DESKTOP VERSION
      ========================================= */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-[#DEE2E7]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`px-5 py-4 text-[15px] font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? "border-[#0D6EFD] text-[#0D6EFD]"
                  : "border-transparent text-[#8B96A5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* =========================
              DESCRIPTION
          ========================= */}
          {activeTab ===
            "description" && (
            <>
              <p className="text-[#505050] leading-7">
                {product?.description ||
                  "No description available for this product."}
              </p>

              {/* Specifications Table */}
              <div className="mt-6 w-[75%] border border-[#DEE2E7] rounded-md overflow-hidden">
                {specifications.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[170px_1fr] text-[14px]"
                    >
                      <div
                        className={`
                          bg-[#EFF2F4]
                          px-4
                          py-2.5
                          border-r
                          border-[#DEE2E7]
                          ${
                            index !==
                            specifications.length -
                              1
                              ? "border-b"
                              : ""
                          }
                        `}
                      >
                        {item.label}
                      </div>

                      <div
                        className={`
                          px-4
                          py-2.5
                          ${
                            index !==
                            specifications.length -
                              1
                              ? "border-b border-[#DEE2E7]"
                              : ""
                          }
                        `}
                      >
                        {item.value}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Features */}
              {product?.features
                ?.length > 0 && (
                <div className="mt-6 space-y-2 text-[14px] text-[#505050]">
                  {product.features.map(
                    (
                      feature,
                      index
                    ) => (
                      <p
                        key={
                          index
                        }
                      >
                        ✓ {feature}
                      </p>
                    )
                  )}
                </div>
              )}
            </>
          )}

          {/* =========================
              REVIEWS
          ========================= */}
          {activeTab ===
            "reviews" && (
            <div className="text-[#505050] space-y-2">
              <p>
                Rating:{" "}
                {product?.rating ||
                  0}
                / 5
              </p>

              <p>
                Total Orders:{" "}
                {product?.orders ||
                  0}
              </p>

              <p>
                Customer reviews
                functionality will be
                available in future
                updates.
              </p>
            </div>
          )}

          {/* =========================
              SHIPPING
          ========================= */}
          {activeTab ===
            "shipping" && (
            <div className="text-[#505050] space-y-2">
              <p>
                ✓ Worldwide
                shipping available
              </p>

              <p>
                ✓ Estimated
                delivery: 3–10
                business days
              </p>

              <p>
                ✓ Tracking
                provided after
                dispatch
              </p>

              <p>
                ✓ Buyer protection
                included
              </p>
            </div>
          )}

          {/* =========================
              SELLER
          ========================= */}
          {activeTab ===
            "seller" && (
            <div className="text-[#505050] space-y-2">
              {sellerInfo.map(
                (
                  item
                ) => (
                  <p
                    key={
                      item.label
                    }
                  >
                    <span className="font-medium">
                      {
                        item.label
                      }
                      :
                    </span>{" "}
                    {item.value}
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* =========================================
          MOBILE VERSION
      ========================================= */}
      <div className="lg:hidden space-y-4">
        {/* Description */}
        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Description
          </h3>

          <p className="text-[14px] text-[#505050] leading-6">
            {product?.description ||
              "No description available for this product."}
          </p>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Specifications
          </h3>

          <div className="space-y-3 text-[14px]">
            {specifications
              .filter(
                (item) =>
                  item.label !==
                  "Product Name"
              )
              .map(
                (
                  item
                ) => (
                  <div
                    key={
                      item.label
                    }
                    className="flex justify-between"
                  >
                    <span className="text-[#8B96A5]">
                      {
                        item.label
                      }
                    </span>

                    <span>
                      {
                        item.value
                      }
                    </span>
                  </div>
                )
              )}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
          <h3 className="font-semibold text-[16px] mb-3">
            Product Info
          </h3>

          <div className="space-y-2 text-[14px] text-[#505050]">
            <p>
              ✓ Rating:{" "}
              {product?.rating ||
                0}
              / 5
            </p>

            <p>
              ✓ Orders:{" "}
              {product?.orders ||
                0}
            </p>

            <p>
              ✓ Brand:{" "}
              {product?.brand ||
                "N/A"}
            </p>

            <p>
              ✓ Available
              Stock:{" "}
              {product?.stock ||
                0}
            </p>
          </div>
        </div>

        {/* Features */}
        {product?.features
          ?.length > 0 && (
          <div className="bg-white rounded-xl border border-[#DEE2E7] p-4">
            <h3 className="font-semibold text-[16px] mb-3">
              Features
            </h3>

            <div className="space-y-2 text-[14px] text-[#505050]">
              {product.features.map(
                (
                  feature,
                  index
                ) => (
                  <p
                    key={
                      index
                    }
                  >
                    ✓ {feature}
                  </p>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductTabs;