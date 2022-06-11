import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { StyledLink } from "../../Footer/Footer";

const LogoWrapper = styled.div`
  @media (max-width: 768px) {
    order: 1;
    padding-top: 25px;
  }
`;

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      {/* <LogoWrapper>
        <StaticImage
          src="../../../images/zegarpol-logo.png"
          alt="zegarpol logo"
          placeholder="tracedSVG"
          style={{ maxHeight: "320px" }}
        />
      </LogoWrapper> */}
      <div>
        <h2>Masz pytania?</h2>
        <StyledLink href="mailto:iwokuk@onet.pl">
          <span>Napisz maila</span>
        </StyledLink>
        <span> lub </span>
        <StyledLink href="tel:+48516159624">
          <span>zadzwoń</span>
        </StyledLink>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
