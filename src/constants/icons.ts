import check from "assets/icons/check.svg";
import ffw from "assets/icons/ffw-logo.svg";
import bull from "assets/icons/bull.svg";
import play from "assets/icons/play.svg";
import x from "assets/icons/x.svg";
import discord from "assets/icons/discord.svg";
import tiktok from "assets/icons/tiktok.svg";
import down from "assets/icons/down.svg";
import animoca from "assets/images/animoca-logo.png";
import gravitas from "assets/icons/gravitas-logo.svg";
import playHover from "assets/icons/play-hover.svg";
import burgerClose from "assets/icons/burger-close.svg";
import burgerOpen from "assets/icons/burger-open.svg";
import hexagon from "assets/icons/hexagon.svg";

import ffwLogoBig from "assets/images/ffw-logo-big.svg";
import revueltoLogo from "assets/images/revuelto-logo.png";
import gtLogo from "assets/images/gt-logo.svg";

export const ICON_MAP = {
  check,
  ffw,
  bull,
  play,
  playHover,
  x,
  discord,
  tiktok,
  down,
  animoca,
  gravitas,
  burgerClose,
  burgerOpen,
  hexagon,

  ffwLogoBig,
  revueltoLogo,
  gtLogo,
};

export type TIcon = keyof typeof ICON_MAP;
