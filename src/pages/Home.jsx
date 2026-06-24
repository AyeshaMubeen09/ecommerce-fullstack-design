// Pages
import MainLayout from "../layouts/MainLayout";

// Home Sections
import Hero from "../components/home/Hero";
import DealsSection from "../components/home/DealsSection";
import CategorySection from "../components/home/CategorySection";
import SupplierBanner from "../components/home/SupplierBanner";
import RecommendedItems from "../components/home/RecommendedItems";
import ExtraServices from "../components/home/ExtraServices";
import SuppliersSection from "../components/home/SuppliersSection";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Flash Deals / Offers */}
      <DealsSection />

      {/* Home & Outdoor Category */}
      <CategorySection
        title="Home and outdoor"
        categoryType="home"
      />

      {/* Electronics Category */}
      <CategorySection
        title="Consumer electronics and gadgets"
        categoryType="electronics"
      />

      {/* Supplier Inquiry Banner */}
      <SupplierBanner />

      {/* Recommended Products */}
      <RecommendedItems />

      {/* Additional Services */}
      <ExtraServices />

      {/* Supplier Locations */}
      <SuppliersSection />

      {/* Newsletter Subscription */}
      <Newsletter />
    </MainLayout>
  );
}

export default Home;