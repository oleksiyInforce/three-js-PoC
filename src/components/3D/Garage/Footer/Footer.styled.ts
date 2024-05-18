import { Button } from "components/ui/Button/Button";
import { Container } from "components/ui/Container/Container";
import styled from "styled-components";

export const FooterStyled = {
  Container: styled.footer`
    width: 100%;
    height: 108px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #000000 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 300px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 100) 100%
      );
      z-index: -1;
    }
  `,

  Wrapper: styled(Container)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  `,
  Scroll: styled.img`
    height: 100%;
    position: absolute;
    z-index: -1;
    right: 250px;
    bottom: 0;
    user-select: none;
  `,
  Left: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
  `,
  ButtonContent: styled.div`
    position: relative;
  `,
  Button: styled(Button)`
    padding: 8px 14px;
    border-radius: 4px;
    font-size: 14px;
  `,
  Hexagon: styled.div`
    position: absolute;
    right: -10px;
    top: -6px;
  `,
  CarWrapper: styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    position: absolute;
    top: -50px;
  `,
};
