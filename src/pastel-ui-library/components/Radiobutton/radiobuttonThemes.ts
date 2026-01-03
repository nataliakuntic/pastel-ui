import { ThemeName } from "../../types";

export interface RadiobuttonTheme {
  border: string;
  dotChecked: string;
  ringFocus: string;
  borderDisabled: string;
  dotDisabled: string;
}

export const getRadiobuttonThemeStyle = (
  themeName: ThemeName
): RadiobuttonTheme => {
  return {
    border: `border-checked-dark-${themeName}`,
    ringFocus: `focus:ring-${themeName}`,
    dotChecked: `peer-checked:bg-checked-dark-${themeName}`,
    borderDisabled: `border-checkbox-${themeName}-disabled`,
    dotDisabled: `peer-checked:bg-checkbox-${themeName}-disabled`,
  };
};
