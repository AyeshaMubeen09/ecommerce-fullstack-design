import { Link } from "react-router-dom";
import recommendedProducts from "../../data/recommendedProducts";

function RelatedProducts() {
  return (
    <section className="bg-white border border-[#DEE2E7] rounded-md p-4 md:p-6">
      <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
        You may like
      </h2>

      {/* Mobile */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {recommendedProducts.map((product) => (
          <Link
            key={product.id}
            to="/products"
            className="min-w-[140px] flex-shrink-0"
          >
            <div className="border border-[#DEE2E7] rounded-md overflow-hidden bg-white">
              <div className="h-[120px] flex items-center justify-center p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="p-3">
                <p className="font-semibold text-[14px] text-[#1C1C1C]">
                  {product.price}
                </p>

                <p className="text-[13px] text-[#606060] mt-1 line-clamp-2">
                  {product.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {recommendedProducts.slice(0, 5).map((product) => (
          <Link
            key={product.id}
            to="/products"
            className="border border-[#DEE2E7] rounded-md overflow-hidden hover:shadow-md transition"
          >
            <div className="h-[160px] flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>

            <div className="p-3">
              <p className="font-semibold text-[15px] text-[#1C1C1C]">
                {product.price}
              </p>

              <p className="text-[14px] text-[#606060] mt-1">
                {product.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;