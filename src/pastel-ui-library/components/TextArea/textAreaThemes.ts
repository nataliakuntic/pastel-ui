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
    border:
      themeName === "pistachio"
        ? `border-pistachio-border border-[1.75px]`
        : `border-${themeName} border-[1.75px]`,
    background: `bg-default py-4 px-3`,
    text: `text-input-text`,
    borderDisabled: `border-disabled-border border-[1.75px]`,
    bgDisabled: `bg-disabled-bg py-4 px-3`,
    labelTextDisabled: `text-disabled-text font-inter font-medium leading-[1.55] text-[15px]`,
    labelText: `text-label-text font-inter font-medium leading-[1.55] text-[15px]`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring focus:shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.04)]`,
    placeholderDisabled: "placeholder:text-disabled-placeholder",
  };
};
