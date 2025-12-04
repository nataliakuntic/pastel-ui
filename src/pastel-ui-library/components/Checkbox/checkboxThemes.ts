import { ThemeName } from "../../types";

export interface CheckboxTheme {
  borderDisabled: string;
  bgDisabled: string;
  iconCheckedDisabled: string;
  variants: {
    light: CheckboxVariant;
    dark: CheckboxVariant;
  };
}

export interface CheckboxVariant {
  border: string;
  bg: string;
  iconChecked: string;
  ringFocus: string;
}

export const getCheckboxThemeStyle = (themeName: ThemeName): CheckboxTheme => {
  return {
    borderDisabled: `border-border-disabled`,
    bgDisabled: `bg-background-disabled`,
    iconCheckedDisabled: `text-border-disabled`,
    variants: {
      light: {
        border: `border-${themeName}`,
        bg: `bg-default`,
        iconChecked: `text-${themeName}`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      dark: {
        border: `border-${themeName}`,
        bg: `bg-checked-dark-${themeName}`,
        iconChecked: `text-default`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
    },
  };
};
