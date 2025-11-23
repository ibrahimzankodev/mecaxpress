
import BannerDiscount from "@/components/banner-discount";
// import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";
import BrandsSection from "@/components/brands-section";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <ChooseCategory />
      <BannerDiscount />
      <BrandsSection />
      {/* <BannerProduct /> */}
    </main>
  )
}
