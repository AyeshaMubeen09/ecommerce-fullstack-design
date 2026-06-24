import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "../../api/productApi";

// Banner Images
import homeBanner from "../../assets/home/home-banner.jpg";
import electronicsBanner from "../../assets/electronics/electronics-banner.jpg";

// Product Images
import productImages from "../../data/productImages";

function CategorySection({ title, categoryType }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category =
    categoryType === "electronics"
      ? "Electronics"
      : "Home";

  const bannerImage =
    categoryType === "electronics"
      ? electronicsBanner
      : homeBanner;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        const filteredProducts = data
          .filter(
            (product) => product.category === category
          )
          .slice(0, 8);

        setProducts(filteredProducts);
      } catch (error) {
        console.error(
          "Category Section Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="h-[257px] bg-white border border-[#DEE2E7] rounded-md animate-pulse" />
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      {/* Mobile */}
      <div className="lg:hidden bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        {/* Banner */}
        <div
          className="relative h-[120px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 p-5">
            <h2 className="text-[18px] font-semibold text-[#1C1C1C] max-w-[180px]">
              {title}
            </h2>
          </div>
        </div>

        {/* Products */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="min-w-[140px] h-[160px] border-r border-[#DEE2E7] p-3 flex-shrink-0 hover:bg-gray-50 transition"
            >
              <div className="flex justify-center">
                <img
                  src={
                    productImages[product.image] ||
                    product.image
                  }
                  alt={product.name}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>

              <h3 className="mt-2 text-[14px] text-[#1C1C1C] line-clamp-1">
                {product.name}
              </h3>

              <p className="text-[13px] text-[#8B96A5] mt-1">
                From USD {product.price}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="p-4 border-t border-[#DEE2E7]">
          <Link
            to={`/products?category=${category}`}
            className="text-[#0D6EFD] text-[18px] font-medium"
          >
            Source now →
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* Banner */}
          <div
            className="relative min-h-[257px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          >
            <div className="absolute inset-0 bg-white/10" />

            <div className="relative z-10 p-6">
              <h2 className="text-[24px] font-semibold text-[#1C1C1C] max-w-[180px] leading-tight">
                {title}
              </h2>

              <Link
                to={`/products?category=${category}`}
                className="inline-block mt-5 bg-white border border-[#DEE2E7] rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-50 transition"
              >
                Source now
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-4">
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="relative border-l border-b border-[#DEE2E7] p-4 h-[127px] hover:bg-gray-50 transition"
              >
                <h3 className="text-[15px] text-[#1C1C1C] line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-[13px] text-[#8B96A5] mt-1">
                  From USD {product.price}
                </p>

                <img
                  src={
                    productImages[product.image] ||
                    product.image
                  }
                  alt={product.name}
                  className="absolute bottom-3 right-3 w-[72px] h-[72px] object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;