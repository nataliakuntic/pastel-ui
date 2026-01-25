import classNames from "classnames";
import { getButtonThemeStyle } from "./buttonThemes";
import { ThemeName } from "../../types";

interface ButtonProps {
  colorScheme: ThemeName;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  isDisabled?: boolean;
  onClick?: () => void;
  isRounded?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme,
  variant = "primary",
  isDisabled = false,
  onClick,
  isRounded = false,
}) => {
  const theme = getButtonThemeStyle(colorScheme);

  const { textDisabled, textOnDark } = theme;
  const {
    text,
    bg,
    bgHover,
    bgActive,
    border,
    borderDisabled,
    bgDisabled,
    ringFocus,
  } = theme.variants[variant];

  const buttonClass = classNames(
    "font-inter",
    "font-semibold",
    "border",
    "px-6",
    "py-2",
    "transition",
    "gap-5",
    "focus-outline:none",
    "focus-visible:outline-none",
    "focus:ring-solid",
    "focus:ring-2",
    "focus:ring-offset-2",
    ringFocus,
    isDisabled ? textDisabled : text,
    isDisabled ? bgDisabled : bg,
    isDisabled ? borderDisabled : border,
    isRounded && "rounded-full",
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
    !isDisabled && bgHover,
    !isDisabled && bgActive,
    !isDisabled && textOnDark,
  );

  return (
    <button className={buttonClass} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
