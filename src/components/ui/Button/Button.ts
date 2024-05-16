import styled, { DefaultTheme, css } from "styled-components";

type TSizes = "sm" | "default" | "large";

interface IButtonProps {
  variant?: "primary" | "outline" | "secondary";
  mw?: string;
  size?: TSizes;
  disabled?: boolean;
}

const buttonVariants = (theme: DefaultTheme) => ({
  primary: css`
    color: ${theme.color.primary};
    background-color: ${theme.color["accent-100"]};

    &:hover {
      background-color: ${theme.color["accent-500"]};
      color: ${theme.color.white};
    }
  `,
  outline: css`
    color: ${theme.color.white};
    background-color: transparent;
    border: 1px solid ${theme.color.white};

    box-sizing: border-box !important;

    &:hover {
      background-color: ${theme.color.white};
      color: ${theme.color.primary};
    }
  `,

  secondary: css`
    color: ${theme.color.primary};
    background-color: ${theme.color.white};

    &:hover {
      background-color: ${theme.color["accent-100"]};
    }
  `,
});

const buttonSizes = {
  sm: css`
    padding: 6px 24px;
  `,
  default: css`
    padding: 20px 32px;
  `,
  large: css`
    padding: 24px 40px;
  `,
};

export const Button = styled.button<IButtonProps>`
  ${({ size }) => (size ? buttonSizes[size] : buttonSizes.default)}

  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.condensed};
  cursor: pointer;

  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  border: none;

  transition: all 0.4s ease;

  box-sizing: border-box !important;

  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};

  ${({ variant, theme }) =>
    variant ? buttonVariants(theme)[variant] : buttonVariants(theme).primary}
`;
