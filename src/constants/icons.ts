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
import polygon from "assets/icons/polygon.png";

import ffwLogoBig from "assets/images/ffw-logo-big.svg";
import revueltoLogo from "assets/images/revuelto-logo.png";
import gtLogo from "assets/images/gt-logo.svg";

import epic from "assets/icons/header/epic.svg";
import motorverse from "assets/icons/header/motorverse.svg";
import storefront from "assets/icons/header/storefront.svg";
import garage from "assets/icons/header/garage.svg";
import immersive from "assets/icons/header/immersive.svg";
import ste from "assets/icons/header/ste.png";
import bell from "assets/icons/header/bell.svg";
import share from "assets/icons/header/share.svg";
import userPic from "assets/icons/header/user-pic.png";
import logOut from "assets/icons/header/log-out.svg";
import roblox from "assets/icons/header/roblox.svg";

import discordFooter from "assets/icons/footer/discord-footer.svg";
import messageFooter from "assets/icons/footer/message-footer.svg";
import videoFooter from "assets/icons/footer/video-footer.svg";

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
  polygon,

  ffwLogoBig,
  revueltoLogo,
  gtLogo,

  epic,
  motorverse,
  storefront,
  garage,
  immersive,
  ste,
  roblox,
  bell,
  share,
  userPic,
  logOut,

  discordFooter,
  messageFooter,
  videoFooter,
};

export type TIcon = keyof typeof ICON_MAP;
