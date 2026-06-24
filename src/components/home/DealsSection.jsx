import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProducts } from "../../api/productApi";
import productImages from "../../data/productImages";

function DealsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        const dealsProducts = data
          .filter(
            (product) => product.category === "Deals"
          )
          .slice(0, 5);

        setProducts(dealsProducts);
      } catch (error) {
        console.error(
          "Deals Section Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(
      targetDate.getDate() + 4
    );

    const timer = setInterval(() => {
      const now = new Date();
      const difference =
        targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference /
            (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (difference % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) return null;

  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 mt-6">
      <div className="bg-white border-y md:border border-[#DEE2E7] md:rounded-md overflow-hidden">
        <div className="lg:grid lg:grid-cols-[280px_1fr]">

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-[#DEE2E7]">
            <div>
              <h2 className="text-[18px] font-semibold text-[#1C1C1C] leading-none">
                Deals and offers
              </h2>

              <p className="text-[#8B96A5] text-[14px] mt-1">
                Electronic equipments
              </p>
            </div>

            <div className="flex gap-1">
              {[
                [
                  String(
                    timeLeft.hours
                  ).padStart(2, "0"),
                  "Hour",
                ],
                [
                  String(
                    timeLeft.minutes
                  ).padStart(2, "0"),
                  "Min",
                ],
                [
                  String(
                    timeLeft.seconds
                  ).padStart(2, "0"),
                  "Sec",
                ],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="w-[40px] h-[44px] bg-[#EFF2F4] flex flex-col items-center justify-center"
                >
                  <span className="text-[18px] font-semibold text-[#8B96A5] leading-none">
                    {value}
                  </span>

                  <span className="text-[11px] text-[#8B96A5]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Left Side */}
          <div className="hidden lg:block p-5 border-r border-[#DEE2E7]">
            <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
              Deals and offers
            </h2>

            <p className="text-[#8B96A5] text-[15px] mt-1">
              Hygiene equipments
            </p>

            <div className="flex gap-1 mt-5">
              {[
                [
                  String(
                    timeLeft.days
                  ).padStart(2, "0"),
                  "Days",
                ],
                [
                  String(
                    timeLeft.hours
                  ).padStart(2, "0"),
                  "Hour",
                ],
                [
                  String(
                    timeLeft.minutes
                  ).padStart(2, "0"),
                  "Min",
                ],
                [
                  String(
                    timeLeft.seconds
                  ).padStart(2, "0"),
                  "Sec",
                ],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="w-[45px] h-[50px] rounded bg-[#606060] text-white flex flex-col items-center justify-center"
                >
                  <span className="font-bold text-sm">
                    {value}
                  </span>

                  <span className="text-[11px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Products */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max">
              {products.map((product) => (
                <Link
                  key={product._id}
                  to={`/products/${product._id}`}
                  className="w-[148px] shrink-0 border-r border-[#DEE2E7] flex flex-col items-center py-5 px-3 hover:bg-gray-50 transition"
                >
                  <div className="h-[95px] flex items-center justify-center">
                    <img
                      src={
                        productImages[
                          product.image
                        ] || product.image
                      }
                      alt={product.name}
                      className="max-h-[75px] object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-[14px] text-center text-[#1C1C1C] line-clamp-2">
                    {product.name}
                  </h3>

                  <span className="mt-3 px-4 py-1 rounded-full bg-[#FFE3E3] text-[#EB001B] text-[13px] font-medium">
                    {product.discount ||
                      "-25%"}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Products */}
          <div className="hidden lg:grid lg:grid-cols-5">
            {products.map(
              (product, index) => (
                <Link
                  key={product._id}
                  to={`/products/${product._id}`}
                  className={`flex flex-col items-center justify-center py-5 px-4 hover:bg-gray-50 transition ${
                    index !==
                    products.length - 1
                      ? "border-r border-[#DEE2E7]"
                      : ""
                  }`}
                >
                  <div className="h-[140px] flex items-center justify-center">
                    <img
                      src={
                        productImages[
                          product.image
                        ] || product.image
                      }
                      alt={product.name}
                      className="max-h-[120px] max-w-[120px] object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-[15px] text-center text-[#1C1C1C] line-clamp-2">
                    {product.name}
                  </h3>

                  <span className="mt-2 px-3 py-1 rounded-full bg-[#FFE3E3] text-[#EB001B] text-[13px] font-medium">
                    {product.discount ||
                      "-25%"}
                  </span>
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default DealsSection;