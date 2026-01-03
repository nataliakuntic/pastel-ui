import { ThemeName } from "../../types";

export interface RadiobuttonTheme {
  legendText: string;
  labelText: string;
  border: string;
  dotChecked: string;
  ringFocus: string;
  hoverBg: string;
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
    borderDisabled: `border-checkbox-${themeName}-disabled`, //to handle
    dotDisabled: `peer-checked:bg-checkbox-${themeName}-disabled`, //to handle
  };
};
