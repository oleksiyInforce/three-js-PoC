import styled from "styled-components";

export const NavigationItemStyled = {
  Wrapper: styled.div<{ $color?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    cursor: pointer;

    background-color: ${({ theme, $color }) =>
      $color ? theme.color["accent-100"] : theme.color.dark};
    box-shadow: inset 20px 0px 20px -10px rgba(0, 0, 0, 0.5);
    transform: skewX(-30deg);

    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme, $color }) =>
        $color ? theme.color["accent-300"] : theme.color["accent-300"]};
    }

    > div {
      transform: skewX(30deg);

      img {
        transform: skewX(0);
      }
    }

    img {
      transform: skewX(30deg);
    }
  `,
};
