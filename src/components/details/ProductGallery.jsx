import { useState, useEffect, useMemo } from "react";
import productImages from "../../data/productImages";

/**
 * ==================================================
 * ProductGallery
 * ==================================================
 * Displays product image gallery
 *
 * Current State:
 * - Uses single product image
 * - Generates temporary thumbnail gallery
 * - Supports image selection
 * - Responsive mobile/desktop layouts
 *
 * Future Backend Integration:
 * product.images = [
 *   image1,
 *   image2,
 *   image3,
 * ]
 * ==================================================
 */

function ProductGallery({ product }) {
  // =========================
  // Build Gallery Images
  // =========================
  const images = useMemo(() => {
    const imageSrc =
      productImages[product?.image] ||
      product?.image ||
      null;

    if (!imageSrc) return [];

    // TEMP:
    // Duplicate image until backend provides
    // real gallery images
    return Array(6).fill(imageSrc);
  }, [product]);

  // =========================
  // State
  // =========================
  const [selectedImage, setSelectedImage] =
    useState(images[0] || null);

  // =========================
  // Reset Selected Image
  // When Product Changes
  // =========================
  useEffect(() => {
    setSelectedImage(images[0] || null);
  }, [images]);

  // =========================
  // Empty State
  // =========================
  if (!product) return null;

  return (
    <div>
      {/* =========================================
          MAIN IMAGE
      ========================================= */}
      <div
        className="
          border
          border-[#DEE2E7]
          rounded-md
          bg-white
          h-[280px]
          md:h-[320px]
          lg:h-[380px]
          flex
          items-center
          justify-center
          p-4
        "
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={product.name}
            className="
              max-h-[220px]
              md:max-h-[260px]
              lg:max-h-[320px]
              object-contain
            "
          />
        ) : (
          <span className="text-[#8B96A5] text-sm">
            No image available
          </span>
        )}
      </div>

      {/* =========================================
          MOBILE INDICATORS
      ========================================= */}
      {images.length > 0 && (
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedImage(image)
              }
              aria-label={`Image ${index + 1}`}
              className={`
                w-2.5
                h-2.5
                rounded-full
                transition
                ${
                  selectedImage === image
                    ? "bg-[#0D6EFD]"
                    : "bg-[#DEE2E7]"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* =========================================
          DESKTOP THUMBNAILS
      ========================================= */}
      {images.length > 0 && (
        <div className="hidden lg:flex gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedImage(image)
              }
              aria-label={`Thumbnail ${
                index + 1
              }`}
              className={`
                w-[56px]
                h-[56px]
                border
                rounded-md
                flex
                items-center
                justify-center
                overflow-hidden
                transition
                ${
                  selectedImage === image
                    ? "border-[#0D6EFD]"
                    : "border-[#DEE2E7]"
                }
              `}
            >
              <img
                src={image}
                alt={`${product.name} ${
                  index + 1
                }`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;