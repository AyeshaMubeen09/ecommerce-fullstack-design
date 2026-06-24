import {
  Search,
  ShieldCheck,
  Send,
  BarChart3,
} from "lucide-react";

// Static services data
const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    icon: <Search size={18} />,
  },
  {
    id: 2,
    title: "Customize Your Products",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
    icon: <ShieldCheck size={18} />,
  },
  {
    id: 3,
    title: "Fast, reliable shipping",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",
    icon: <Send size={18} />,
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    icon: <BarChart3 size={18} />,
  },
];

function ExtraServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      {/* Section Heading */}
      <h2 className="text-[24px] font-semibold text-[#1C1C1C] mb-5">
        Extra services
      </h2>

      {/* Mobile Layout */}
      <div className="lg:hidden overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[250px] bg-white border border-[#DEE2E7] rounded-md overflow-hidden flex-shrink-0"
            >
              {/* Image */}
              <div className="relative h-[120px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/15" />

                {/* Icon */}
                <div className="absolute right-4 -bottom-6 w-[54px] h-[54px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center text-[#1C1C1C]">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 px-4 pb-5">
                <h3 className="text-[15px] font-medium leading-6 text-[#1C1C1C]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-4 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-[#DEE2E7] rounded-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-[120px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />

              {/* Icon */}
              <div className="absolute right-5 -bottom-6 w-[54px] h-[54px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center text-[#1C1C1C]">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="pt-10 px-5 pb-5">
              <h3 className="text-[16px] font-medium leading-6 text-[#1C1C1C]">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtraServices;