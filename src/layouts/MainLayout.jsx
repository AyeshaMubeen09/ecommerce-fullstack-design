import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout({
  children,
  hideNavbarMobile = false,
  hideFooterMobile = false,
}) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <div
        className={
          hideNavbarMobile
            ? "hidden md:block"
            : ""
        }
      >
        <Navbar />
      </div>

      {/* Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <div
        className={
          hideFooterMobile
            ? "hidden md:block"
            : ""
        }
      >
        <Footer />
      </div>

    </div>
  );
}

export default MainLayout;