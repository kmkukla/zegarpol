import * as React from "react";
import GlobalStyle from "../styles/globalStyles";
import Navigation from "../components/Navigation/Navigation";
import AboutSection from "../components/sections/About/AboutSection";
import OfferSection from "../components/sections/Offer/OfferSection";
import OpeningHoursSection from "../components/sections/OpeningHours/OpeningHoursSection";
import LocationSection from "../components/sections/Location/LocationSection";
import ContactSection from "../components/sections/Contact/ContactSection";
import Particles from "react-tsparticles";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Particles
        id="tsparticles"
        params={{
          particles: {
            color: "#C0DBA7",
            number: { value: 10, density: { enable: true, value_area: 800 } },
            shape: {
              type: ["circle"],
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: { value: 10, random: false },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
      <GlobalStyle />
      <Navigation />
      <AboutSection />
      <OfferSection />
      <OpeningHoursSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default IndexPage;
