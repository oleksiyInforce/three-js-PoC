import React from "react";

import { WalletStyled as Styled } from "./Wallet";
import { Typography } from "components/ui/Typography/Typography";

export const WalletComponent = () => {
  return (
    <Styled.Wrapper>
      <Typography
        uppercase
        fontFamily="condensed"
        fontSize={"input"}
        fontWeight={"bold"}
      >
        wallet
      </Typography>
    </Styled.Wrapper>
  );
};
