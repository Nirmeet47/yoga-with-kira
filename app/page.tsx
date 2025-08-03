import AboutSection from "@/components/home/AboutSection";
import Landing from "@/components/home/Landing";
import Navbar from "@/components/home/Navbar";
import Testimonials from "@/components/home/Testimonals";
import YogaOfferings from "@/components/home/YogaOfferings";
import Image from "next/image";
import ContactSection from "@/components/home/ContactUs";
import ImageGallery from "@/components/home/ImageGallery";
import FAQSection from "@/components/home/Faqs";
import Footer from "@/components/home/Footer";
import InfiniteScrollText from "@/components/home/InfiniteScroll";
export default function Home() {
  return (
    <>
    <Landing />
    <AboutSection />
    <InfiniteScrollText />
    <YogaOfferings />
    <Testimonials />
    <ContactSection />
    <ImageGallery />
    <FAQSection />
    <Footer />

      </>
  );
}
