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
    bgDisabled: string;
    outlineFocus: string;
  }
  
  export const ButtonThemes: Record<string, ButtonTheme> = {
    dustyrose: {
      text: "text-button-text",
      textDisabled: "text-button-dustyrose-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-dustyrose-primary",
          bgHover: "hover:bg-button-dustyrose-hover",
          bgActive: "active:bg-button-dustyrose-active",
          border: "border-button-dustyrose-stroke",
          borderDisabled: "border-button-dustyrose-disabled-stroke",
          bgDisabled: "bg-button-dustyrose-disabled",
          outlineFocus: "focus:outline-button-dustyrose-focus-outline",
        },
        secondary: {
          bg: "bg-button-dustyrose-secondary",
          bgHover: "hover:bg-button-dustyrose-hover",
          bgActive: "active:bg-button-dustyrose-active",
          border: "border-button-dustyrose-stroke",
          borderDisabled: "border-button-dustyrose-disabled-stroke",
          bgDisabled: "bg-button-dustyrose-disabled",
          outlineFocus: "focus:outline-button-dustyrose-focus-outline",
        },
        danger: {
          bg: "bg-button-danger",
          bgHover: "hover:bg-button-dustyrose-hover",
          bgActive: "active:bg-button-dustyrose-active",
          border: "border-button-dustyrose-danger-stroke",
          borderDisabled: "border-button-dustyrose-disabled-stroke",
          bgDisabled: "bg-button-dustyrose-disabled",
          outlineFocus: "focus:outline-button-dustyrose-focus-outline",
        },
      },
    },
  
    pistacchio: {
      text: "text-button-text",
      textDisabled: "text-button-pistacchio-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-pistacchio-primary",
          bgHover: "hover:bg-button-pistacchio-hover",
          bgActive: "active:bg-button-pistacchio-active",
          border: "border-button-pistacchio-stroke",
          borderDisabled: "border-button-pistacchio-disabled-stroke",
          bgDisabled: "bg-button-pistacchio-disabled",
          outlineFocus: "focus:outline-button-pistacchio-focus-outline",
        },
        secondary: {
          bg: "bg-button-pistacchio-secondary",
          bgHover: "hover:bg-button-pistacchio-hover",
          bgActive: "active:bg-button-pistacchio-active",
          border: "border-button-pistacchio-stroke",
          borderDisabled: "border-button-pistacchio-disabled-stroke",
          bgDisabled: "bg-button-pistacchio-disabled",
          outlineFocus: "focus:outline-button-pistacchio-focus-outline",
        },
        danger: {
          bg: "bg-button-danger",
          bgHover: "hover:bg-button-pistacchio-hover",
          bgActive: "active:bg-button-pistacchio-active",
          border: "border-button-pistacchio-danger-stroke",
          borderDisabled: "border-button-pistacchio-disabled-stroke",
          bgDisabled: "bg-button-pistacchio-disabled",
          outlineFocus: "focus:outline-button-pistacchio-focus-outline",
        },
      },
    },
  
    honey: {
      text: "text-button-text",
      textDisabled: "text-button-honey-disabled-text",
      variants: {
        primary: {
          bg: "bg-button-honey-primary",
          bgHover: "hover:bg-button-honey-hover",
          bgActive: "active:bg-button-honey-active",
          border: "border-button-honey-stroke",
          borderDisabled: "border-button-honey-disabled-stroke",
          bgDisabled: "bg-button-honey-disabled",
          outlineFocus: "focus:outline-button-honey-focus-outline",
        },
        secondary: {
          bg: "bg-button-honey-secondary",
          bgHover: "hover:bg-button-honey-hover",
          bgActive: "active:bg-button-honey-active",
          border: "border-button-honey-stroke",
          borderDisabled: "border-button-honey-disabled-stroke",
          bgDisabled: "bg-button-honey-disabled",
          outlineFocus: "focus:outline-button-honey-focus-outline",
        },
        danger: {
          bg: "bg-button-danger",
          bgHover: "hover:bg-button-honey-hover",
          bgActive: "active:bg-button-honey-active",
          border: "border-button-honey-danger-stroke",
          borderDisabled: "border-button-honey-disabled-stroke",
          bgDisabled: "bg-button-honey-disabled",
          outlineFocus: "focus:outline-button-honey-focus-outline",
        },
      },
    },
  
    aquafrost: {
      text: "text-button-text",
      textDisabled: "text-button-aquafrost-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-aquafrost-primary",
          bgHover: "hover:bg-button-aquafrost-hover",
          bgActive: "active:bg-button-aquafrost-active",
          border: "border-button-aquafrost-stroke",
          borderDisabled: "border-button-aquafrost-disabled-stroke",
          bgDisabled: "bg-button-aquafrost-disabled",
          outlineFocus: "focus:outline-button-aquafrost-focus-outline",
        },
        secondary: {
          bg: "bg-button-aquafrost-secondary",
          bgHover: "hover:bg-button-aquafrost-hover",
          bgActive: "active:bg-button-aquafrost-active",
          border: "border-button-aquafrost-stroke",
          borderDisabled: "border-button-aquafrost-disabled-stroke",
          bgDisabled: "bg-button-aquafrost-disabled",
          outlineFocus: "focus:outline-button-aquafrost-focus-outline",
        },
        danger: {
          bg: "bg-button-danger",
          bgHover: "hover:bg-button-aquafrost-hover",
          bgActive: "active:bg-button-aquafrost-active",
          border: "border-button-aquafrost-danger-stroke",
          borderDisabled: "border-button-aquafrost-disabled-stroke",
          bgDisabled: "bg-button-aquafrost-disabled",
          outlineFocus: "focus:outline-button-aquafrost-focus-outline",
        },
      },
    },
  
    lilac: {
      text: "text-button-text",
      textDisabled: "text-button-lilac-disabled-text",
      textOnDark: "active:text-button-text-on-dark",
      variants: {
        primary: {
          bg: "bg-button-lilac-primary",
          bgHover: "hover:bg-button-lilac-hover",
          bgActive: "active:bg-button-lilac-active",
          border: "border-button-lilac-stroke",
          borderDisabled: "border-button-lilac-disabled-stroke",
          bgDisabled: "bg-button-lilac-disabled",
          outlineFocus: "focus:outline-button-lilac-focus-outline",
        },
        secondary: {
          bg: "bg-button-lilac-secondary",
          bgHover: "hover:bg-button-lilac-hover",
          bgActive: "active:bg-button-lilac-active",
          border: "border-button-lilac-stroke",
          borderDisabled: "border-button-lilac-disabled-stroke",
          bgDisabled: "bg-button-lilac-disabled",
          outlineFocus: "focus:outline-button-lilac-focus-outline",
        },
        danger: {
          bg: "bg-button-lilac-danger",
          bgHover: "hover:bg-button-lilac-hover",
          bgActive: "active:bg-button-lilac-active",
          border: "border-button-lilac-danger-stroke",
          borderDisabled: "border-button-lilac-disabled-stroke",
          bgDisabled: "bg-button-lilac-disabled",
          outlineFocus: "focus:outline-button-lilac-focus-outline",
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
  