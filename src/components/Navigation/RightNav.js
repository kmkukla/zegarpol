import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 18px;

  li {
    padding: 18px 14px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #385b66;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      margin-left: 10px;
      color: #fff;
    }

    a {
      display: block;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledRightNavLogo = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const RightNav = ({ open, toggleMenu }) => {
  return (
    <>
      <Ul open={open}>
        <li onClick={toggleMenu}>
          <AnchorLink to="/#about">O nas</AnchorLink>
        </li>
        <li onClick={toggleMenu}>
          <AnchorLink to="/#offer">Oferta</AnchorLink>
        </li>
        <li onClick={toggleMenu}>
          <AnchorLink to="/#opening-hours">Godziny otwarcia</AnchorLink>
        </li>
        <li onClick={toggleMenu}>
          <AnchorLink to="/#location">Lokalizacja</AnchorLink>
        </li>
        <li onClick={toggleMenu}>
          <AnchorLink to="/#contact">Kontakt</AnchorLink>
        </li>
        <StyledRightNavLogo>
          <StaticImage src="../../images/zegarpol-logo-removebg.webp" />
        </StyledRightNavLogo>
      </Ul>
    </>
  );
};

export default RightNav;
