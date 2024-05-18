import React from "react";

import { ArrowButtonWrapper } from "./ArrowButton.styled";
import { Link } from "react-router-dom";

type TArrowButtonName = "play" | "right" | "left";

interface IArrowButtonProps {
  name: TArrowButtonName;
  size: number;
  onClick?: () => void;
  href?: string;
}

const variants = {
  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path d="M40 9L12.5 24L13 55.5L40 71.5L67.5 55.5V24L40 9Z" fill="white" />
      <path
        d="M33.3334 53.2667V26.7334L52.2868 40L33.3334 53.2667ZM35.0001 29.9334V50.0667L49.3801 40L35.0001 29.9334ZM40.0001 72.6284L11.6667 56.3167V23.685L40.0001 7.3717L68.3334 23.685V56.315L40.0001 72.6284ZM13.3334 55.3517L40.0001 70.705L66.6668 55.3517V24.6484L40.0001 9.29504L13.3334 24.65V55.3534V55.3517Z"
        fill="white"
      />
      <path
        d="M33.3335 53.2666V26.7333L52.2868 39.9999L33.3335 53.2666ZM35.0002 29.9333V50.0666L49.3802 39.9999L35.0002 29.9333Z"
        fill="black"
      />
    </svg>
  ),
  right: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path d="M40 9L12.5 24L13 55.5L40 71.5L67.5 55.5V24L40 9Z" fill="white" />
      <path d="M40 9L12.5 24L13 55.5L40 71.5L67.5 55.5V24L40 9Z" fill="white" />
      <path
        d="M36.4235 53.0901L35.2451 51.9117L47.1551 40.0001L35.2451 28.0901L36.4235 26.9117L49.5101 40.0001L36.4201 53.0901H36.4235Z"
        fill="black"
      />
    </svg>
  ),
  left: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M43.5767 26.91L44.755 28.0883L32.845 40L44.755 51.91L43.5767 53.0883L30.49 40L43.58 26.91L43.5767 26.91ZM11.6667 23.6866L11.6667 56.315L40 72.6283L68.3334 56.3166L68.3334 23.6866L40 7.3733L11.6667 23.6866ZM66.6667 55.3533L40 70.7066L13.3334 55.3533L13.3334 24.65L40 9.29663L66.6667 24.65L66.6667 55.3533Z"
        fill="white"
      />
      <path
        d="M40 71L67.5 56L67 24.5L40 8.5L12.5 24.5L12.5 56L40 71Z"
        fill="white"
      />
      <path
        d="M43.5765 26.9099L44.7549 28.0883L32.8449 39.9999L44.7549 51.9099L43.5765 53.0883L30.4899 39.9999L43.5799 26.9099L43.5765 26.9099Z"
        fill="black"
      />
    </svg>
  ),
};

export const ArrowButton: React.FC<IArrowButtonProps> = ({
  name,
  size,
  onClick,
  href,
}) => {
  const conditionalProps = {
    ...(onClick && { onClick }),
    ...(href && { as: Link, to: href }),
  };

  return (
    <ArrowButtonWrapper {...conditionalProps} size={size}>
      {variants[name]}
    </ArrowButtonWrapper>
  );
};
