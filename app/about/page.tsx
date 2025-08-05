import Hero from "@/components/about/Hero";
import PurposeSection from "@/components/about/PurposeSection";
import Trusted from "@/components/about/Trusted";
import VisionMission from "@/components/about/VisionMission";
import ImageGallery from "@/components/home/ImageGallery";

export default function AboutSection() {
  return (
    <>
    <Hero />
    <VisionMission />
    <PurposeSection />
    <Trusted />
    <ImageGallery />
    </>
  );
}