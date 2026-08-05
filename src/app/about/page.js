import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import CertificationSection from "@/components/sections/about/CertificationSection";
import CTASection from "@/components/sections/about/CTASection";
import PrinciplesSection from "@/components/sections/about/PrinciplesSection";
import TeamSection from "@/components/sections/about/TeamSection";

export const metadata = {
  title: "About Us | Adhi Robotic Services",
  description:
    "Learn about Adhi Robotic Services, our expertise, mission, and commitment to delivering reliable air quality management, HVAC cleaning, and cleanroom solutions across multiple industries.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <PrinciplesSection />
      {/* <CertificationSection /> */}
      <TeamSection />
      {/* <CTASection /> */}
    </>
  );
}