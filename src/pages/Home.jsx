import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import DealsSection from "../components/home/DealsSection";
import CategorySection from "../components/home/CategorySection";
import SupplierBanner from "../components/home/SupplierBanner";
import RecommendedItems from "../components/home/RecommendedItems";
import ExtraServices from "../components/home/ExtraServices";
import SuppliersSection from "../components/home/SuppliersSection";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <Hero />

      <DealsSection />
<CategorySection
  title="Home and outdoor"
  categoryType="home"
/>

<CategorySection
  title="Consumer electronics and gadgets"
  categoryType="electronics"
/>

      <SupplierBanner />

      <RecommendedItems />

      <ExtraServices />

      <SuppliersSection />

      <Newsletter />

    </MainLayout>
  );
}

export default Home;