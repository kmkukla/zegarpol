import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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

const RightNav = ({ open, toggleMenu }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="#about" onClick={toggleMenu}>
          O nas
        </Link>
      </li>
      <li>
        <Link to="#offer" onClick={toggleMenu}>
          Oferta
        </Link>
      </li>
      <li>
        <Link to="#opening-hours" onClick={toggleMenu}>
          Godziny otwarcia
        </Link>
      </li>
      <li>
        <Link to="#location" onClick={toggleMenu}>
          Lokalizacja
        </Link>
      </li>
      <li>
        <Link to="#contact" onClick={toggleMenu}>
          Kontakt
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
