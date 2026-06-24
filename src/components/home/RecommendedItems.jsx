import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProducts } from "../../api/productApi";
import productImages from "../../data/productImages";

function RecommendedItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendedProducts();
  }, []);

  const fetchRecommendedProducts = async () => {
    try {
      const data = await getProducts();

      const recommendedProducts = data
        .filter(
          (product) =>
            product.category?.toLowerCase() ===
            "recommendeditems"
        )
        .slice(0, 10);

      setProducts(recommendedProducts);
    } catch (error) {
      console.error(
        "Recommended Products Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="text-[24px] font-semibold text-[#1C1C1C] mb-5">
        Recommended items
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/products/${product._id}`}
            className="
              bg-white
              border
              border-[#DEE2E7]
              rounded-md
              overflow-hidden
              hover:shadow-md
              transition
            "
          >
            <div className="h-[160px] md:h-[190px] lg:h-[220px] flex items-center justify-center p-4 bg-white">
              <img
                src={
                  productImages[product.image] ||
                  product.image
                }
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-3 md:p-4">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1C1C1C]">
                ${product.price}
              </h3>

              <p className="mt-2 text-[13px] md:text-[14px] text-[#606060] leading-5 line-clamp-2">
                {product.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecommendedItems;