import { useState } from "react";
import cardThemes from "./cardThemes";

interface MediumCardProps {
  colorScheme: "dustyrose" | "pistachio" | "honey" | "aquafrost" | "lilac";
  title: string | number | React.ReactNode;
  subtitle: string | number | React.ReactNode;
  description: string | number | React.ReactNode;
  hasContainer: boolean;
  isExpandable?: boolean;
  expandedDetails?: string | number | React.ReactNode;
}

const MediumCard: React.FC<MediumCardProps> = ({
  colorScheme,
  title,
  subtitle,
  description,
  isExpandable,
  hasContainer,
  expandedDetails,
}) => {
  const theme = cardThemes[colorScheme].variants.medium;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const content = (
    <>
      <div className="bg-white shadow-md p-6 text-left space-y-3">
        <div className={`${cardThemes[colorScheme].title}`}>{title}</div>
        <div className={`${cardThemes[colorScheme].subtitle}`}>{subtitle}</div>
        <div
          className={`${cardThemes[colorScheme].variants.medium.description}`}
        >
          {description}
        </div>

        {isExpandable && theme.inlineButton && (
          <button
            onClick={handleClick}
            className={`
    ${theme.inlineButton?.text} 
    ${theme.inlineButton?.hoverBg} 
    ${theme.inlineButton?.hoverText}
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
          <div className={theme.expandedDetails + " mt-2"}>
            {expandedDetails}
          </div>
        )}
      </div>
    </>
  );

  return hasContainer ? (
    <div className={`${theme.containerClasses} max-w-md`}>{content}</div>
  ) : (
    content
  );
};

export default MediumCard;
