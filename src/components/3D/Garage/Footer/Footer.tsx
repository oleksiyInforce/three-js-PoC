import React from "react";

import { FooterStyled as Styled } from "./Footer.styled";
import { IMAGES_MAP } from "constants/images";
import { Icon } from "components/ui/Icon/Icon";
import { Typography } from "components/ui/Typography/Typography";
import { Divider } from "components/ui/Divider/Divider";

interface IFooterProps {
  models: any[];
  switchCar: (e: any) => void;
  selectedIndex?: number;
}

const buttons = ["wallet", "cars", "passes", "locker", "rewards"];

export const GarageFooter: React.FC<IFooterProps> = ({
  models,
  switchCar,
  selectedIndex,
}) => {
  const handleClick = () => {
    switchCar("forward");
  };

  console.log("selectedIndex", selectedIndex);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Left>
          <Styled.ButtonWrapper>
            {buttons.map((button) => (
              <Styled.ButtonContent>
                <Styled.Button variant={button === "cars" ? "primary" : "dark"}>
                  {button}
                </Styled.Button>
                {button === "cars" && (
                  <>
                    <Styled.Hexagon>
                      <Icon name="polygon" />
                    </Styled.Hexagon>
                    <Styled.CarWrapper style={{ gap: 0 }}>
                      <Typography
                        fontSize={"sm"}
                        fontWeight={"normal"}
                        uppercase
                        color={selectedIndex !== 0 ? "white" : "accent-100"}
                        onClick={handleClick}
                      >
                        Revuelto
                      </Typography>
                      <Divider size={16} />
                      <Typography
                        fontSize={"sm"}
                        fontWeight={"normal"}
                        uppercase
                        color={selectedIndex === 0 ? "white" : "accent-100"}
                        onClick={handleClick}
                      >
                        Revuelto Squadra Corse
                      </Typography>
                    </Styled.CarWrapper>
                  </>
                )}
              </Styled.ButtonContent>
            ))}
          </Styled.ButtonWrapper>
        </Styled.Left>

        <Styled.Scroll src={IMAGES_MAP.footerScroll} />

        <Styled.ButtonWrapper style={{ gap: 0 }}>
          <Icon name="discordFooter" />
          <Divider size={24} />
          <Icon name="videoFooter" />
          <Divider size={24} />
          <Icon name="messageFooter" />
          <Divider size={24} />
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
