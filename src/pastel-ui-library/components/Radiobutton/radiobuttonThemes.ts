import { ThemeName } from "../../types";

export interface RadiobuttonTheme {
  legendText: string;
  labelText: string;
  border: string;
  dotChecked: string;
  ringFocus: string;
  hoverBg: string;
  legendDisabled: string;
  labelDisabled: string;
  borderDisabled: string;
  dotDisabled: string;
}

export const getRadiobuttonThemeStyle = (
  themeName: ThemeName,
): RadiobuttonTheme => {
  return {
    legendText: `text-label-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    labelText: `text-input-text/90 font-inter font-normal`,
    border: `border-radio-${themeName} border-[1.75px]`,
    ringFocus:
      themeName === "boutique"
        ? `focus:ring-radio-boutique-focus-ring`
        : `focus:ring-${themeName}`,
    hoverBg: `group-hover:bg-radio-hover-${themeName}`,
    dotChecked: `peer-checked:bg-radio-${themeName}`,
    legendDisabled: `text-disabled-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    labelDisabled: `text-disabled-text font-inter font-normal`,
    borderDisabled: `border-disabled-text border-[1.75px]`,
    dotDisabled: `bg-disabled-text`,
  };
};
