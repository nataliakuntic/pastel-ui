import { ThemeName } from "../../types";

interface ButtonTheme {
  textDisabled: string;
  textOnDark?: string;
  variants: {
    primary: VariantStyle;
    secondary: VariantStyle;
    tertiary: VariantStyle;
    danger: VariantStyle;
  };
}

interface VariantStyle {
  text: string;
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
    textDisabled: `text-disabled-text`,
    textOnDark: `active:text-button-text-on-dark`,
    variants: {
      primary: {
        text: `text-default`,
        bg: `bg-button-${themeName}-primary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      secondary: {
        text: `text-button-text`,
        bg: `bg-button-${themeName}-secondary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      tertiary: {
        text: `text-button-text`,
        bg: `bg-button-${themeName}-tertiary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-disabled-border`,
        bgDisabled: `bg-disabled-bg`,
        ringFocus: `focus:ring-button-${themeName}-focus-ring`,
      },
      danger: {
        text: `text-button-text`,
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
