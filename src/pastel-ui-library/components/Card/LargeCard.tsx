import { useState } from "react";
import { ThemeName } from "../../types";
import { BaseCardProps } from "./types";

interface LargeCardProps extends BaseCardProps {
  description: string | number | React.ReactNode;
  expandedDetails: string | number | React.ReactNode;
  colorScheme: ThemeName;
  img: string;
  alt: string;
  hasContainer: boolean;
  isExpandable: boolean;
}

const theme = (themeName: ThemeName) => {
  return {
    title: "font-inter text-2xl font-bold text-title",
    subtitle:
      "text-subtitle tracking-wider italic font-light font-inter leading-7",
    description: `text-description font-light font-inter leading-6`,
    expandedDetails: `text-description font-light font-inter leading-6 pt-1 pb-3.5 px-3.5`,
    containerClasses: `bg-${themeName} p-5`,
    inlineButton: {
      text: `text-sm font-inter uppercase font-semibold text-inline-button-${themeName}`,
      hoverBg: `hover:bg-inline-button-${themeName}`,
      hoverText: `text-sm font-inter uppercase font-semibold hover:text-inline-button-hover-text`,
    },
  };
};

const LargeCard: React.FC<LargeCardProps> = ({
  colorScheme,
  title,
  subtitle,
  img,
  alt,
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
      <div className="bg-white shadow-md p-1.5 text-left">
        <img src={img} alt={alt} className="w-full h-auto" />
        <div className={`${styles.title} pt-2.5 pl-3.5`}>{title}</div>
        <div className={`${styles.subtitle} pl-3.5`}>{subtitle}</div>
        <div className={`${styles.description} p-3.5`}>{description}</div>

        {isExpandable && styles.inlineButton && (
          <button
            onClick={handleClick}
            className={`
    ${styles.inlineButton?.text} 
    ${styles.inlineButton?.hoverBg} 
    ${styles.inlineButton?.hoverText}
    inline-block 
    hover:px-2 
    transition-duration-200 
    ml-3.5
    mt-2
    mb-2.5
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
    <div className={`${styles.containerClasses} max-w-lg`}>{content}</div>
  ) : (
    content
  );
};

export default LargeCard;
