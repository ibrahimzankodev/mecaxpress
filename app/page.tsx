
import BannerDiscount from "@/components/banner-discount";
// import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";
import BrandsSection from "@/components/brands-section";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section aria-label="Promociones y ofertas">
        <CarouselTextBanner />
      </section>

      <section aria-label="Productos destacados">
        <FeaturedProducts />
      </section>

      <section aria-label="Categorías de productos">
        <ChooseCategory />
      </section>

      <section aria-label="Descuentos especiales">
        <BannerDiscount />
      </section>

      <section aria-label="Marcas disponibles">
        <BrandsSection />
      </section>
    </main>
  )
}
