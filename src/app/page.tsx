import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HookDoors from "@/components/hero/HookDoors";
import WelcomeTagline from "@/components/acts/WelcomeTagline";
import AttentionSection from "@/components/acts/AttentionSection";
import ProblemSection from "@/components/acts/ProblemSection";
import Act2About from "@/components/acts/Act2About";
import SectionOpenSeam from "@/components/acts/SectionOpenSeam";
import ICEPreview from "@/components/acts/ICEPreview";
import Act4Plans from "@/components/acts/Act4Plans";
import Act5CTA from "@/components/acts/Act5CTA";

export default function Home() {
  return (
    <>
      <HookDoors />
      <WelcomeTagline />
      <Nav />
      <AttentionSection />
      <ProblemSection />
      <Act2About />
      <SectionOpenSeam />
      <ICEPreview />
      <Act4Plans />
      <Act5CTA />
      <Footer />
    </>
  );
}
