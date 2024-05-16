import React from "react";

import { HeaderStyled as Styled } from "./Header.styled";
import { Icon } from "components/ui/Icon/Icon";
import { Divider } from "components/ui/Divider/Divider";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "the experience",
    link: "/experience",
  },
  {
    name: "partners",
    link: "/partners",
  },
];

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Styled.Container as={"header"}>
        <Styled.Header>
          <Styled.Icons>
            <Icon name={"bull"} size={45} />
            <Divider gap={28} size={45} />
            <Icon name={"ffw"} size={45} />
          </Styled.Icons>
          <Styled.Nav>
            {routes.map((route, index) => (
              <Styled.Link
                key={index}
                $active={location.pathname === route.link}
                fontSize={"sm"}
                fontWeight="thin"
                as={Link}
                to={route.link}
              >
                {route.name}
              </Styled.Link>
            ))}
            <Styled.Button variant="primary">pre-register</Styled.Button>
          </Styled.Nav>
        </Styled.Header>
      </Styled.Container>
      <Styled.Spacing />
    </>
  );
};
