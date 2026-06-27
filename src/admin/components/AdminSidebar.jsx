import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Grid3X3,
  TicketPercent,
  Star,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import logo from "../../assets/logo/logo.svg";

function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  /* =========================
      CLOSE SIDEBAR
      AFTER ROUTE CHANGE
  ========================= */
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname, setSidebarOpen]);

  /* =========================
      LOCK BODY SCROLL
      WHEN MOBILE SIDEBAR OPENS
  ========================= */
  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = sidebarOpen
        ? "hidden"
        : "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  /* =========================
      LOGOUT
  ========================= */
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    navigate("/login", {
      replace: true,
      state: {
        success:
          "Admin logged out successfully.",
      },
    });
  };

  /* =========================
      SIDEBAR MENU
  ========================= */
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      name: "Products",
      icon: Package,
      path: "/admin/products",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      path: "/admin/orders",
    },
    {
      name: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      name: "Categories",
      icon: Grid3X3,
      path: "/admin/categories",
    },
    {
      name: "Coupons",
      icon: TicketPercent,
      path: "/admin/coupons",
    },
    {
      name: "Reviews",
      icon: Star,
      path: "/admin/reviews",
    },
    {
      name: "Reports",
      icon: BarChart3,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  /* =========================
      MENU STYLES
  ========================= */

  const menuClass = `
    group
    relative
    flex
    items-center
    h-[56px]
    rounded-2xl
    transition-all
    duration-300
    overflow-hidden
    ${
      sidebarOpen
        ? "justify-start gap-4 px-4"
        : "justify-center px-0"
    }
  `;

  const activeClass = `
    bg-[#EEF4FF]
    text-[#0D6EFD]
    font-semibold
    shadow-sm
  `;

  const inactiveClass = `
    text-[#4B5563]
    hover:bg-[#F8FAFC]
    hover:text-[#0D6EFD]
  `;

  return (
  <>
    {/* =========================
        MOBILE OVERLAY
    ========================= */}
    <div
      onClick={() => setSidebarOpen(false)}
      className={`
        fixed
        inset-0
        z-40
        bg-black/50
        backdrop-blur-[2px]
        transition-all
        duration-300
        lg:hidden
        ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
      `}
    />

    {/* =========================
        SIDEBAR
    ========================= */}
    <aside
      className={`
        fixed
        lg:sticky
        top-0
        left-0
        z-50

        flex
        flex-col

        h-screen

        bg-white
        border-r
        border-[#E5E7EB]

        transition-all
        duration-300
        ease-in-out

        overflow-hidden

        w-[280px]
        sm:w-[300px]
        max-w-[85vw]

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0 lg:w-[90px]"
        }
      `}
    >
      {/* =========================
          MOBILE HEADER
      ========================= */}
      <div
        className="
          lg:hidden
          flex
          items-center
          justify-between
          px-5
          h-16
          border-b
          border-[#EFF2F4]
          bg-gradient-to-r
          from-[#F8FAFF]
          to-white
          shrink-0
        "
      >
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Brand"
            className="h-10 w-auto"
          />

          <div>
            <h2
              className="
                text-lg
                font-bold
                text-[#1C1C1C]
              "
            >
              Brand
            </h2>

            <p
              className="
                text-xs
                text-[#8B96A5]
              "
            >
              Admin Panel
            </p>
          </div>
        </div>

        <button
          onClick={() => setSidebarOpen(false)}
          className="
            w-10
            h-10
            rounded-xl
            border
            border-[#DEE2E7]
            flex
            items-center
            justify-center
            hover:bg-[#F8FAFC]
          "
        >
          <X size={20} />
        </button>
      </div>

      {/* =========================
          DESKTOP LOGO
      ========================= */}
      <div
        className={`
          hidden
          lg:flex
          items-center

          border-b
          border-[#EFF2F4]

          bg-gradient-to-r
          from-[#F8FAFF]
          to-white

          shrink-0

          transition-all
          duration-300

          ${
            sidebarOpen
              ? "px-7 py-7 justify-start"
              : "px-0 py-6 justify-center"
          }
        `}
      >
        <img
          src={logo}
          alt="Brand"
          className="h-12 w-auto shrink-0"
        />

        <div
          className={`
            overflow-hidden
            whitespace-nowrap
            transition-all
            duration-300

            ${
              sidebarOpen
                ? "ml-4 opacity-100 w-[150px]"
                : "ml-0 opacity-0 w-0"
            }
          `}
        >
          <h2
            className="
              text-2xl
              font-bold
              text-[#1C1C1C]
              leading-none
            "
          >
            Brand
          </h2>

          <p
            className="
              text-sm
              text-[#8B96A5]
              mt-1
            "
          >
            Admin Panel
          </p>
        </div>
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <div
        className={`
          flex-1
          overflow-y-auto

          transition-all
          duration-300

          ${
            sidebarOpen
              ? "px-5 py-6"
              : "px-3 py-6"
          }

          scrollbar-none
        `}
      >
        {/* Navigation Title */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300

            ${
              sidebarOpen
                ? "opacity-100 max-h-10 mb-4"
                : "opacity-0 max-h-0 mb-0"
            }
          `}
        >
          <p
            className="
              px-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-[#8B96A5]
            "
          >
            Main Navigation
          </p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  ${menuClass}
                  ${
                    isActive
                      ? activeClass
                      : inactiveClass
                  }
                `}
              >
                {isActive && (
                  <span
                    className="
                      absolute
                      left-0
                      top-2
                      bottom-2
                      w-1
                      rounded-r-full
                      bg-[#0D6EFD]
                    "
                  />
                )}

                <div
                  className={`
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all

                    ${
                      isActive
                        ? "bg-white shadow-sm"
                        : "bg-[#F8FAFC] group-hover:bg-white"
                    }
                  `}
                >
                  <Icon size={20} />
                </div>

                <div
                  className={`
                    overflow-hidden
                    whitespace-nowrap
                    transition-all
                    duration-300

                    ${
                      sidebarOpen
                        ? "opacity-100 ml-3 w-[150px]"
                        : "opacity-0 ml-0 w-0"
                    }
                  `}
                >
                  <p className="text-[15px] font-medium">
                    {item.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* =========================
          SIDEBAR FOOTER
      ========================= */}
      <div
        className={`
          shrink-0
          border-t
          border-[#EFF2F4]
          bg-white

          transition-all
          duration-300

          ${
            sidebarOpen
              ? "px-5 py-5"
              : "px-3 py-4"
          }
        `}
      >
        {/* =========================
            SYSTEM INFO
        ========================= */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300

            ${
              sidebarOpen
                ? "opacity-100 max-h-32 mb-5"
                : "opacity-0 max-h-0 mb-0"
            }
          `}
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-[#8B96A5]
            "
          >
            System
          </p>

          <p
            className="
              mt-2
              text-sm
              text-[#606060]
            "
          >
            Brand Admin
          </p>

          <p
            className="
              text-xs
              text-[#8B96A5]
            "
          >
            Version 1.0.0
          </p>
        </div>

        {/* =========================
            LOGOUT
        ========================= */}
        <button
          onClick={logoutHandler}
          className={`
            w-full
            h-[54px]

            rounded-2xl

            border
            border-[#FAD4D4]

            text-[#FA3434]

            hover:bg-[#FFF5F5]
            hover:border-[#FA3434]

            transition-all
            duration-300

            flex
            items-center

            ${
              sidebarOpen
                ? "justify-start gap-4 px-4"
                : "justify-center px-0"
            }
          `}
        >
          {/* Icon */}
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-[#FFF1F1]
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <LogOut size={19} />
          </div>

          {/* Text */}
          <div
            className={`
              overflow-hidden
              whitespace-nowrap

              transition-all
              duration-300

              ${
                sidebarOpen
                  ? "opacity-100 w-auto"
                  : "opacity-0 w-0"
              }
            `}
          >
            <p className="font-medium">
              Logout
            </p>
          </div>
        </button>

        {/* =========================
            COPYRIGHT
        ========================= */}
        <div
          className={`
            overflow-hidden
            text-center

            transition-all
            duration-300

            ${
              sidebarOpen
                ? "opacity-100 max-h-20 mt-6"
                : "opacity-0 max-h-0 mt-0"
            }
          `}
        >
          <p
            className="
              text-xs
              text-[#8B96A5]
            "
          >
            © {new Date().getFullYear()} Brand
          </p>

          <p
            className="
              mt-1
              text-[11px]
              text-[#B0B7C3]
            "
          >
            Ecommerce Admin Dashboard
          </p>
        </div>
      </div>
    </aside>
  </>
);

}

export default AdminSidebar;