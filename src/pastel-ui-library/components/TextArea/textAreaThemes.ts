import { ThemeName } from "../../types";

export interface TextAreaTheme {
  border: string;
  background: string;
  text: string;
  borderDisabled: string;
  bgDisabled: string;
  labelTextDisabled: string;
  labelText: string;
  ringFocus: string;
  placeholderDisabled: string;
}

export const getTextAreaThemeStyle = (themeName: ThemeName): TextAreaTheme => {
  return {
    border: `border-${themeName} border-2`,
    background: `bg-default p-3`,
    text: `text-input-text`,
    borderDisabled: `border-disabled-border border-2`,
    bgDisabled: `bg-disabled-bg p-3`,
    labelTextDisabled: `text-disabled-text font-inter font-semibold`,
    labelText: `text-labeltext-${themeName} font-inter font-semibold`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring`,
    placeholderDisabled: "placeholder:text-disabled-placeholder",
  };
};
