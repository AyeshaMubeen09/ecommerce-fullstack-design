import { Bell, ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

function AdminNavbar({
  sidebarOpen,
  setSidebarOpen,
}) {
  /* =========================
      ADMIN INFO
  ========================= */
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  /* =========================
      CURRENT ROUTE
  ========================= */
  const location = useLocation();

  /* =========================
      PAGE TITLE
  ========================= */
  let pageTitle = "Admin Panel";

  if (location.pathname === "/admin") {
    pageTitle = "Dashboard";
  } else if (
    location.pathname.startsWith("/admin/products")
  ) {
    pageTitle = "Product Management";
  } else if (
    location.pathname.startsWith("/admin/orders")
  ) {
    pageTitle = "Orders";
  } else if (
    location.pathname.startsWith("/admin/users")
  ) {
    pageTitle = "Users";
  } else if (
    location.pathname.startsWith("/admin/categories")
  ) {
    pageTitle = "Categories";
  }

  /* =========================
      NOTIFICATION COUNT
  ========================= */
  const notificationCount = 3;

  return (
    <header
      className="
        sticky
        top-0
        z-30
        bg-white/95
        backdrop-blur
        border-b
        border-[#E5E7EB]
      "
    >
      {/* =========================
          TOP ROW
      ========================= */}
      <div
        className="
          px-4
          sm:px-6
          lg:px-8
          h-[72px]
          flex
          items-center
          justify-between
          gap-3
        "
      >
        {/* =========================
            LEFT
        ========================= */}
<div className="flex items-center gap-4">

  {/* Sidebar */}
<div className="flex items-center gap-4 flex-1">

  <button
    onClick={() =>
      setSidebarOpen(!sidebarOpen)
    }
    className="
      w-10
      h-10
      md:w-11
      md:h-11
      rounded-xl
      border
      border-[#DEE2E7]
      bg-white
      flex
      items-center
      justify-center
      hover:bg-[#F8FAFC]
      transition
      shrink-0
    "
  >
    <Menu size={20} />
  </button>

  <h1
    className="
      text-lg
      md:text-2xl
      font-bold
      text-[#1C1C1C]
    "
  >
    {pageTitle}
  </h1>

</div>

</div>

        {/* =========================
            RIGHT
        ========================= */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <button
            className="
              relative
              w-10
              h-10
              md:w-11
              md:h-11
              rounded-xl
              border
              border-[#DEE2E7]
              bg-white
              flex
              items-center
              justify-center
              hover:bg-[#F8FAFC]
            "
          >
            <Bell
              size={19}
              className="text-[#374151]"
            />

            {notificationCount > 0 && (
              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  min-w-[18px]
                  h-[18px]
                  rounded-full
                  bg-[#FA3434]
                  text-white
                  text-[10px]
                  flex
                  items-center
                  justify-center
                  font-semibold
                "
              >
                {notificationCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              px-1
              sm:px-2
              py-1
              hover:bg-[#F8FAFC]
            "
          >
            {/* Avatar */}
            <div
              className="
                w-10
                h-10
                md:w-11
                md:h-11
                rounded-full
                bg-[#0D6EFD]
                text-white
                flex
                items-center
                justify-center
                font-semibold
                shrink-0
              "
            >
              {userInfo?.name
                ?.charAt(0)
                ?.toUpperCase() || "A"}
            </div>

            {/* Name */}
            <div className="hidden lg:block text-left">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-[#1C1C1C]
                  leading-none
                "
              >
                {userInfo?.name || "Admin"}
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#8B96A5]
                  capitalize
                "
              >
                {userInfo?.isAdmin
                  ? "Administrator"
                  : "User"}
              </p>
            </div>

            <ChevronDown
              size={16}
              className="
                hidden
                lg:block
                text-[#8B96A5]
              "
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;