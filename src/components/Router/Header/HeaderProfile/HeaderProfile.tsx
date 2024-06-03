import React from "react";

import { HeaderProfileStyled as Styled } from "./HeaderProfile.styled";
import { ICON_MAP } from "constants/icons";
import { Typography } from "components/ui/Typography/Typography";
import { Divider } from "components/ui/Divider/Divider";
import { Icon } from "components/ui/Icon/Icon";
import { NavigationItem } from "../HeaderNavigation/NavigationItem/NavigationItem";
import { useAuth } from "components/Auth/AuthProvider";

export const HeaderProfile: React.FC = () => {
  const { logout, profile } = useAuth();

  return (
    <Styled.Wrapper>
      <Styled.Avatar src={profile ? profile.picture : ICON_MAP["userPic"]} />
      <Styled.Profile>
        <Typography
          fontSize={"xxs"}
          fontFamily={"condensed"}
          fontWeight={"thin"}
          color={"accent-100"}
        >
          {profile ? profile.name : "darkewards"}
        </Typography>
        <Typography
          fontSize={"sm"}
          fontFamily={"condensed"}
          fontWeight={"black"}
        >
          12,450 xp
        </Typography>
      </Styled.Profile>
      <Divider size={24} gap={8} />
      <Typography
        fontSize={"sm"}
        fontFamily={"condensed"}
        fontWeight={"bold"}
        fontStyle={"italic"}
      >
        #Homebase63
      </Typography>
      <Divider size={24} gap={8} />
      <NavigationItem onClick={logout}>
        <Icon name="logOut" />
      </NavigationItem>
    </Styled.Wrapper>
  );
};
