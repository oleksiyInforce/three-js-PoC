import React from "react";

import { FooterStyled as Styled } from "./Footer.styled";

interface IFooterProps {
  models: any[];
  switchCar: (e: any) => void;
}

export const GarageFooter: React.FC<IFooterProps> = ({ models, switchCar }) => {
  const handleClick = () => {
    switchCar("forward");
  };

  return (
    <Styled.Container>
      {models.map((index) => (
        <button onClick={handleClick}>{index} car</button>
      ))}
    </Styled.Container>
  );
};
