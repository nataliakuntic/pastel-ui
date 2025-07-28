import classNames from "classnames";
import { getButtonThemeStyle } from "./buttonThemes";
import { ThemeName } from "../../types";

interface ButtonProps {
  colorScheme: ThemeName;
  variant?: "primary" | "secondary" | "danger";
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

  const { text, textDisabled, textOnDark } = theme;
  const {
    bg,
    bgHover,
    bgActive,
    border,
    borderDisabled,
    bgDisabled,
    outlineFocus,
  } = theme.variants[variant];

  const buttonClass = classNames(
    "font-inter font-semibold border px-6 py-2 transition gap-5 focus:outline-solid focus:outline-2 focus:outline-offset-2",
    isDisabled ? textDisabled : text,
    isDisabled ? bgDisabled : bg,
    isDisabled ? borderDisabled : border,
    outlineFocus,
    isRounded && "rounded-full",
    isDisabled ? "cursor-not-allowed select-none" : "cursor-pointer",
    !isDisabled && bgHover,
    !isDisabled && bgActive,
    !isDisabled && textOnDark
  );

  return (
    <button className={buttonClass} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
