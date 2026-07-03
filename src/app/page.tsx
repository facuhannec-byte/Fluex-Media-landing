import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HookDoors from "@/components/hero/HookDoors";
import WelcomeTagline from "@/components/acts/WelcomeTagline";
import Act2About from "@/components/acts/Act2About";
import Act3Bridge from "@/components/acts/Act3Bridge";
import VideoReveal from "@/components/acts/VideoReveal";
import Act4Plans from "@/components/acts/Act4Plans";
import Act5CTA from "@/components/acts/Act5CTA";

export default function Home() {
  return (
    <>
      <HookDoors />
      <WelcomeTagline />
      <Nav />
      <Act2About />
      <Act3Bridge />
      <VideoReveal />
      <Act4Plans />
      <Act5CTA />
      <Footer />
    </>
  );
}
