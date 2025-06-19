export interface ButtonTheme {
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
    outlineFoc: string;
  }
  
  export const ButtonThemes: Record<string, ButtonTheme> = {
    danger: {
      text: "text-button-text",
      textDisabled: "text-button-danger-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-danger-primary",
          bgHover: "hover:bg-button-danger-hover",
          bgActive: "active:bg-button-danger-active",
          border: "border-button-danger-stroke",
          borderDisabled: "border-button-danger-disabled-stroke",
          outlineFoc: "focus:outline-button-danger-focus-outline",
        },
        secondary: {
          bg: "bg-button-danger-secondary",
          bgHover: "hover:bg-button-danger-hover",
          bgActive: "active:bg-button-danger-active",
          border: "border-button-danger-stroke",
          borderDisabled: "border-button-danger-disabled-stroke",
          outlineFoc: "focus:outline-button-danger-focus-outline",
        },
        danger: {
          bg: "bg-button-delete",
          bgHover: "hover:bg-button-danger-hover",
          bgActive: "active:bg-button-danger-active",
          border: "border-button-danger-delete-stroke",
          borderDisabled: "border-button-danger-disabled-stroke",
          outlineFoc: "focus:outline-button-danger-focus-outline",
        },
      },
    },
  
    success: {
      text: "text-button-text",
      textDisabled: "text-button-success-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-success-primary",
          bgHover: "hover:bg-button-success-hover",
          bgActive: "active:bg-button-success-active",
          border: "border-button-success-stroke",
          borderDisabled: "border-button-success-disabled-stroke",
          outlineFoc: "focus:outline-button-success-focus-outline",
        },
        secondary: {
          bg: "bg-button-success-secondary",
          bgHover: "hover:bg-button-success-hover",
          bgActive: "active:bg-button-success-active",
          border: "border-button-success-stroke",
          borderDisabled: "border-button-success-disabled-stroke",
          outlineFoc: "focus:outline-button-success-focus-outline",
        },
        danger: {
          bg: "bg-button-delete",
          bgHover: "hover:bg-button-success-hover",
          bgActive: "active:bg-button-success-active",
          border: "border-button-success-delete-stroke",
          borderDisabled: "border-button-success-disabled-stroke",
          outlineFoc: "focus:outline-button-success-focus-outline",
        },
      },
    },
  
    warning: {
      text: "text-button-text",
      textDisabled: "text-button-warning-disabled-text",
      variants: {
        primary: {
          bg: "bg-button-warning-primary",
          bgHover: "hover:bg-button-warning-hover",
          bgActive: "active:bg-button-warning-active",
          border: "border-button-warning-stroke",
          borderDisabled: "border-button-warning-disabled-stroke",
          outlineFoc: "focus:outline-button-warning-focus-outline",
        },
        secondary: {
          bg: "bg-button-warning-secondary",
          bgHover: "hover:bg-button-warning-hover",
          bgActive: "active:bg-button-warning-active",
          border: "border-button-warning-stroke",
          borderDisabled: "border-button-warning-disabled-stroke",
          outlineFoc: "focus:outline-button-warning-focus-outline",
        },
        danger: {
          bg: "bg-button-delete",
          bgHover: "hover:bg-button-warning-hover",
          bgActive: "active:bg-button-warning-active",
          border: "border-button-warning-delete-stroke",
          borderDisabled: "border-button-warning-disabled-stroke",
          outlineFoc: "focus:outline-button-warning-focus-outline",
        },
      },
    },
  
    info: {
      text: "text-button-text",
      textDisabled: "text-button-info-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-info-primary",
          bgHover: "hover:bg-button-info-hover",
          bgActive: "active:bg-button-info-active",
          border: "border-button-info-stroke",
          borderDisabled: "border-button-info-disabled-stroke",
          outlineFoc: "focus:outline-button-info-focus-outline",
        },
        secondary: {
          bg: "bg-button-info-secondary",
          bgHover: "hover:bg-button-info-hover",
          bgActive: "active:bg-button-info-active",
          border: "border-button-info-stroke",
          borderDisabled: "border-button-info-disabled-stroke",
          outlineFoc: "focus:outline-button-info-focus-outline",
        },
        danger: {
          bg: "bg-button-delete",
          bgHover: "hover:bg-button-info-hover",
          bgActive: "active:bg-button-info-active",
          border: "border-button-info-delete-stroke",
          borderDisabled: "border-button-info-disabled-stroke",
          outlineFoc: "focus:outline-button-info-focus-outline",
        },
      },
    },
  
    muted: {
      text: "text-button-text",
      textDisabled: "text-button-muted-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-muted-primary",
          bgHover: "hover:bg-button-muted-hover",
          bgActive: "active:bg-button-muted-active",
          border: "border-button-muted-stroke",
          borderDisabled: "border-button-muted-disabled-stroke",
          outlineFoc: "focus:outline-button-muted-focus-outline",
        },
        secondary: {
          bg: "bg-button-muted-secondary",
          bgHover: "hover:bg-button-muted-hover",
          bgActive: "active:bg-button-muted-active",
          border: "border-button-muted-stroke",
          borderDisabled: "border-button-muted-disabled-stroke",
          outlineFoc: "focus:outline-button-muted-focus-outline",
        },
        danger: {
          bg: "bg-button-muted-danger",
          bgHover: "hover:bg-button-muted-hover",
          bgActive: "active:bg-button-muted-active",
          border: "border-button-muted-delete-stroke",
          borderDisabled: "border-button-muted-disabled-stroke",
          outlineFoc: "focus:outline-button-muted-focus-outline",
        },
      },
    },
  };
  
  export function getClassesForVariant(
    theme: ButtonTheme,
    variant: keyof ButtonTheme["variants"]
  ) {
    const variantStyles = theme.variants[variant];
    return {
      text: theme.text,
      textDisabled: theme.textDisabled,
      textOnDark: theme.textOnDark ?? "",
      ...variantStyles,
    };
  }
  