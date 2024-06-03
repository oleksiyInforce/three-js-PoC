import React from "react";

import { HeaderStyled as Styled } from "./Header.styled";
import { Icon } from "components/ui/Icon/Icon";
import { Divider } from "components/ui/Divider/Divider";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { THeaderSection } from "types/header";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Typography } from "components/ui/Typography/Typography";

const sections: THeaderSection[] = [
  {
    item: (
      <Styled.Section>
        <Styled.Section style={{ display: "flex", alignItems: "center" }}>
          <Icon name="garage" style={{ marginRight: 4 }} />
          <div>
            <Typography
              fontFamily={"condensed"}
              style={{ fontSize: 8 }}
              fontWeight={"thin"}
              color={"primary"}
              uppercase
            >
              fast forworld
            </Typography>
            <Typography
              fontFamily={"condensed"}
              style={{ fontSize: 16 }}
              fontWeight={"black"}
              color={"primary"}
              uppercase
            >
              GARAGE
            </Typography>
          </div>
        </Styled.Section>
        <Divider size={32} color={"primary"} />
        <Styled.Section style={{ display: "flex", alignItems: "center" }}>
          <Icon name="immersive" size={32} style={{ marginRight: 4 }} />
          <Typography
            fontFamily={"condensed"}
            style={{ fontSize: 14 }}
            fontWeight={"bold"}
            color={"primary"}
            uppercase
          >
            VIEW immersive
          </Typography>
        </Styled.Section>
      </Styled.Section>
    ),
    link: "/",
    color: "yellow",
  },
  {
    item: (
      <Styled.Section>
        <Icon name="motorverse" />
      </Styled.Section>
    ),
    link: "/contact",
  },
  {
    item: (
      <Styled.Section>
        <Icon name="epic" />
      </Styled.Section>
    ),
    link: "/contact",
  },
  {
    item: (
      <Styled.Section>
        <Icon name="roblox" />
      </Styled.Section>
    ),
    link: "/contact",
  },
  {
    item: (
      <Styled.Section>
        <Icon name="ste" />
      </Styled.Section>
    ),
    link: "/contact",
  },
  {
    item: (
      <Styled.Section>
        <Icon name="storefront" />
      </Styled.Section>
    ),
    link: "/contact",
  },
];

export const Header: React.FC = () => {
  return (
    <>
      <Styled.Container as={"header"}>
        <Styled.Header>
          <Styled.Right>
            <Styled.Icons>
              <Icon name={"bull"} size={45} />
              <Divider gap={14} size={45} />
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
