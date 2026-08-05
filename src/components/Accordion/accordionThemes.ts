import { ThemeName } from "../../types";

interface AccordionTheme {
  labelBg: string;
  contentBg: string;
  border: string;
}

export type AccordionThemeName = ThemeName | "default";

export const getAccordionThemeStyle = (
  themeName: AccordionThemeName,
): AccordionTheme => {
  if (themeName === "default") {
    return {
      labelBg: "bg-default-dark text-label-text font-semibold font-inter",
      contentBg: "bg-default text-description font-light font-inter leading-7",
      border: "border-primary",
    };
  }

  if (themeName === "boutique") {
    return {
      labelBg: "bg-accordion-boutique text-label-text font-semibold font-inter",
      contentBg:
        "bg-boutique-light text-description font-light font-inter leading-7",
      border: "border-accordion-boutique border-[1.75px]",
    };
  }

  return {
    labelBg: `bg-${themeName} text-label-text font-semibold font-inter`,
    contentBg: `bg-${themeName}-light text-description font-light font-inter leading-7`,
    border: `border-${themeName} border-[1.75px]`,
  };
};
