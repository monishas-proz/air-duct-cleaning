import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import CertificationSection from "@/components/sections/about/CertificationSection";
import CTASection from "@/components/sections/about/CTASection";
import PrinciplesSection from "@/components/sections/about/PrinciplesSection";
import TeamSection from "@/components/sections/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <PrinciplesSection />
      {/* <CertificationSection /> */}
      <TeamSection />
      <CTASection />
    </>
  );
}