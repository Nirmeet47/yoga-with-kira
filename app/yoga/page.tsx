import YogaGallery from "@/components/home/ImageGallery";
import ContactPage from "@/components/yoga/ContactPage";
import Services from "@/components/yoga/ServicesHero";
import YogaClasses from "@/components/yoga/YogaClasses";
import YogaStyles from "@/components/yoga/YogaStyles";
export default function yoga(){
    return(
        <>
        <Services />
        <YogaStyles />
        <YogaClasses />
        <ContactPage />
        <YogaGallery />
        </>
    );
}