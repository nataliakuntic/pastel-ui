import { ThemeName } from "../../types";
import { getDateTimePickerThemeStyle } from "./DateTimePickerThemes";
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

  return (
    <div>
      <label>
        {label}
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export default TimePicker;
