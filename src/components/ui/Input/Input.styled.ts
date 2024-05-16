import styled from "styled-components";

interface IErrorProp {
  error?: string;
}

export const Styled = {
  Wrapper: styled.div<IErrorProp>`
    width: 100%;
    position: relative;

    padding: 24px;
    border-top: 1px solid
      ${({ theme, error }) => (error ? theme.color.red : theme.color.muted)};
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.color.red : theme.color.muted)};

    box-sizing: border-box;

    @media screen and (max-width: 576px) {
      padding: 16px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus input:-webkit-autofill,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: rgb(255, 255, 255);
      -webkit-box-shadow: 0 0 0rgb (0, 0, 0) 00px #000 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  `,
  Input: styled.input<IErrorProp>`
    all: unset;
    width: 100%;

    font-size: ${({ theme }) => theme.fontSize.input};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme, error }) =>
      error ? theme.color.red : theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    text-transform: uppercase;

    &::placeholder {
      color: ${({ theme }) => theme.color.muted};
      text-transform: uppercase;
    }
  `,
  ErrorText: styled.span`
    position: absolute;
    bottom: -22px;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.color.red};

    @media screen and (max-width: 576px) {
      bottom: 4px;
    }
  `,
};
