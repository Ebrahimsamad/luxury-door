import Ask from "../features/home/Ask";
import Banner from "../features/home/Banner";
import FAQ from "../features/home/FAQ";
import GalleryCarousel from "../features/home/GalleryCarousel";
import HeroSection from "../features/home/HeroSection";
import IntroductionSection from "../features/home/IntroductionSection";
import PartnerCarousel from "../features/home/PartnerCarousel";
import WPCMaterialComponent from "../features/home/WpcMaterial";

function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <WPCMaterialComponent />
      <PartnerCarousel />
      <Banner />
      <GalleryCarousel />
      <Ask />
      <FAQ />
    </>
  );
}

export default HomePage;
