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
  themeName: ThemeName
): RadiobuttonTheme => {
  return {
    legendText: `text-radio-legend-${themeName} font-inter font-semibold`,
    labelText: `text-input-text`,
    border: `border-radio-${themeName}`,
    ringFocus: `focus:ring-${themeName}`,
    hoverBg: `group-hover:bg-radio-hover-${themeName}`,
    dotChecked: `peer-checked:bg-radio-${themeName}`,
    legendDisabled: `text-radio-disabled-${themeName} font-inter font-semibold`,
    labelDisabled: `text-radio-text-disabled`,
    borderDisabled: `border-radio-disabled-${themeName}`,
    dotDisabled: `bg-radio-disabled-${themeName}`,
  };
};
