import styled from "styled-components";

export const AuthStyled = {
  Wrapper: styled.div`
    padding: 52px;
    min-width: 520px;
    background-color: ${({ theme }) => theme.color.foreground};
    position: relative;
  `,
};
