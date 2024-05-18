import styled from "styled-components";

import checkbox from "assets/icons/check.svg";

interface IErrorProp {
  error?: string;
}

export const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
  `,
  Input: styled.input<IErrorProp>`
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    min-width: 20px;
    border: 2px solid
      ${({ theme, error }) => (error ? theme.color.red : theme.color.muted)};
    border-radius: 3px;
    vertical-align: sub;
    outline: none;
    margin: 0 10px 0 0;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: ${({ theme, error }) =>
        error ? theme.color.red : theme.color["accent-100"]};

      &::before {
        content: url(${checkbox});
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px; /* Same as checkbox width */
        height: 12px; /* Same as checkbox height */
      }
    }
  `,
  Label: styled.label`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.muted};
    line-height: 20px;

    @media screen and (max-width: 576px) {
      line-height: normal;
    }
  `,
};
