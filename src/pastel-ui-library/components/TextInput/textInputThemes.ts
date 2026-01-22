import { ThemeName } from "../../types";

export interface TextInputTheme {
  border: string;
  background: string;
  text: string;
  textDisabled: string;
  borderDisabled: string;
  bgDisabled: string;
  labelText: string;
  labelTextDisabled: string;
  ringFocus: string;
}

export const getTextInputThemeStyle = (
  themeName: ThemeName,
): TextInputTheme => {
  return {
    border: `border-${themeName} border-2`,
    background: `bg-default p-3`,
    text: `text-input-text`,
    textDisabled: `text-disabled-text`,
    borderDisabled: `border-disabled-border border-2`,
    bgDisabled: `bg-disabled-bg p-3`,
    labelText: `text-labeltext-${themeName} font-inter font-semibold`,
    labelTextDisabled: `text-disabled-text font-inter font-semibold`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring`,
  };
};
