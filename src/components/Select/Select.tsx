import { ThemeName } from "../../types";
import { getSelectThemeStyle } from "./selectThemes";
import classNames from "classnames";

export interface SelectOption {
  value: string;
  label?: string;
}

interface SelectProps {
  colorScheme: ThemeName;
  options: SelectOption[];
  label: React.ReactNode;
  value: string;
  name: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  colorScheme,
  options,
  label,
  name,
  value,
  onChange,
  isDisabled,
}) => {
  const theme = getSelectThemeStyle(colorScheme);

  const selectClassName = classNames(
    "focus:outline-none",
    "focus:ring-offset-2",
    "focus:ring-2",
    "w-full",
    "max-w-xs",
    "gap-2",
    "mb-6",
    isDisabled ? theme.textDisabled : theme.text,
    !isDisabled && theme.ringFocus,
    isDisabled ? theme.borderDisabled : theme.border,
    isDisabled ? theme.bgDisabled : theme.background,
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
  );

  const labelTextClass = classNames(
    isDisabled ? theme.labelTextDisabled : theme.labelText,
  );

  return (
    <div>
      <label className="flex flex-col gap-1.5">
        <span className={labelTextClass}>{label}</span>
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isDisabled}
          className={selectClassName}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
