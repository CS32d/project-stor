import HeroSection from "../sections/HeroSection";
import ProductsSection from "../sections/ProductsSection";
import BlogSection from "../sections/BlogSection";
import FashionSection from "../components/FashionSection";
import SuccessSection from "../sections/SuccessSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BlogSection />
      <FashionSection />
      <SuccessSection />
    </>
  );
}

export default Home;