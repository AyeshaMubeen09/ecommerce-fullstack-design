import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product, view }) {
  // GRID VIEW
  if (view === "grid") {
    return (
      <Link
        to={`/products/${product.id}`}
        className="block"
      >
        <div className="bg-white border border-[#DEE2E7] rounded-md overflow-hidden hover:shadow-md transition">

          {/* Product Image */}
          <div className="h-[240px] flex items-center justify-center p-4 border-b border-[#EFF2F4]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[190px] object-contain"
            />
          </div>

          {/* Product Content */}
          <div className="p-4">

            <div className="flex justify-between items-start">

              <div>

                <div className="flex items-center gap-2">
                  <span className="text-[20px] font-semibold text-[#1C1C1C]">
                    ${product.price}
                  </span>

                  <span className="text-[#8B96A5] text-[14px] line-through">
                    $1128.00
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#FF9017] text-[14px]">
                    ★★★★☆
                  </span>

                  <span className="text-[#FF9017] text-[14px]">
                    7.5
                  </span>
                </div>

              </div>

              {/* Heart */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="w-[40px] h-[40px] border border-[#DEE2E7] rounded-md flex items-center justify-center shrink-0"
              >
                <Heart
                  size={18}
                  className="text-[#0D6EFD]"
                />
              </button>

            </div>

            {/* Description */}
            <p className="mt-3 text-[#606060] text-[16px] leading-5 line-clamp-2">
              {product.name}
            </p>

          </div>

        </div>
      </Link>
    );
  }

  // LIST VIEW
 // LIST VIEW

const listViewData = {
  1: {
    title: "Apple iPhone 12 Pro Max 128GB - Red",
    price: 999,
    oldPrice: 1128,
    rating: 4.8,
    orders: 154,
    description:
      "6.7-inch Super Retina XDR display, A14 Bionic chip, dual-camera system and all-day battery life.",
  },

  2: {
    title: "Xiaomi Mi 9 Lite Smartphone - Black",
    price: 349,
    oldPrice: 399,
    rating: 4.5,
    orders: 98,
    description:
      "AMOLED display with Snapdragon processor, fast charging support and premium glass design.",
  },

  3: {
    title: "Xiaomi Pad 5 Tablet 128GB",
    price: 499,
    oldPrice: 549,
    rating: 4.7,
    orders: 87,
    description:
      "11-inch WQHD+ display with Dolby Vision, Snapdragon chipset and long-lasting battery.",
  },

  4: {
    title: "MacBook Pro 16-inch M2 Pro",
    price: 1899,
    oldPrice: 2099,
    rating: 4.9,
    orders: 65,
    description:
      "Professional laptop featuring Apple's M2 Pro chip, Liquid Retina display and all-day performance.",
  },

  5: {
    title: "Apple Watch Series 8 GPS",
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    orders: 132,
    description:
      "Advanced fitness tracking, health monitoring, GPS connectivity and premium aluminum design.",
  },

  6: {
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 379,
    oldPrice: 429,
    rating: 4.8,
    orders: 211,
    description:
      "Industry-leading noise cancellation with crystal-clear audio and up to 30 hours of battery life.",
  },
};

const item =
  listViewData[product.id] || {
    title: product.name,
    price: product.price,
    oldPrice: product.price + 100,
    rating: 4.5,
    orders: 154,
    description:
      "Premium quality product with excellent features and reliable performance.",
  };

return (
  <Link
    to={`/products/${product.id}`}
    className="block"
  >
    <div
      className="
        bg-white
        border
        border-[#DEE2E7]
        rounded-md
        p-3
        md:p-4
        flex
        gap-3
        md:gap-5
        hover:shadow-md
        transition
      "
    >

      {/* Image */}
      <div
        className="
          w-[90px]
          h-[90px]
          md:w-[180px]
          md:h-[180px]
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <img
          src={product.listImage || product.image}
          alt={item.title}
          className="
            max-h-[85px]
            md:max-h-[180px]
            object-contain
          "
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">

        <h3
          className="
            text-[16px]
            md:text-[18px]
            font-medium
            text-[#1C1C1C]
            leading-5
            line-clamp-2
          "
        >
          {item.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="
              text-[20px]
              md:text-[22px]
              font-semibold
              text-[#1C1C1C]
            "
          >
            ${item.price}
          </span>

          <span
            className="
              hidden md:inline
              text-[#8B96A5]
              line-through
            "
          >
            ${item.oldPrice}
          </span>
        </div>

        {/* Rating */}
        <div
          className="
            flex
            items-center
            gap-2
            mt-2
            text-[13px]
            md:text-[14px]
          "
        >
          <span className="text-[#FF9017]">
            ★★★★☆
          </span>

          <span className="text-[#FF9017]">
            {item.rating}
          </span>

          <span className="text-[#DEE2E7]">
            •
          </span>

          <span className="text-[#8B96A5]">
            {item.orders} orders
          </span>
        </div>

        {/* Shipping */}
        <div
          className="
            text-[#00B517]
            text-[15px]
            font-medium
            mt-1
          "
        >
          Free Shipping
        </div>

        {/* Desktop Description */}
        <p
          className="
            hidden md:block
            mt-3
            text-[#505050]
            text-[15px]
            leading-6
            max-w-[650px]
          "
        >
          {item.description}
        </p>

        {/* Desktop View Details */}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="
            hidden md:block
            mt-3
            text-[#0D6EFD]
            font-medium
          "
        >
          View details
        </button>

      </div>

      {/* Desktop Wishlist */}
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="
          hidden md:flex
          w-[40px]
          h-[40px]
          border
          border-[#DEE2E7]
          rounded-md
          items-center
          justify-center
          shrink-0
        "
      >
        <Heart
          size={18}
          className="text-[#0D6EFD]"
        />
      </button>

    </div>
  </Link>
);
}

export default ProductCard;