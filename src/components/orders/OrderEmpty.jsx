import { Link } from "react-router-dom";
import { Package } from "lucide-react";

function OrderEmpty() {
  return (
    <div
      className="
        bg-white
        border
        border-[#DEE2E7]
        rounded-2xl
        py-16
        px-6
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          w-24
          h-24
          rounded-full
          bg-[#F3F7FF]
          flex
          items-center
          justify-center
          mx-auto
        "
      >
        <Package
          size={42}
          className="text-[#0D6EFD]"
        />
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-2xl font-bold">
        No Orders Yet
      </h2>

      <p className="mt-3 text-[#8B96A5] max-w-md mx-auto">
        Looks like you haven't placed any
        orders yet. Browse our products and
        place your first order.
      </p>

      {/* Button */}

      <Link
        to="/products"
        className="
          inline-flex
          mt-8
          h-[50px]
          px-8
          rounded-xl
          bg-[#0D6EFD]
          text-white
          font-medium
          items-center
          justify-center
          hover:bg-[#0B63E5]
          transition
        "
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderEmpty;