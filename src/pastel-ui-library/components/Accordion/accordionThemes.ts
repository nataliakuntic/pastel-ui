import { ThemeName } from "../../types";

interface AccordionTheme {
  labelBg: string;
  contentBg: string;
  border: string;
}

export type AccordionThemeName = ThemeName | "default";

export const getAccordionThemeStyle = (
  themeName: AccordionThemeName
): AccordionTheme => {
  if (themeName === "default") {
    return {
      labelBg: "bg-default-dark",
      contentBg: "bg-default",
      border: "border-primary",
    };
  }
  return {
    labelBg: `bg-${themeName}`,
    contentBg: `bg-${themeName}-light`,
    border: `border-${themeName} border-2`,
  };
};
