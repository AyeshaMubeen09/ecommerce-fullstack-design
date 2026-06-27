import {
  CreditCard,
  ShieldCheck,
  Headphones,
  Globe,
} from "lucide-react";

function AuthFooter() {
  const features = [
    {
      icon: CreditCard,
      title: "Secure Payments",
      subtitle: "100% secure checkout",
    },
    {
      icon: ShieldCheck,
      title: "Buyer Protection",
      subtitle: "Get your money back",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      subtitle: "We're here to help",
    },
    {
      icon: Globe,
      title: "Global Shipping",
      subtitle: "Delivering worldwide",
    },
  ];

  return (
    <footer className="bg-white border-t border-[#E5E7EB] mt-auto">

      {/* =========================
          FEATURES STRIP
      ========================== */}
      <div className="border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 py-8">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {features.map(
    (
      feature,
      index
    ) => {
      const Icon =
        feature.icon;

      return (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#EFF6FF]
              flex
              items-center
              justify-center
              mb-2
            "
          >
            <Icon
              size={18}
              className="text-[#0D6EFD]"
            />
          </div>

          <h3 className="text-[15px] font-semibold text-[#1C1C1C]">
            {feature.title}
          </h3>

          <p className="text-[13px] text-[#6B7280] mt-1">
            {feature.subtitle}
          </p>
        </div>
      );
    }
  )}

</div>

        </div>
      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-[13px] text-[#6B7280]">
            © 2024 Brand Marketplace. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-[13px] text-[#4B5563]">

            <button className="hover:text-[#0D6EFD] transition">
              Privacy Policy
            </button>

            <span className="text-[#D1D5DB]">
              |
            </span>

            <button className="hover:text-[#0D6EFD] transition">
              Terms of Service
            </button>

            <span className="text-[#D1D5DB]">
              |
            </span>

            <button className="hover:text-[#0D6EFD] transition">
              Cookies Policy
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default AuthFooter;