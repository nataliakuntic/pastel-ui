import { useState } from "react";
import { ThemeName } from "../../types";
import { BaseCardProps } from "./types";

interface MediumCardProps extends BaseCardProps {
  description: string | number | React.ReactNode;
  colorScheme: ThemeName;
  hasContainer: boolean;
  isExpandable?: boolean;
  expandedDetails?: string | number | React.ReactNode;
}

const theme = (themeName: ThemeName) => {
  return {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    description: `text-description font-light font-inter leading-7`,
    expandedDetails: `text-description font-light font-inter leading-7`,
    containerClasses: `bg-${themeName} px-8 py-7 shadow-md`,
    inlineButton: {
      text: `text-sm uppercase font-semibold text-inline-button-${themeName}`,
      hoverBg: `hover:bg-inline-button-${themeName}`,
      hoverText: `text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text`,
    },
  };
};

const MediumCard: React.FC<MediumCardProps> = ({
  colorScheme,
  title,
  subtitle,
  description,
  isExpandable,
  hasContainer,
  expandedDetails,
}) => {
  //EXPANDED DETAILS LOGIC

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  //STYLING

  const styles = theme(colorScheme);

  //CONTENT DISPLAY

  const content = (
    <>
      <div className="bg-white shadow-md p-6 text-left space-y-3">
        <div className={`${styles.title}`}>{title}</div>
        <div className={`${styles.subtitle}`}>{subtitle}</div>
        <div className={`${styles.description}`}>{description}</div>

        {isExpandable && styles.inlineButton && (
          <button
            onClick={handleClick}
            className={`
    ${styles.inlineButton.text} 
    ${styles.inlineButton.hoverBg} 
    ${styles.inlineButton.hoverText}
    inline-block 
    hover:px-2 
    transition-duration-200 
    mt-2
  `}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}

        {isExpanded && expandedDetails && (
          <div className={styles.expandedDetails + " mt-2"}>
            {expandedDetails}
          </div>
        )}
      </div>
    </>
  );

  return hasContainer ? (
    <div className={`${styles.containerClasses} max-w-md`}>{content}</div>
  ) : (
    content
  );
};

export default MediumCard;
