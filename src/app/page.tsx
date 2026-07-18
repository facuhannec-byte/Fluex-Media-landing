import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HookDoors from "@/components/hero/HookDoors";
import Hero from "@/components/acts/Hero";
import ParadigmSection from "@/components/acts/ParadigmSection";
import WhatWeDoSection from "@/components/acts/WhatWeDoSection";
import Act2About from "@/components/acts/Act2About";
import SectionOpenSeam from "@/components/acts/SectionOpenSeam";
import ICEPreview from "@/components/acts/ICEPreview";
import Accompaniment from "@/components/acts/Accompaniment";
import Differentiator from "@/components/acts/Differentiator";
import Act5CTA from "@/components/acts/Act5CTA";

export default function Home() {
  return (
    <>
      <HookDoors />
      <Hero />
      <Nav />
      <ParadigmSection />
      <WhatWeDoSection />
      <Act2About />
      <SectionOpenSeam />
      <ICEPreview />
      <Accompaniment />
      <Differentiator />
      <Act5CTA />
      <Footer />
    </>
  );
}
