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
  const borderColor =
    themeName === "pistachio"
      ? "border-pistachio-border"
      : `border-${themeName}`;

  const borderWidth =
    themeName === "boutique" ? "border-[1.25px]" : "border-[1.75px]";

  return {
    border: `${borderColor} ${borderWidth}`,
    background: `bg-default py-4 px-3`,
    text: `text-input-text/90 font-inter font-normal`,
    borderDisabled: `border-disabled-border border-[1.75px]`,
    bgDisabled: `bg-disabled-bg py-4 px-3`,
    labelTextDisabled: `text-disabled-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    labelText: `text-label-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring focus:shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.04)]`,
    placeholderDisabled: "placeholder:text-disabled-placeholder",
  };
};
