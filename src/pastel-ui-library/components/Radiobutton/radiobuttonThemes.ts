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
    legendText: `text-label-text font-inter font-medium leading-[1.35] text-[15px]`,
    labelText: `text-input-text`,
    border: `border-radio-${themeName} border-[1.75px]`,
    ringFocus: `focus:ring-${themeName}`,
    hoverBg: `group-hover:bg-radio-hover-${themeName}`,
    dotChecked: `peer-checked:bg-radio-${themeName}`,
    legendDisabled: `text-disabled-text font-inter font-medium leading-[1.35] text-[15px]`,
    labelDisabled: `text-disabled-text`,
    borderDisabled: `border-disabled-text border-[1.75px]`,
    dotDisabled: `bg-disabled-text`,
  };
};
