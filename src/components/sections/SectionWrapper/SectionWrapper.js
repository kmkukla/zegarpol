import React from "react";
import styled from "styled-components";

export const StyledSectionWrapper = styled.section`
  padding: 50px 0 50px 0;
  display: flex;
  flex-direction: row;

  > * {
    flex-basis: 50%;
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding-top: 25px;
    flex-direction: column;

    > * {
      flex-basis: 100%;
      padding: 0;
    }
  }
`;

const SectionWrapper = ({ children, id }) => {
  return (
    <StyledSectionWrapper
      id={id}
      data-sal="fade"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      {children}
    </StyledSectionWrapper>
  );
};

export default SectionWrapper;
