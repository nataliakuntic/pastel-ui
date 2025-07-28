import { ThemeName } from "../../types";

interface BaseCard {
  title: string | number | React.ReactNode;
  subtitle: string | number | React.ReactNode;
}

interface SmallCard {
  description?: string | number | React.ReactNode;
}

interface MediumCard {
  description: string | number | React.ReactNode;
  containerClasses: string;
  expandedDetails?: React.ReactNode;
  inlineButton?: {
    text: string;
    hoverBg: string;
    hoverText: string;
  };
}

interface LargeCard {
  description: string | number | React.ReactNode;
  containerClasses: string;
  expandedDetails: string | number | React.ReactNode;
  inlineButton: {
    text: string;
    hoverBg: string;
    hoverText: string;
  };
}

export interface CardTheme extends BaseCard {
  variants: {
    small: SmallCard;
    medium: MediumCard;
    large: LargeCard;
  };
}

export const getCardThemeStyle = (themeName?: ThemeName): CardTheme => {
  return {
    title: `font-inter text-2xl font-bold text-title`,
    subtitle: `text-subtitle tracking-wider italic font-light font-inter leading-7`,
    variants: {
      small: {
        description: `text-description font-light font-inter leading-7`,
      },
      medium: {
        description: `text-description font-light font-inter leading-7`,
        expandedDetails: `text-description font-light font-inter leading-7`,
        containerClasses: `bg-${themeName} px-8 py-7 shadow-md`,
        inlineButton: {
          text: `text-sm uppercase font-semibold text-inline-button-${themeName}`,
          hoverBg: `hover:bg-inline-button-${themeName}`,
          hoverText: `text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text`,
        },
      },
      large: {
        description: `text-description font-light font-inter leading-6`,
        expandedDetails: `text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5`,
        containerClasses: `bg-${themeName} p-5`,
        inlineButton: {
          text: `text-sm font-inter uppercase font-semibold text-inline-button-${themeName}`,
          hoverBg: `hover:bg-inline-button-${themeName}`,
          hoverText: `text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text`,
        },
      },
    },
  };
};
