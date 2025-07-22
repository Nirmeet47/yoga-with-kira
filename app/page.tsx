import AboutSection from "@/components/AboutSection";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import YogaOfferings from "@/components/YogaOfferings";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <AboutSection />
    <YogaOfferings />
    </>
  );
}
