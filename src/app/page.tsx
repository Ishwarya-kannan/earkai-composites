import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProductSection from "@/components/home/ProductSection";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProductSection />
        <FeaturedProducts />
        <Industries />
        <WhyChooseUs />
        <ContactSection />
        <Footer />
        <Clients />

      </main>
    </>
  );
}