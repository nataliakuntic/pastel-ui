import { ThemeName } from "../../types";
import { getCheckboxThemeStyle } from "./checkboxThemes";
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
  const theme = getCheckboxThemeStyle(colorScheme);
  const variantStyles = theme.variants[variant];

  const labelClass = classNames(
    "flex",
    "items-center",
    "gap-2",
    theme.labelText,
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
  );

  const wrapperClass = classNames(
    "relative",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "items-start",
    "w-4",
    "h-4",
    "shrink-0",
    "transition-colors",
    "duration-200",
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
  );

  const checkboxClass = classNames(
    "peer",
    "absolute",
    "inset-0",
    "appearance-none",
    "w-full",
    "h-full",
    "focus:outline-none",
    "focus:ring-offset-0",
    "focus:ring-2",
    "transition",
    !isDisabled && variantStyles.ringFocus,
    isDisabled ? theme.borderDisabled : variantStyles.border,
    isDisabled ? theme.bgDisabled : "",
    !isDisabled && isChecked ? variantStyles.bgChecked : "",
    !isDisabled && !isChecked ? variantStyles.bgUnchecked : "",
  );

  const iconClass = classNames(
    "absolute",
    "w-4",
    "h-4",
    "transition-all",
    "duration-300",
    "opacity-0",
    "scale-75",
    "peer-checked:opacity-100",
    "peer-checked:scale-100",
    isDisabled ? theme.iconCheckedDisabled : variantStyles.iconChecked,
  );

  return (
    <label className={labelClass}>
      <span className={wrapperClass}>
        <input
          type="checkbox"
          className={checkboxClass}
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
          disabled={isDisabled}
          required={isRequired}
        />
        <svg
          className={iconClass}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
