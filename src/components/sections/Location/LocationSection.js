import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const LocationSection = () => {
  return (
    <SectionWrapper id="location">
      <StaticImage
        src="../../../images/zegarpol-location.jpg"
        alt="zegarpol location"
      />
      <div>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10113.10132923754!2d19.2147389!3d50.6777141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5270ba3590df72c8!2sZegarpol!5e0!3m2!1spl!2spl!4v1636369353666!5m2!1spl!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </SectionWrapper>
  );
};

export default LocationSection;
