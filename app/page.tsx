import AboutSection from "@/components/AboutSection";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonals";
import YogaOfferings from "@/components/YogaOfferings";
import Image from "next/image";
import ContactSection from "@/components/ContactUs";
import ImageGallery from "@/components/ImageGallery";
export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <AboutSection />
    <YogaOfferings />
    <Testimonials />
    <ContactSection />
    <ImageGallery />
      </>
  );
}
