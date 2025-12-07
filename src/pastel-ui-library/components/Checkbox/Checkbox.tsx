import { ThemeName } from "../../types";
import { getCheckboxThemeStyle } from "./checkboxThemes";
import { useId } from "react";
import classNames from "classnames";

interface CheckboxProps {
  colorScheme: ThemeName;
  variant?: "light" | "dark";
  isChecked?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange: (isChecked: boolean) => void;
  label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  colorScheme,
  variant = "light",
  isChecked,
  onChange,
  isDisabled,
  isRequired,
  label,
}) => {
  const id = useId();

  const theme = getCheckboxThemeStyle(colorScheme);
  const variantStyles = theme.variants[variant];

  const wrapperClass = classNames(
    "flex",
    "gap-2",
    "flex-grow-0",
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer"
  );

  const checkboxClass = classNames(
    "relative",
    "peer",
    "shrink-0",
    "appearance-none",
    "w-4",
    "h-4",
    "border-2",
    "mt-1",
    "focus:outline-none",
    "focus:ring-offset-0",
    "focus:ring-2",
    `disabled:${theme.borderDisabled}`,
    `disabled:${theme.bgDisabled}`,
    variantStyles.border,
    variantStyles.ringFocus,
    isChecked ? variantStyles.bgChecked : variantStyles.bgUnchecked
  );

  const labelClass = classNames(
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer"
  );

  const iconClass = classNames(
    "absolute",
    "w-4",
    "h-4",
    "mt-1",
    "hidden",
    "peer-checked:block",
    "pointer-events-none",
    isDisabled ? theme.iconCheckedDisabled : variantStyles.iconChecked
  );

  return (
    <div className="flex">
      <div className={wrapperClass}>
        <input
          id={id}
          type="checkbox"
          className={checkboxClass}
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
          disabled={isDisabled}
          required={isRequired}
        />
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
