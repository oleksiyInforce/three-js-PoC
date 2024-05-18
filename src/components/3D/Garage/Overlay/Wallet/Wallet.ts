import styled from "styled-components";

export const Wallet = styled.img`
  position: absolute;
  z-index: 1;
  top: 24px;
  left: 24px;
  max-width: 370px;

  @media screen and (max-width: 1440px) {
    max-width: 300px;
  }
`;
