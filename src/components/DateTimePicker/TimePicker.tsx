import { ThemeName } from "../../types";
import { getDateTimePickerThemeStyle } from "./dateTimePickerThemes";
import classNames from "classnames";

interface TimePickerProps {
  colorScheme: ThemeName;
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
}

const TimePicker: React.FC<TimePickerProps> = ({
  colorScheme,
  label,
  value,
  onChange,
  isDisabled,
}) => {
  const theme = getDateTimePickerThemeStyle(colorScheme);

  const wrapperClass = classNames(
    "flex",
    "flex-col",
    "gap-1",
    "mb-6",
    "max-w-xs",
  );

  const inputClass = classNames(
    "focus:outline-none",
    "focus:ring-offset-2",
    "focus:ring-2",
    "inline-block",
    "w-36",
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
    <div className={wrapperClass}>
      <label className="flex flex-col gap-1.5">
        <span className={labelTextClass}>{label}</span>
        <input
          type="time"
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export default TimePicker;
