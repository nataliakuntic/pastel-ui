import classNames from "classnames";

interface ButtonProps {
  colorScheme: "danger" | "success" | "warning" | "info" | "muted";
  children: string;
  className?: string;
}

interface ButtonColorScheme {
  text: string;
  textOnDark?: string;
  textDis: string;
  acceptBg: string;
  readMoreBg: string;
  deleteBg: string;
  disabledBg: string;
  hoverBg: string;
  activeBg: string;
  border: string;
  borderDel: string;
  borderDis: string;
  outlineFoc: string;
  borderAct: string;
}

const baseScheme = {
  text: "text-button-text",
  deleteBg: "bg-button-delete",
  borderAct: "border-button-active-stroke",
};

const colorSchemes: Record<
  "danger" | "success" | "warning" | "info" | "muted",
  ButtonColorScheme
> = {
  danger: {
    ...baseScheme,
    textOnDark: "active:text-button-text-on-dark",
    textDis: "text-button-danger-disabled-text",
    acceptBg: "bg-button-danger-primary",
    readMoreBg: "bg-button-danger-secondary",
    disabledBg: "bg-button-danger-disabled",
    hoverBg: "hover:bg-button-danger-hover",
    activeBg: "active:bg-button-danger-active",
    border: "border-button-danger-stroke",
    borderDel: "border-button-danger-delete-stroke",
    borderDis: "border-button-danger-disabled-stroke",
    outlineFoc: "focus:outline-button-danger-focus-outline",
  },
  success: {
    ...baseScheme,
    textOnDark: "active:text-button-text-on-dark",
    textDis: "text-button-success-disabled-text",
    acceptBg: "bg-button-success-primary",
    readMoreBg: "bg-button-success-secondary",
    disabledBg: "bg-button-success-disabled",
    hoverBg: "hover:bg-button-success-hover",
    activeBg: "active:bg-button-success-active",
    border: "border-button-success-stroke",
    borderDel: "border-button-success-delete-stroke",
    borderDis: "border-button-success-disabled-stroke",
    outlineFoc: "focus:outline-button-success-focus-outline",
  },
  warning: {
    ...baseScheme,
    textDis: "text-button-warning-disabled-text",
    acceptBg: "bg-button-warning-primary",
    readMoreBg: "bg-button-warning-secondary",
    disabledBg: "bg-button-warning-disabled",
    hoverBg: "hover:bg-button-warning-hover",
    activeBg: "active:bg-button-warning-active",
    border: "border-button-warning-stroke",
    borderDel: "border-button-warning-delete-stroke",
    borderDis: "border-button-warning-disabled-stroke",
    outlineFoc: "focus:outline-button-warning-focus-outline",
  },
  info: {
    ...baseScheme,
    textOnDark: "active:text-button-text-on-dark",
    textDis: "text-button-info-disabled-text",
    acceptBg: "bg-button-info-primary",
    readMoreBg: "bg-button-info-secondary",
    disabledBg: "bg-button-info-disabled",
    hoverBg: "hover:bg-button-info-hover",
    activeBg: "active:bg-button-info-active",
    border: "border-button-info-stroke",
    borderDel: "border-button-info-delete-stroke",
    borderDis: "border-button-info-disabled-stroke",
    outlineFoc: "focus:outline-button-info-focus-outline",
  },
  muted: {
    ...baseScheme,
    textOnDark: "active:text-button-text-on-dark",
    textDis: "text-button-muted-disabled-text",
    acceptBg: "bg-button-muted-primary",
    readMoreBg: "bg-button-muted-secondary",
    disabledBg: "bg-button-muted-disabled",
    hoverBg: "hover:bg-button-muted-hover",
    activeBg: "active:bg-button-muted-active",
    border: "border-button-muted-stroke",
    borderDel: "border-button-muted-delete-stroke",
    borderDis: "border-button-muted-disabled-stroke",
    outlineFoc: "focus:outline-button-muted-focus-outline",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme,
  className,
}) => {
  const scheme = colorSchemes[colorScheme];

  if (!scheme) {
    return <button>{children}</button>;
  }

  const variant = children.toLowerCase();
  const baseClasses =
    "font-inter font-semibold border px-6 py-2 transition gap-5 focus:outline-solid focus:outline-2 focus:outline-offset-2";

  const isDisabled = variant === "disabled";

  if (isDisabled) {
    return (
      <button
        className={classNames(
          baseClasses,
          scheme.textDis,
          scheme.disabledBg,
          scheme.borderDis,
          "cursor-not-allowed select-none",
          className
        )}
        disabled
      >
        {children}
      </button>
    );
  }

  let bgClass = "";
  let borderClass = "";
  let textClass = scheme.text;
  let activeTextClass = "";

  const variantUsesDarkActiveBg =
    ["accept", "read more", "delete"].includes(variant) &&
    ["success", "muted", "info", "danger"].includes(colorScheme);

  switch (variant) {
    case "accept":
      bgClass = scheme.acceptBg;
      borderClass = scheme.border;
      break;
    case "read more":
      bgClass = scheme.readMoreBg;
      borderClass = scheme.border;
      break;
    case "delete":
      bgClass = scheme.deleteBg;
      borderClass = scheme.borderDel;
      break;
    default:
      bgClass = scheme.acceptBg;
      borderClass = scheme.border;
  }

  if (variantUsesDarkActiveBg && scheme.textOnDark) {
    activeTextClass = scheme.textOnDark;
  }

  return (
    <button
      className={classNames(
        baseClasses,
        textClass,
        activeTextClass,
        bgClass,
        borderClass,
        "cursor-pointer",
        scheme.hoverBg,
        scheme.activeBg,
        scheme.outlineFoc,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
