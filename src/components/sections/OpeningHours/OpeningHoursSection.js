import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const OpeningHoursSection = () => {
  return (
    <SectionWrapper id="opening-hours">
      <StaticImage
        src="../../../images/big-watch.jpg"
        alt="zegarpol logo"
        placeholder="tracedSVG"
      />
      <div>
        <p>Godziny otwarcia</p>
        <p>Poniedziałek - Piątek: 9:30 - 16:00</p>
        <p>Sobota: 9:30 - 13:00</p>
        <p>Niedziela: nieczynne</p>
      </div>
    </SectionWrapper>
  );
};

export default OpeningHoursSection;
