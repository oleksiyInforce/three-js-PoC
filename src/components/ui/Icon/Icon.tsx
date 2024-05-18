import { ICON_MAP, TIcon } from "constants/icons";
import React from "react";
import { IconStyled } from "./Icon.styled";
import { TColor } from "constants/theme";

interface IIconProps extends React.HTMLAttributes<HTMLImageElement> {
  color?: TColor;
  size?: number;
  name: TIcon;
  onClick?: () => void;
}

export const Icon: React.FC<IIconProps> = ({
  color,
  size,
  name,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <IconStyled
      src={ICON_MAP[name]}
      size={size}
      color={color}
      {...(onClick && { onClick: handleClick })}
      {...props}
    />
  );
};
