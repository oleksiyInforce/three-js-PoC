import styled from "styled-components";

export const Info = styled.img`
  position: absolute;
  z-index: 100;
  top: 24px;
  right: 24px;
  max-width: 370px;

  @media screen and (max-width: 1440px) {
    max-width: 300px;
  }
`;
