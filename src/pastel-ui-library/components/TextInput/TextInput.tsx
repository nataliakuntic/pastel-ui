import { ThemeName } from "../../types";
import { getTextInputThemeStyle } from "./textInputThemes";
import { useId } from "react";
import classNames from "classnames";

interface TextInputProps {
  colorScheme: ThemeName;
  type: "text" | "number" | "email" | "password";
  label?: React.ReactNode;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  colorScheme,
  type,
  label,
  value,
  onChange,
  isDisabled,
  placeholder,
}) => {
  const id = useId();

  const theme = getTextInputThemeStyle(colorScheme);

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
    theme.text,
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
      <label htmlFor={id} className={labelTextClass}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default TextInput;
