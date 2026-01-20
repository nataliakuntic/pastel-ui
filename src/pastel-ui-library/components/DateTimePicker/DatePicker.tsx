import { ThemeName } from "../../types";
import { getDateTimePickerThemeStyle } from "./DateTimePickerThemes";
import classNames from "classnames";

interface DatePickerProps {
  colorScheme: ThemeName;
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  colorScheme,
  label,
  value,
  onChange,
  isDisabled,
}) => {
  const theme = getDateTimePickerThemeStyle(colorScheme);

  return (
    <div>
      <label>
        {label}
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export default DatePicker;
