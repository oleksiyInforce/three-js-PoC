import { Button } from "components/ui/Button/Button";
import styled from "styled-components";

export const HeaderProfileStyled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
  `,
  Button: styled(Button)`
    padding: 8px 18px;
    font-size: 12px;
    line-height: 1;
  `,
  Profile: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Avatar: styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
  `,
};
