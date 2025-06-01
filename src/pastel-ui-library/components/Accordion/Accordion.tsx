import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

interface AccordionProps {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
  multiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  className = "",
}) => {
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
      <div key={item.id}>
        <div
          className={`flex justify-between p-3 bg-default-dark ${
            !isLast || isExpanded ? "border-b" : ""
          } items-center cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <div className="pl-3 text-secondary font-semibold font-inter">
            {item.label}
          </div>
          {icon}
        </div>
        {isExpanded && (
          <div className={`${!isLast ? "border-b" : ""} p-5`}>
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className={`my-3 max-w-2/3 border ${className}`}>{renderedItems}</div>
  );
};

export default Accordion;
