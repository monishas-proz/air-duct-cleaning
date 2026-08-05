import ContactCTASection from "@/components/sections/contact/ContactCTASection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";

export const metadata = {
  title: "Contact Us | Adhi Robotic Services",
  description:
    "Contact Adhi Robotic Services for expert HVAC cleaning, air quality management, duct cleaning, AHU maintenance, and cleanroom solutions. Get in touch with our team today.",
};
export default function ContactPage(){

    return(

        <>
        <ContactHeroSection />
        <ContactFormSection />
        {/* <ContactCTASection /> */}
        </>
    )
}