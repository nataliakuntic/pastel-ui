import { ThemeName } from "../../types";

export interface DateTimePickerTheme {
  border: string;
  background: string;
  hoverBg: string;
  text: string;
  textDisabled: string;
  borderDisabled: string;
  bgDisabled: string;
  labelText: string;
  labelTextDisabled: string;
  ringFocus: string;
}

export const getDateTimePickerThemeStyle = (
  themeName: ThemeName
): DateTimePickerTheme => {
  return {
    border: `border-${themeName} border-2`,
    background: `bg-default p-3`,
    text: `text-input-text`,
    textDisabled: `text-disabled-text`,
    hoverBg: `hover:bg-select-hover-${themeName}`,
    borderDisabled: `border-disabled-border border-2`,
    bgDisabled: `bg-disabled-bg p-3`,
    labelTextDisabled: `text-disabled-text font-inter font-semibold`,
    labelText: `text-labeltext-${themeName} font-inter font-semibold`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring`,
  };
};
