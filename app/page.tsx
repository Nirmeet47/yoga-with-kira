import AboutSection from "@/components/home/AboutSection";
import Landing from "@/components/home/Landing";
import Testimonials from "@/components/home/Testimonals";
import YogaOfferings from "@/components/home/YogaOfferings";
import ContactSection from "@/components/home/ContactUs";
import ImageGallery from "@/components/home/ImageGallery";
import FAQSection from "@/components/home/Faqs";
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
      </>
  );
}
