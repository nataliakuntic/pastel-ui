import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

interface AccordionProps {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
  multiple?: boolean;
  roundedPanels?: boolean;
  colorScheme?: string;
}

interface AccordionColorScheme {
  labelBg: string;
  contentBg: string;
  border: string;
}

const colorSchemes: Record<string, AccordionColorScheme> = {
  default: {
    labelBg: "bg-default-dark",
    contentBg: "bg-default",
    border: "border-primary",
  },
  danger: {
    labelBg: "bg-danger",
    contentBg: "bg-danger-light",
    border: "border-danger border-2",
  },
  success: {
    labelBg: "bg-success",
    contentBg: "bg-success-light",
    border: "border-success border-2",
  },
  warning: {
    labelBg: "bg-warning",
    contentBg: "bg-warning-light",
    border: "border-warning border-2",
  },
  muted: {
    labelBg: "bg-muted",
    contentBg: "bg-muted-light",
    border: "border-muted border-2",
  },
  info: {
    labelBg: "bg-info",
    contentBg: "bg-info-light",
    border: "border-info border-2",
  },
};
const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  roundedPanels = false,
  colorScheme,
}) => {
  const scheme = colorSchemes[colorScheme || "default"];

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

    return (
      <div key={item.id} className={roundedPanels ? "mb-2" : ""}>
        <div
          className={`${scheme.labelBg}  flex justify-between p-3 ${
            !roundedPanels && (!isLast || isExpanded) ? "border-b" : ""
          } items-center cursor-pointer ${
            roundedPanels
              ? `rounded-2xl ${scheme.border} border ${
                  isExpanded ? "border-b-0" : ""
                }`
              : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className={`pl-3 text-secondary font-semibold font-inter`}>
            {item.label}
          </div>
          {icon}
        </div>
        {isExpanded && (
          <div
            className={`${!roundedPanels && !isLast ? "border-b" : ""} p-5 ${
              scheme.contentBg
            } 
             ${roundedPanels ? `rounded-2xl ${scheme.border} border` : ""} `}
          >
            {item.content}
          </div>
        )}
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
