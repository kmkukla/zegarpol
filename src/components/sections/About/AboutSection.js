import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const ImageContainer = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 75%;

  &:nth-child(2) {
    position: absolute;
    top: 75px;
    left: 100px;
    @media (max-width: 768px) {
      left: auto;
      top: 50px;
      right: 0px;
    }
  }
`;

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <ImageContainer>
        <ImageWrapper>
          <StaticImage
            src="../../../images/omega.jpg"
            alt="wrist watch"
            placeholder="tracedSVG"
          />{" "}
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage
            src="../../../images/festina.jpg"
            alt="wrist watch"
            placeholder="tracedSVG"
          />
        </ImageWrapper>
      </ImageContainer>
      <div>
        Firma Zegarpol działa na rynku od około 30 lat. Wiele lat doswiadczenia
        pozwalają nam zaoferować wysokiej jakosci usługi zegarmistrzowskie.
        Cechuje nas precyzja i doskonała jakosć. Drobne usługi wykonujemy na
        poczekaniu. Oprócz serwisu posiadamy w sprzedaży także zarówno nowe jak
        i antyczne zegary, zegarki oraz akcesoria takie jak paski, baterie,
        bransolety, itp.
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
