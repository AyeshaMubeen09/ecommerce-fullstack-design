import item1 from "../../assets/recommended/item4.jpg";
import item2 from "../../assets/deals/watch.jpg";
import item3 from "../../assets/electronics/camera.jpg";
import item4 from "../../assets/recommended/item6.jpg";
import item5 from "../../assets/electronics/headphone.jpg";
import item6 from "../../assets/home/appliance.jpg";

const relatedProducts = [
  {
    id: 1,
   name: "Premium Blue Leather Wallet",
    price: "$24.00 - $39.00",
    image: item1,
  },
  {
    id: 2,
  name: "Smart Fitness Watch",
    price: "$79.00 - $129.00",
    image: item2,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$99.00 - $179.00",
    image: item3,
  },
  {
    id: 4,
     name: "Men's Denim Casual Shorts",
    price: "$29.00 - $49.00",
    image: item4,
  },
  {
    id: 5,
     name: "Electric Water Kettle",
    price: "$34.00 - $69.00",
    image: item5,
  },
  {
    id: 6,
    name: "Orange Travel Sling Bag",
    price: "$39.00 - $79.00",
    image: item6,
  },
];

function RelatedProducts() {
  return (
    <div className="bg-white border border-[#DEE2E7] rounded-md p-5">
      <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
        Related products
      </h2>

      <div className="grid grid-cols-6 gap-5">
        {relatedProducts.map((product) => (
          <div key={product.id}>
            {/* Image Box */}
          <div className="h-[172px] border border-[#E3E5E8] rounded-md flex items-center justify-center bg-[#F5F5F5] p-3">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[130px] object-contain"
              />
            </div>

            {/* Product Name */}
            <h4 className="mt-3 text-[14px] text-[#505050] leading-5 line-clamp-2">
              {product.name}
            </h4>

            {/* Price */}
            <p className="mt-1 text-[14px] text-[#8B96A5]">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;