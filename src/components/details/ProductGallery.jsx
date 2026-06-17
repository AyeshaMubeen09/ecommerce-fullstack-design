import { useState } from "react";

function ProductGallery({ product }) {
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div
        className="
          border border-[#DEE2E7]
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
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              selectedImage === image
                ? "bg-[#0D6EFD]"
                : "bg-[#DEE2E7]"
            }`}
          />
        ))}
      </div>

      {/* Desktop Thumbnails */}
      <div className="hidden lg:flex gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
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
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;