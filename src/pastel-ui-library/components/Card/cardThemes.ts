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

const getCardThemeStyle = (themeName?: ThemeName) => {
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

const cardThemes: Record<string, CardTheme> = {
  dustyrose: {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    variants: {
      small: {
        description: "text-description font-light font-inter leading-7",
      },
      medium: {
        description: "text-description font-light font-inter leading-7",
        expandedDetails: "text-description font-light font-inter leading-7",
        containerClasses: "bg-dustyrose px-8 py-7 shadow-md",
        inlineButton: {
          text: "text-sm uppercase font-semibold text-inline-button-dustyrose",
          hoverBg: "hover:bg-inline-button-dustyrose",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
      large: {
        description: "text-description font-light font-inter leading-6",
        expandedDetails:
          "text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5",
        containerClasses: "bg-dustyrose p-5",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-dustyrose",
          hoverBg: "hover:bg-inline-button-dustyrose",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
    },
  },
  pistachio: {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    variants: {
      small: {
        description: "text-description font-light font-inter leading-7",
      },
      medium: {
        description: "text-description font-light font-inter leading-7",
        expandedDetails: "text-description font-light font-inter leading-7",
        containerClasses: "bg-pistachio px-8 py-7 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-pistachio",
          hoverBg: "hover:bg-inline-button-pistachio",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
      large: {
        description: "text-description font-light font-inter leading-6",
        expandedDetails:
          "text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5",
        containerClasses: "bg-pistachio p-5",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-pistachio",
          hoverBg: "hover:bg-inline-button-pistachio",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
    },
  },
  honey: {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    variants: {
      small: {
        description: "text-description font-light font-inter leading-7",
      },
      medium: {
        description: "text-description font-light font-inter leading-7",
        expandedDetails: "text-description font-light font-inter leading-7",
        containerClasses: "bg-honey px-8 py-7 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-honey",
          hoverBg: "hover:bg-inline-button-honey",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
      large: {
        description: "text-description font-light font-inter leading-6",
        expandedDetails:
          "text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5",
        containerClasses: "bg-honey p-5 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-honey",
          hoverBg: "hover:bg-inline-button-honey",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
    },
  },
  aquafrost: {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    variants: {
      small: {
        description: "text-description font-light font-inter leading-7",
      },
      medium: {
        description: "text-description font-light font-inter leading-7",
        expandedDetails: "text-description font-light font-inter leading-7",
        containerClasses: "bg-aquafrost px-8 py-7 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-aquafrost",
          hoverBg: "hover:bg-inline-button-aquafrost",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
      large: {
        description: "text-description font-light font-inter leading-6",
        expandedDetails:
          "text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5",
        containerClasses: "bg-aquafrost p-5 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-aquafrost",
          hoverBg: "hover:bg-inline-button-aquafrost",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
    },
  },
  lilac: {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    variants: {
      small: {
        description: "text-description",
      },
      medium: {
        description: "text-description font-light font-inter leading-7",
        expandedDetails: "text-description font-light font-inter leading-7",
        containerClasses: "bg-lilac px-8 py-7 shadow-md",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-lilac",
          hoverBg: "hover:bg-inline-button-lilac",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
      large: {
        description: "text-description font-light font-inter leading-6",
        expandedDetails:
          "text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5",
        containerClasses: "bg-lilac p-5",
        inlineButton: {
          text: "text-sm font-inter uppercase font-semibold text-inline-button-lilac",
          hoverBg: "hover:bg-inline-button-lilac",
          hoverText:
            "text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text",
        },
      },
    },
  },
};

export default cardThemes;
