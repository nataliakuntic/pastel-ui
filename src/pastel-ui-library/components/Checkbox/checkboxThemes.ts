import { ThemeName } from "../../types";

export interface CheckboxTheme {
  borderDisabled: string;
  bgDisabled: string;
  iconCheckedDisabled: string;
  labelText: string;
  variants: {
    light: CheckboxVariant;
    dark: CheckboxVariant;
  };
}

export interface CheckboxVariant {
  border: string;
  bgUnchecked: string;
  bgChecked: string;
  iconChecked: string;
  ringFocus: string;
}

export const getCheckboxThemeStyle = (themeName: ThemeName): CheckboxTheme => {
  return {
    borderDisabled: `border-disabled-border border-[1.75px]`,
    bgDisabled: `bg-disabled-bg`,
    iconCheckedDisabled: `text-disabled-text`,
    labelText: `text-input-text`,
    variants: {
      light: {
        border: `border-checkbox-border-${themeName} border-[1.75px]`,
        bgUnchecked: `bg-default`,
        bgChecked: `bg-checkbox-bg-checked-${themeName}`,
        iconChecked: `text-checkbox-checkmark-${themeName}`,
        ringFocus: `focus:ring-checkbox-ring-${themeName}`,
      },
      dark: {
        border: `border-checked-dark-${themeName} border-[1.75px]`,
        bgUnchecked: `bg-default`,
        bgChecked: `bg-checked-dark-${themeName}`,
        iconChecked: `text-default`,
        ringFocus: `focus:ring-${themeName}`,
      },
    },
  };
};
