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
  options: RadioOption[];
  value: string | null;
  onChange: (nextValue: string) => void;
  isDisabled?: boolean;
}

const Radiogroup: React.FC<RadiogroupProps> = ({
  colorScheme,
  legend,
  options,
  value,
  onChange,
  isDisabled = false,
}) => {
  const theme = getRadiobuttonThemeStyle(colorScheme);

  const fieldsetClass = classNames("flex", "flex-col", "gap-3");

  const labelClass = classNames(
    "flex",
    "items-start",
    "gap-3",
    "cursor-pointer"
  );

  const wrapperClass = classNames(
    "relative",
    "w-4",
    "h-4",
    "inline-block",
    "mt-[2px]"
  );

  const outerCircle = classNames(
    "peer",
    "absolute",
    "inset-0",
    "appearance-none",
    "w-4",
    "h-4",
    "border-2",
    "rounded-full",
    "focus:outline-none",
    "focus:ring-offset-0",
    "focus:ring-2",
    theme.border,
    theme.ringFocus
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
    theme.dotChecked
  );

  return (
    <fieldset disabled={isDisabled} className={fieldsetClass}>
      <legend className="mb-3">{legend}</legend>

      {options.map((option) => (
        <label key={option.value} className={labelClass}>
          <span className={wrapperClass}>
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className={outerCircle}
            />
            <span className={innerDot} />
          </span>

          <span className="leading-none">{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};

export default Radiogroup;
