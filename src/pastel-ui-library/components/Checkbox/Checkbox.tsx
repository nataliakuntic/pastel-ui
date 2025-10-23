import { Check } from "lucide-react";

interface CheckboxProps {
  isChecked?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange: (isChecked: boolean) => void;
  label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onChange,
  isDisabled,
  isRequired,
  label,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
        disabled={isDisabled}
        required={isRequired}
      />
      <label>{label}</label>
      <Check />
    </div>
  );
};

export default Checkbox;
