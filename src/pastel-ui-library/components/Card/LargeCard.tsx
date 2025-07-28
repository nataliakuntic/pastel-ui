import { useState } from "react";
import cardThemes from "./cardThemes";

export interface LargeCardProps {
  colorScheme: "dustyrose" | "pistachio" | "honey" | "aquafrost" | "lilac";
  title: string | number | React.ReactNode;
  subtitle: string | number | React.ReactNode;
  description: string | number | React.ReactNode;
  img: string;
  alt: string;
  hasContainer: boolean;
  isExpandable: boolean;
  expandedDetails: string | number | React.ReactNode;
}

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
  const theme = cardThemes[colorScheme].variants.large;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const content = (
    <>
      <div className="bg-white shadow-md p-1.5 text-left">
        <img src={img} alt={alt} className="w-full h-auto" />
        <div className={`${cardThemes[colorScheme].title} pt-2.5 pl-3.5`}>
          {title}
        </div>
        <div className={`${cardThemes[colorScheme].subtitle} pl-3.5`}>
          {subtitle}
        </div>
        <div
          className={`${cardThemes[colorScheme].variants.large.description} p-3.5`}
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
    ml-3.5
    mt-2
    mb-2.5
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
    <div className={`${theme.containerClasses} max-w-lg`}>{content}</div>
  ) : (
    content
  );
};

export default LargeCard;
