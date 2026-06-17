import { Link } from "react-router-dom";
import recommendedProducts from "../../data/recommendedProducts";

function RecommendedItems() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="text-[24px] font-semibold text-[#1C1C1C] mb-5">
        Recommended items
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {recommendedProducts.map((product) => (
          <Link
            key={product.id}
            to="/products"
            className="bg-white rounded-md border border-[#DEE2E7] overflow-hidden hover:shadow-md transition block"
          >
         <div className="h-[160px] md:h-[190px] lg:h-[220px] bg-white flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-[15px] md:text-[16px] text-[#1C1C1C]">
                {product.price}
              </h3>

              <p className="text-[13px] md:text-[14px] text-[#606060] mt-2 leading-5">
                {product.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecommendedItems;