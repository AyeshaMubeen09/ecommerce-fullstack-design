import { Lock, MessageCircle, Truck } from "lucide-react";

const CART_FEATURES = [
  {
    id: 1,
    icon: Lock,
    title: "Secure payment",
    description: "Secure checkout",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Customer support",
    description: "24/7 support",
  },
  {
    id: 3,
    icon: Truck,
    title: "Free delivery",
    description: "Free of cost",
  },
];

function CartFeatures() {
  return (
    <div className="flex items-center gap-24 py-8">
      {CART_FEATURES.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className="flex items-center gap-4"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-[#DEE2E7] flex items-center justify-center shrink-0">
              <Icon
                size={22}
                className="text-[#8B96A5]"
              />
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-[#1C1C1C] leading-5">
                {feature.title}
              </h3>

              <p className="text-[14px] text-[#8B96A5] mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartFeatures;