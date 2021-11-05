import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NotFoundPageWrapper = styled.div`
  height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 26px;
  }

  a {
    display: block;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <h1>Podana strona nie istnieje</h1>
      <Link to="/">Wróć do strony głównej</Link>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
