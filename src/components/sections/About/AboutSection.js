import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const ImageContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 75%;
  margin-bottom: 20px;
  &:nth-child(2) {
    position: absolute;
    top: 75px;
    left: 100px;
    @media (max-width: 768px) {
      top: 50px;
      left: 50px;
    }
  }
`;

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <ImageContainer>
        <ImageWrapper>
          <StaticImage
            src="../../../images/pocket-watches.jpg"
            alt="zegarpol logo"
            placeholder="tracedSVG"
          />{" "}
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage
            src="../../../images/alarm-clocks.jpg"
            alt="zegarpol logo"
            placeholder="tracedSVG"
          />
        </ImageWrapper>
      </ImageContainer>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto
        commodi, omnis aliquid animi nobis maxime consequatur, doloremque illum
        modi sit esse a? Fugiat a, alias quia ullam quod quibusdam labore veniam
        suscipit repellendus rem eum corrupti omnis vitae nemo porro eveniet
        est, repellat architecto deserunt, soluta magni. Numquam optio
        asperiores magnam sint praesentium nobis quaerat possimus, amet quis
        culpa iure! Possimus, mollitia delectus! Quae, a recusandae quidem odio
        autem inventore dolore quo officia blanditiis. Commodi, ipsum enim saepe
        incidunt nemo eveniet sit quisquam magnam error, nam unde. Eum corporis
        facere sequi illum, ipsa illo eligendi porro fugiat culpa nihil?
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
