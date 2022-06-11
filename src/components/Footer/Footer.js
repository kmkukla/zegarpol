import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border-top: 2px solid #f1f1f1;
  padding: 20px;
  margin-top: 25px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const StyledContactButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledAuthorInfo = styled.div`
  justify-self: end;
  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const StyledFooterLogoWrapper = styled.div`
  justify-self: end;
  align-self: end;
  @media (max-width: 768px) {
    justify-self: center;
    align-self: center;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  position: relative;

  &::before {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #385b66;
    top: 100%;
    left: 0;
    pointer-events: none;
    content: "";
    height: 7px;
    border-radius: 20px;
    transform: scale3d(1, 1, 1);
    transition: transform 0.2s, opacity 0.2s;
    transition-timing-function: cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }

  &:hover::before {
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    opacity: 1;
    transform: scale3d(1.2, 0.1, 1);
  }

  & span {
    transform: translate3d(0, -4px, 0);
    display: inline-block;
    transition: transform 0.2s 0.05s cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }

  &:hover span {
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    transition-delay: 0s;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* <StyledContactButtonsContainer>
        <StyledLink href="tel:+48516159624">
          <span>zadzwoń</span>
        </StyledLink>
        <StyledLink href="mailto:iwokuk@onet.pl">
          <span>wyslij email</span>
        </StyledLink>
      </StyledContactButtonsContainer> */}
      <StyledFooterLogoWrapper>
        <StaticImage
          src="../../images/zegarpol-logo-removebg.webp"
          alt="zegarpol logo"
          width={160}
          height={50}
        />
      </StyledFooterLogoWrapper>
      <div>ZEGARPOL {new Date().getFullYear()} &copy;</div>
      {/* <StyledAuthorInfo>
        made by{" "}
        <StyledLink href="https://www.kukla.dev/">
          <span>kukla.dev</span>
        </StyledLink>
      </StyledAuthorInfo> */}
    </StyledFooter>
  );
};

export default Footer;
