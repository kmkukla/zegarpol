import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const OfferSection = () => {
  return (
    <SectionWrapper id="offer">
      <StaticImage
        src="../../../images/zegarpol-logo.png"
        alt="zegarpol logo"
      />
      <div>
        <ul>
          <li>kompleksowa naprawa i konserwacja</li>
          <li>sprzedaż zegarów i zegarków</li>
          <li>sprzedaż baterii</li>
          <li>wymiana baterii w pilotach samochodowych</li>
          <li>wymiana pasków do zegarków</li>
          <li>konserwacja, regulacja i czyszczenie zegarków naręcznych</li>
          <li>wymiana szkieł</li>
          <li>
            naprawa zegarów wiszących, stojących, ściennych, kominkowych i
            gabinetowych
          </li>
          <li>skracanie bransolet</li>
          <li>akcesoria do zegarków, np. paski, bransolety, teleskopy itp.</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default OfferSection;
