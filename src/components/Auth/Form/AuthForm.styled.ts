import { Button } from "components/ui/Button/Button";
import styled from "styled-components";

export const AuthFormStyled = {
  Form: styled.form`
    margin-top: 20px;
    min-width: 520px;
    background-color: ${({ theme }) => theme.color.foreground};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
  `,
  Button: styled(Button)`
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    &:hover {
      background-color: ${({ theme }) => theme.color["accent-100"]};
      border: 1px solid ${({ theme }) => theme.color["accent-100"]};
    }

    * {
      cursor: pointer;
    }
  `,
  InputWrapper: styled.div`
    margin: 24px 0;
  `,
};
