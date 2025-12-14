import { ThemeName } from "../../types";

export interface TextInputTheme {
  border: string;
  background: string;
  borderDisabled: string;
  bgDisabled: string;
  labelText: string;
  ringFocus: string;
}

export const getTextInputThemeStyle = (
  themeName: ThemeName
): TextInputTheme => {
  return {
    border: `border-${themeName} border-2`,
    background: `bg-default p-3`,
    borderDisabled: `border-${themeName} border-2`,
    bgDisabled: `bg-input-${themeName}-disabled p-3`,
    labelText: `text-labeltext-${themeName} font-inter font-semibold`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring`,
  };
};
