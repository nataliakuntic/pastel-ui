import { ThemeName } from "../../types";
import { getRadiobuttonThemeStyle } from "./radiobuttonThemes";
import classNames from "classnames";

export interface RadioOption {
  label: string;
  value: string;
}

interface RadiogroupProps {
  colorScheme: ThemeName;
  legend: React.ReactNode;
  name: string;
  options: RadioOption[];
  value: string | null;
  onChange: (nextValue: string) => void;
  isDisabled?: boolean;
}

const Radiogroup: React.FC<RadiogroupProps> = ({
  colorScheme,
  legend,
  name,
  options,
  value,
  onChange,
  isDisabled = false,
}) => {
  const theme = getRadiobuttonThemeStyle(colorScheme);

  const fieldsetClass = classNames("flex", "flex-col", "gap-3", "mb-4");

  const legendClass = classNames(
    "mb-4",
    isDisabled ? theme.legendDisabled : theme.legendText,
  );

  const labelClass = classNames(
    "inline-flex",
    "items-center",
    "gap-3",
    "select-none",
    "group",
    isDisabled ? theme.labelDisabled : theme.labelText,
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
  );

  const wrapperClass = classNames("relative", "w-4", "h-4", "inline-block");

  const optionClass = classNames(
    "leading-none",
    "px-2",
    "py-1",
    "rounded-md",
    !isDisabled && theme.hoverBg,
  );

  const outerCircle = classNames(
    "peer",
    "absolute",
    "inset-0",
    "appearance-none",
    "w-4",
    "h-4",
    "rounded-full",
    "focus:outline-none",
    "focus:ring-offset-0",
    "focus:ring-2",
    theme.ringFocus,
    isDisabled ? theme.borderDisabled : theme.border,
  );

  const innerDot = classNames(
    "absolute",
    "inset-0",
    "m-auto",
    "w-2",
    "h-2",
    "rounded-full",
    "scale-0",
    "peer-checked:scale-100",
    "opacity-0",
    "peer-checked:opacity-100",
    "transition-all",
    "duration-200",
    "ease-out",
    isDisabled ? theme.dotDisabled : theme.dotChecked,
  );

  return (
    <fieldset disabled={isDisabled} className={fieldsetClass}>
      <legend className={legendClass}>{legend}</legend>

      {options.map((option) => (
        <label key={option.value} className={labelClass}>
          <span className={wrapperClass}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className={outerCircle}
            />
            <span className={innerDot} />
          </span>

          <span className={optionClass}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};

export default Radiogroup;
