import { ThemeName } from "../../types";

export interface SelectTheme {
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

export const getSelectThemeStyle = (themeName: ThemeName): SelectTheme => {
  const borderColor =
    themeName === "pistachio"
      ? "border-pistachio-border"
      : `border-${themeName}`;

  const borderWidth =
    themeName === "boutique" ? "border-[1.25px]" : "border-[1.75px]";

  return {
    border: `${borderColor} ${borderWidth}`,
    background: `bg-default py-[11px] px-[12px]`,
    text: `text-input-text/90 font-inter font-normal`,
    textDisabled: `text-disabled-text font-inter font-normal`,
    borderDisabled: `border-disabled-border border-[1.75px]`,
    bgDisabled: `bg-disabled-bg py-[10px] px-[12px]`,
    labelTextDisabled: `text-disabled-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    labelText: `text-label-text font-inter uppercase font-light text-[13px] tracking-[0.12em]`,
    ringFocus: `focus:ring-input-${themeName}-focus-ring`,
  };
};
