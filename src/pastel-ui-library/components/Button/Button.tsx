import classNames from "classnames";
import { ButtonThemes, getClassesForVariant } from "./buttonThemes";

interface ButtonProps {
  colorScheme: "dustyrose" | "pistacchio" | "honey" | "aquafrost" | "lilac";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  rounded?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme,
  variant = "primary",
  disabled = false,
  onClick,
  rounded = false,
}) => {
  const theme = ButtonThemes[colorScheme];
  const {
    text,
    textDisabled,
    textOnDark,
    bg,
    bgHover,
    bgActive,
    border,
    borderDisabled,
    outlineFoc,
  } = getClassesForVariant(theme, variant);

  const buttonClass = classNames(
    "font-inter font-semibold border px-6 py-2 transition gap-5 focus:outline-solid focus:outline-2 focus:outline-offset-2",
    disabled ? textDisabled : text,
    bg,
    disabled ? borderDisabled : border,
    outlineFoc,
    rounded && "rounded-full",
    disabled ? "cursor-not-allowed select-none" : "cursor-pointer",
    !disabled && bgHover,
    !disabled && bgActive,
    !disabled && textOnDark
  );

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
