import React from "react";

import { HeaderProfileStyled as Styled } from "./HeaderProfile.styled";
import { ICON_MAP } from "constants/icons";
import { Typography } from "components/ui/Typography/Typography";
import { Divider } from "components/ui/Divider/Divider";
import { Icon } from "components/ui/Icon/Icon";
import { Button } from "components/ui/Button/Button";

export const HeaderProfile: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Avatar src={ICON_MAP["userPic"]} />
      <Styled.Profile>
        <Typography
          fontSize={"xxs"}
          fontFamily={"condensed"}
          fontWeight={"thin"}
          color={"accent-100"}
        >
          darkewards
        </Typography>
        <Typography
          fontSize={"input"}
          fontFamily={"condensed"}
          fontWeight={"black"}
        >
          12,450 xp
        </Typography>
      </Styled.Profile>
      <Divider size={24} gap={8} />
      <Typography
        fontSize={"input"}
        fontFamily={"condensed"}
        fontWeight={"bold"}
        fontStyle={"italic"}
      >
        #Garage63
      </Typography>
      <Divider size={24} gap={8} />

      <Icon name="share" />
      <Icon name="bell" />
      <Styled.Button size="sm">Invite to garage</Styled.Button>
    </Styled.Wrapper>
  );
};
