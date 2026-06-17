import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  const mobileSections = [
    {
      key: "about",
      title: "About",
      items: [
        "About Us",
        "Find store",
        "Categories",
        "Blogs",
      ],
    },
    {
      key: "partnership",
      title: "Partnership",
      items: [
        "About",
        "Services",
        "Projects",
        "Contact",
      ],
    },
    {
      key: "information",
      title: "Information",
      items: [
        "Help Center",
        "Money Refund",
        "Shipping",
        "Contact us",
      ],
    },
    {
      key: "users",
      title: "For users",
      items: [
        "Login",
        "Register",
        "Settings",
        "My Orders",
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* MOBILE */}
        <div className="lg:hidden">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Brand Logo"
                className="h-10 w-auto object-contain"
              />

              <h1 className="text-[24px] font-bold text-[#0D6EFD]">
                Brand
              </h1>
            </div>

            <p className="text-[#606060] text-[14px] leading-6 mt-4">
              Your trusted marketplace for quality
              products, verified suppliers, and
              global trade opportunities.
            </p>

            {/* Social */}
            <div className="flex gap-2 mt-5">
              {[
                <FaFacebookF size={14} />,
                <FaTwitter size={14} />,
                <FaLinkedinIn size={14} />,
                <FaInstagram size={14} />,
                <FaYoutube size={14} />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-[#EFF2F4] flex items-center justify-center text-[#8B96A5]"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Get App */}
          <div className="mt-8">
            <h3 className="font-semibold text-[16px] mb-4">
              Get app
            </h3>

            <div className="flex gap-3">
              <button className="flex-1 h-[50px] bg-black rounded-md flex items-center px-3 gap-3 text-white">
                <FaApple size={24} />

                <div className="text-left leading-tight">
                  <p className="text-[9px]">
                    Download on the
                  </p>

                  <p className="text-[14px] font-medium">
                    App Store
                  </p>
                </div>
              </button>

              <button className="flex-1 h-[50px] bg-black rounded-md flex items-center px-3 gap-3 text-white">
                <FaGooglePlay size={20} />

                <div className="text-left leading-tight">
                  <p className="text-[9px]">
                    GET IT ON
                  </p>

                  <p className="text-[14px] font-medium">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-8 border-t border-[#EFF2F4]">
            {mobileSections.map((section) => (
              <div
                key={section.key}
                className="border-b border-[#EFF2F4]"
              >
                <button
                  onClick={() =>
                    toggleSection(section.key)
                  }
                  className="w-full flex items-center justify-between py-4"
                >
                  <span className="font-medium text-[#1C1C1C]">
                    {section.title}
                  </span>

                  {openSection ===
                  section.key ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {openSection ===
                  section.key && (
                  <ul className="pb-4 space-y-3 text-[14px] text-[#8B96A5]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Brand Logo"
                className="h-11 w-auto object-contain"
              />

              <h1 className="text-[28px] font-bold text-[#0D6EFD]">
                Brand
              </h1>
            </div>

            <p className="text-[#606060] text-[14px] leading-6 max-w-[270px] mt-4">
              Your trusted marketplace for quality
              products, verified suppliers, and
              global trade opportunities.
            </p>

            <div className="flex gap-2 mt-5">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-[#EFF2F4] flex items-center justify-center text-[#8B96A5]"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">
              About
            </h3>
            <ul className="space-y-2 text-[14px] text-[#8B96A5]">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">
              Partnership
            </h3>
            <ul className="space-y-2 text-[14px] text-[#8B96A5]">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">
              Information
            </h3>
            <ul className="space-y-2 text-[14px] text-[#8B96A5]">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">
              For users
            </h3>
            <ul className="space-y-2 text-[14px] text-[#8B96A5]">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">
              Get app
            </h3>

            <div className="flex flex-col gap-3">
              <button className="w-[150px] h-[50px] bg-black rounded-md flex items-center px-3 gap-3 text-white">
                <FaApple size={26} />

                <div className="text-left leading-tight">
                  <p className="text-[10px]">
                    Download on the
                  </p>
                  <p className="text-[16px] font-medium">
                    App Store
                  </p>
                </div>
              </button>

              <button className="w-[150px] h-[50px] bg-black rounded-md flex items-center px-3 gap-3 text-white">
                <FaGooglePlay size={22} />

                <div className="text-left leading-tight">
                  <p className="text-[10px]">
                    GET IT ON
                  </p>
                  <p className="text-[16px] font-medium">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#EFF2F4] border-t border-[#DEE2E7]">
        <div className="max-w-7xl mx-auto px-4 py-4 md:h-[68px] flex flex-col md:flex-row items-center justify-between text-[14px] text-[#606060]">
          <p>© 2026 Ecommerce.</p>

          <button className="flex items-center gap-2 mt-2 md:mt-0">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "22px",
                height: "16px",
              }}
            />

            <span>English</span>

            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;