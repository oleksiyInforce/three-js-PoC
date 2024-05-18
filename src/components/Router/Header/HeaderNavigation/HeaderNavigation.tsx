import React from "react";
import { THeaderSection } from "types/header";

import { HeaderNavigationWrapper } from "./HeaderNavigation.styled";
import { NavigationItem } from "./NavigationItem/NavigationItem";

interface IHeaderNavigationProps {
  sections: THeaderSection[];
}

export const HeaderNavigation: React.FC<IHeaderNavigationProps> = ({
  sections,
}) => {
  return (
    <HeaderNavigationWrapper>
      {sections.map((section, index) => (
        <NavigationItem
          color={section.color}
          children={section.item}
          key={section.link}
        />
      ))}
    </HeaderNavigationWrapper>
  );
};
