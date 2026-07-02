import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Act0Hook from "@/components/acts/Act0Hook";
import Act1Reveal from "@/components/acts/Act1Reveal";
import Act2About from "@/components/acts/Act2About";
import Act3Bridge from "@/components/acts/Act3Bridge";
import Act4Plans from "@/components/acts/Act4Plans";
import Act5CTA from "@/components/acts/Act5CTA";

export default function Home() {
  return (
    <>
      <Act0Hook />
      <Act1Reveal />
      <Nav />
      <Act2About />
      <Act3Bridge />
      <Act4Plans />
      <Act5CTA />
      <Footer />
    </>
  );
}
