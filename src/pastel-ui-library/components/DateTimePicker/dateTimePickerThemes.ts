import { ThemeName } from "../../types";

export interface DateTimePickerTheme {
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

export const getDateTimePickerThemeStyle = (
  themeName: ThemeName,
): DateTimePickerTheme => {
  return {
    border:
      themeName === "pistachio"
        ? `border-pistachio-border border-[1.75px]`
        : `border-${themeName} border-[1.75px]`,
    background: `bg-default py-[10px] px-[12px]`,
    text: `text-input-text`,
    textDisabled: `text-disabled-text`,
    borderDisabled: `border-disabled-border border-[1.75px]`,
    bgDisabled: `bg-disabled-bg py-[10px] px-[12px]`,
    labelTextDisabled: `text-disabled-text font-inter font-medium leading-[1.35] text-[15px]`,
    labelText: `text-label-text font-inter font-medium leading-[1.35] text-[15px]`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring focus:shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.04)]`,
  };
};
