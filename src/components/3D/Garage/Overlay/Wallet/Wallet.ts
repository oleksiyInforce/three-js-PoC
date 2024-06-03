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

export const WalletStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

    position: absolute;
    z-index: 1;
    top: 24px;
    left: 500px;

    background: linear-gradient(
        90deg,
        rgba(88, 88, 88, 0.2) 0%,
        rgba(180, 180, 180, 0.2) 100%
      ),
      rgba(0, 0, 0, 0.8);
  `,
};
