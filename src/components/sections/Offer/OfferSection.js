import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const StyledList = styled.ul`
  list-style: none;
  li {
    padding-top: 5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

const OfferSection = () => {
  return (
    <SectionWrapper id="offer">
      <div>
        <h2>W ofercie:</h2>
        <StyledList>
          <li>
            {" "}
            - kompleksowa naprawa i konserwacja wszelkiego typu czasomierzy
          </li>
          <li> - sprzedaż zegarów i zegarków</li>
          <li> - sprzedaż baterii</li>
          <li>
            {" "}
            - wymiana baterii w zegarach, zegarkach, pilotach samochodowych
          </li>
          <li> - wymiana pasków do zegarków</li>

          <li> - wymiana szkieł</li>

          <li> - skracanie bransolet</li>
          <li>
            {" "}
            - akcesoria do zegarków, np. paski, bransolety, teleskopy itp.
          </li>
          <li> - inne drobne usługi zegarmistrzowskie</li>
        </StyledList>
      </div>
      <div>
        <StaticImage
          src="../../../images/steampunk-watch.jpg"
          alt="zegarpol logo"
        />
      </div>
    </SectionWrapper>
  );
};

export default OfferSection;
