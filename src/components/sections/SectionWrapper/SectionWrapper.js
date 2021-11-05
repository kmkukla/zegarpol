import React from "react";
import styled from "styled-components";

export const StyledSectionWrapper = styled.section`
  display: flex;
  padding-top: 50px;

  > * {
    flex-basis: 50%;
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
