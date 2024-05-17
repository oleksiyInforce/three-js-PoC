import React from "react";

import { HeaderStyled as Styled } from "./Header.styled";
import { Icon } from "components/ui/Icon/Icon";
import { Divider } from "components/ui/Divider/Divider";
import { useLocation } from "react-router-dom";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { THeaderSection } from "types/header";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";

const sections: THeaderSection[] = [
  {
    item: (
      <Styled.Section>
        <Icon name="immersive" />
        <Divider size={24} color={"primary"} />
        <Icon name="garage" />
      </Styled.Section>
    ),
    link: "/",
    color: "yellow",
  },
  {
    item: <Icon name="motorverse" />,
    link: "/contact",
  },
  {
    item: <Icon name="epic" />,
    link: "/contact",
  },
  {
    item: <Icon name="roblox" />,
    link: "/contact",
  },
  {
    item: <Icon name="ste" />,
    link: "/contact",
  },
  {
    item: <Icon name="storefront" />,
    link: "/contact",
  },
];

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Styled.Container as={"header"}>
        <Styled.Header>
          <Styled.Right>
            <Styled.Icons>
              <Icon name={"bull"} size={45} />
              <Divider gap={28} size={45} />
              <Icon name={"ffw"} size={45} />
            </Styled.Icons>
            <HeaderNavigation sections={sections} />
          </Styled.Right>
          <HeaderProfile />
        </Styled.Header>
      </Styled.Container>
      <Styled.Spacing />
    </>
  );
};
