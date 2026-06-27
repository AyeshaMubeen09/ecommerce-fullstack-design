import { useState } from "react";

import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout({ children }) {
  /* =========================
      SIDEBAR STATE
  ========================= */
  const [sidebarOpen, setSidebarOpen] =
    useState(false);
  const handleSearch = (query) => {
  console.log(query);
};

  return (
        <div
      className="
        min-h-screen
        bg-[#F7FAFC]
      "
    >
      <div className="flex">

        {/* =========================
            SIDEBAR
        ========================= */}
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* =========================
            MAIN CONTENT
        ========================= */}
        <div
          className="
            flex-1
            min-w-0
            flex
            flex-col
          "
        >

          {/* =========================
              NAVBAR
          ========================= */}
<AdminNavbar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
  pageTitle=""
/>

          {/* =========================
              PAGE CONTENT
          ========================= */}
          <main
            className="
              flex-1
              p-4
              sm:p-6
              lg:p-8
            "
          >
            {children}
          </main>

        </div>

      </div>
    </div>
  )
    }

export default AdminLayout;