import { Button } from "components/ui/Button/Button";
import { Container } from "components/ui/Container/Container";
import { Typography } from "components/ui/Typography/Typography";
import styled, { css } from "styled-components";

export const HeaderStyled = {
  Container: styled.header`
    width: 100%;
    background: linear-gradient(
      hsl(0, 0%, 0%) 0%,
      hsla(0, 0%, 0%, 0.991) 11.3%,
      hsla(0, 0%, 0%, 0.964) 21.6%,
      hsla(0, 0%, 0%, 0.922) 30.9%,
      hsla(0, 0%, 0%, 0.867) 39.5%,
      hsla(0, 0%, 0%, 0.801) 47.3%,
      hsla(0, 0%, 0%, 0.726) 54.4%,
      hsla(0, 0%, 0%, 0.644) 60.8%,
      hsla(0, 0%, 0%, 0.558) 66.8%,
      hsla(0, 0%, 0%, 0.469) 72.3%,
      hsla(0, 0%, 0%, 0.379) 77.4%,
      hsla(0, 0%, 0%, 0.292) 82.2%,
      hsla(0, 0%, 0%, 0.208) 86.8%,
      hsla(0, 0%, 0%, 0.13) 91.3%,
      hsla(0, 0%, 0%, 0.06) 95.6%,
      hsla(0, 0%, 0%, 0) 100%
    );

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 20;
  `,
  Header: styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    position: relative;
  `,
  Icons: styled.div`
    display: flex;
    align-items: center;
  `,
  Nav: styled.nav`
    display: flex;
    gap: 52px;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  Burger: styled.nav`
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  `,
  Link: styled(Typography)<{ $active: boolean }>`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    width: fit-content;

    &:hover {
      color: ${({ theme }) => theme.color["accent-100"]};
    }

    ${({ $active }) =>
      $active &&
      css`
        color: ${({ theme }) => theme.color["accent-100"]};
        border-bottom: 1px solid ${({ theme }) => theme.color["accent-100"]};
      `}
  `,
  Button: styled(Button)`
    padding: 12px 32px;
  `,
  Spacing: styled.div`
    height: 108px;
    width: 100%;
  `,
};
