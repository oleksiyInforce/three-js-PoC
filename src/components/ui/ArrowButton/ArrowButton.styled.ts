import styled from "styled-components";

export const ArrowButtonWrapper = styled.button<{ size: number }>`
  all: unset;
  cursor: pointer;

  path:nth-child(1) {
    fill: transparent;
    stroke: ${({ theme }) => theme.color.white};
  }

  path:nth-child(2) {
    fill: transparent;
  }

  path:nth-child(3) {
    fill: ${({ theme }) => theme.color.white};
  }

  &:hover {
    path:nth-child(1) {
      fill: ${({ theme }) => theme.color.white};
    }

    path:nth-child(2) {
      fill: ${({ theme }) => theme.color.white};
    }

    path:nth-child(3) {
      fill: ${({ theme }) => theme.color.primary};
    }
  }

  path {
    transition: fill 0.3s;
  }

  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`;
