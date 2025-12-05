import { ThemeName } from "../../types";
import { getCheckboxThemeStyle } from "./checkboxThemes";
import { useId } from "react";

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

  return (
    <div className={`flex`}>
      <div
        className={`flex gap-2 flex-grow-0 ${
          isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer"
        }`}
      >
        <input
          id={id}
          type="checkbox"
          className={`
    relative peer shrink-0
    appearance-none w-4 h-4 border-2
    ${variantStyles.border} ${
            isChecked ? variantStyles.bgChecked : variantStyles.bgUnchecked
          }
    mt-1
    focus:outline-none focus:ring-offset-0 focus:ring-2 ${
      variantStyles.ringFocus
    }
    disabled:${theme.borderDisabled} disabled:${theme.bgDisabled}
  `}
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
          disabled={isDisabled}
          required={isRequired}
        />
        <label
          htmlFor={id}
          className={`${
            isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer"
          }`}
        >
          {label}
        </label>
        <svg
          className={`
    absolute 
    w-4 h-4 mt-1
    hidden peer-checked:block
    pointer-events-none
    ${isDisabled ? theme.iconCheckedDisabled : variantStyles.iconChecked}
  `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
