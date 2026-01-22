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
    legendText: `text-radio-legend-${themeName} font-inter font-semibold`,
    labelText: `text-input-text`,
    border: `border-radio-${themeName}`,
    ringFocus: `focus:ring-${themeName}`,
    hoverBg: `group-hover:bg-radio-hover-${themeName}`,
    dotChecked: `peer-checked:bg-radio-${themeName}`,
    legendDisabled: `text-disabled-text font-inter font-semibold`,
    labelDisabled: `text-disabled-text`,
    borderDisabled: `border-disabled-text`,
    dotDisabled: `bg-disabled-text`,
  };
};
