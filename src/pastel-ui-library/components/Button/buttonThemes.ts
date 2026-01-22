import { ThemeName } from "../../types";

interface ButtonTheme {
  text: string;
  textDisabled: string;
  textOnDark?: string;
  variants: {
    primary: VariantStyle;
    secondary: VariantStyle;
    danger: VariantStyle;
  };
}

interface VariantStyle {
  bg: string;
  bgHover: string;
  bgActive: string;
  border: string;
  borderDisabled: string;
  bgDisabled: string;
  ringFocus: string;
}

export const getButtonThemeStyle = (themeName: ThemeName): ButtonTheme => {
  return {
    text: `text-button-text`,
    textDisabled: `text-disabled-text`,
    textOnDark: `active:text-button-text-on-dark`,
    variants: {
      primary: {
        bg: `bg-button-${themeName}-primary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      secondary: {
        bg: `bg-button-${themeName}-secondary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      danger: {
        bg: `bg-button-danger`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-danger-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
    },
  };
};
