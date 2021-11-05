import * as React from "react";
import GlobalStyle from "../styles/globalStyles";
import Navigation from "../components/Navigation/Navigation";
import AboutSection from "../components/sections/About/AboutSection";
import OfferSection from "../components/sections/Offer/OfferSection";
import OpeningHoursSection from "../components/sections/OpeningHours/OpeningHoursSection";
import LocationSection from "../components/sections/Location/LocationSection";
import ContactSection from "../components/sections/Contact/ContactSection";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <AboutSection />
      <OfferSection />
      <OpeningHoursSection />
      <LocationSection />
      <ContactSection />
    </>
  );
};

export default IndexPage;
