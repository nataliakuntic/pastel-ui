import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { AccordionThemeName, getAccordionThemeStyle } from "./accordionThemes";
import classNames from "classnames";

export interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  roundedPanels?: boolean;
  colorScheme?: AccordionThemeName;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  roundedPanels = false,
  colorScheme,
}) => {
  const scheme = getAccordionThemeStyle(colorScheme || "default");

  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (multiple) {
      setExpandedIndexes((current) => {
        return current.includes(index)
          ? current.filter((i) => i !== index) // collapse if open
          : [...current, index]; // expand
      });
    } else {
      setExpandedIndex((current) => (current === index ? -1 : index));
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = multiple
      ? expandedIndexes.includes(index)
      : index === expandedIndex;
    const isLast = items.length - 1 === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaChevronDown /> : <FaChevronLeft />}
      </span>
    );

    const panelClasses = classNames(
      "flex",
      "justify-between",
      "p-3",
      "items-center",
      "cursor-pointer",
      scheme.labelBg,
      roundedPanels ? `rounded-2xl ${scheme.border} border` : "",
      roundedPanels && isExpanded ? "border-b-0" : "",
      !roundedPanels && (!isLast || isExpanded) ? "border-b" : ""
    );

    const expandedClasses = classNames(
      "p-5",
      scheme.contentBg,
      !roundedPanels && !isLast ? "border-b" : "",
      roundedPanels ? `rounded-2xl ${scheme.border} border` : ""
    );

    return (
      <div key={item.id} className={roundedPanels ? "mb-2" : ""}>
        <div className={panelClasses} onClick={() => handleClick(index)}>
          <div className={`pl-3 text-secondary font-semibold font-inter`}>
            {item.label}
          </div>
          {icon}
        </div>
        {isExpanded && <div className={expandedClasses}>{item.content}</div>}
      </div>
    );
  });

  return (
    <div className={`my-3 max-w-2/3 ${roundedPanels ? "" : "border"}`}>
      {renderedItems}
    </div>
  );
};

export default Accordion;
