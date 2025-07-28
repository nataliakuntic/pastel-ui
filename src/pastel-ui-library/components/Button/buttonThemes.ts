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
  outlineFocus: string;
}

export const getButtonThemeStyle = (themeName: ThemeName): ButtonTheme => {
  return {
    text: `text-button-text`,
    textDisabled: `text-button-${themeName}-disabled-text`,
    textOnDark: `active:text-button-text-on-dark`,
    variants: {
      primary: {
        bg: `bg-button-${themeName}-primary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-button-${themeName}-disabled-stroke`,
        bgDisabled: `bg-button-${themeName}-disabled`,
        outlineFocus: `focus:outline-button-${themeName}-focus-outline`,
      },
      secondary: {
        bg: `bg-button-${themeName}-secondary`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-stroke`,
        borderDisabled: `border-button-${themeName}-disabled-stroke`,
        bgDisabled: `bg-button-${themeName}-disabled`,
        outlineFocus: `focus:outline-button-${themeName}-focus-outline`,
      },
      danger: {
        bg: `bg-button-danger`,
        bgHover: `hover:bg-button-${themeName}-hover`,
        bgActive: `active:bg-button-${themeName}-active`,
        border: `border-button-${themeName}-danger-stroke`,
        borderDisabled: `border-button-${themeName}-disabled-stroke`,
        bgDisabled: `bg-button-${themeName}-disabled`,
        outlineFocus: `focus:outline-button-${themeName}-focus-outline`,
      },
    },
  };
};
