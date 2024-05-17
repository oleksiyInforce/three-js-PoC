import styled from "styled-components";

export const FooterStyled = {
  Container: styled.footer`
    width: 100%;
    height: 108px;
    background: ${({ theme }) => theme.color.primary};
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    gap: 32px;
    z-index: 100;
  `,
  Text: styled.p`
    font-size: 14px;
    color: #333;
  `,
};
