import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    position: static;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navigation;
