import { ThemeName } from "../../types";

interface TextInputProps {
  colorScheme: ThemeName;
  type: "text" | "number" | "email" | "password";
  label?: React.ReactNode;
  value: string | number;
  onChange: (value: string | number) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string | number;
  name?: string;
  id?: string;
  helperText?: string; // "We'll never share your e-mail"
  errorMessage?: string;
  isInvalid?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  colorScheme,
  type,
  label,
  value,
  onChange,
  isRequired,
  isDisabled,
  placeholder,
  name,
  id,
  helperText,
  errorMessage,
  isInvalid,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder="name"
        className="border-2 border-dustyrose"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
