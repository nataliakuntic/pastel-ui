import { ThemeName } from "../../types";
import { getTextAreaThemeStyle } from "./textAreaThemes";
import classNames from "classnames";

interface TextAreaProps {
  colorScheme: ThemeName;
  label?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
  placeholder?: string;
  rows: number;
  cols: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  colorScheme,
  label,
  value,
  onChange,
  isDisabled,
  placeholder,
  rows,
  cols,
}) => {
  const theme = getTextAreaThemeStyle(colorScheme);

  const textareaClass = classNames(
    "w-full",
    "border-2",
    "p-3",
    "focus:outline-none",
    "focus:ring-offset-2",
    "focus:ring-2",
    theme.text,
    !isDisabled && theme.ringFocus,
    isDisabled ? theme.borderDisabled : theme.border,
    isDisabled ? theme.bgDisabled : theme.background,
    isDisabled && "cursor-not-allowed select-none",
    isDisabled && "resize-none",
    isDisabled && theme.placeholderDisabled,
  );

  const labelTextClass = classNames(
    isDisabled ? theme.labelTextDisabled : theme.labelText,
  );

  const wrapperClass = classNames(
    "flex",
    "flex-col",
    "gap-2",
    "mb-6",
    "w-full",
    "max-w-sm",
  );

  return (
    <div className={wrapperClass}>
      <label className="flex flex-col gap-2">
        {label && <span className={labelTextClass}>{label}</span>}
        <textarea
          className={textareaClass}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export default TextArea;
