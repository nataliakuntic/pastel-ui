import { ThemeName } from "../../types";

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
  return (
    <fieldset disabled={isDisabled}>
      <legend>{legend}</legend>

      {options.map((option) => {
        return (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default Radiogroup;
