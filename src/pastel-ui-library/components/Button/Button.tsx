import classNames from "classnames";

interface ButtonProps {
  colorScheme: "danger" | "success" | "warning" | "info" | "muted";
  children: string;
  className?: string;
}

interface ButtonColorScheme {
  text: string;
  deleteBg: string;
  borderAct: string;
  textOnDark?: string;
  textDis: string;
  acceptBg: string;
  readMoreBg: string;
  disabledBg: string;
  hoverBg: string;
  activeBg: string;
  border: string;
  borderDel: string;
  borderDis: string;
  outlineFoc: string;
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
    textOnDark: "text-button-text-on-dark",
    textDis: "text-button-danger-disabled-text",
    acceptBg: "bg-button-danger-primary",
    readMoreBg: "bg-button-danger-secondary",
    disabledBg: "bg-button-danger-disabled",
    hoverBg: "bg-button-danger-hover",
    activeBg: "bg-button-danger-active",
    border: "border-button-danger-stroke",
    borderDel: "border-button-danger-delete-stroke",
    borderDis: "border-button-danger-disabled-stroke",
    outlineFoc: "outline-button-danger-focus-outline",
  },
  success: {
    ...baseScheme,
    textDis: "text-button-success-disabled-text",
    acceptBg: "bg-button-success-primary",
    readMoreBg: "bg-button-success-secondary",
    disabledBg: "bg-button-success-disabled",
    hoverBg: "bg-button-success-hover",
    activeBg: "bg-button-success-active",
    border: "border-button-success-stroke",
    borderDel: "border-button-success-delete-stroke",
    borderDis: "border-button-success-disabled-stroke",
    outlineFoc: "outline-button-success-focus-outline",
  },
  warning: {
    ...baseScheme,
    textDis: "text-button-warning-disabled-text",
    acceptBg: "bg-button-warning-primary",
    readMoreBg: "bg-button-warning-secondary",
    disabledBg: "bg-button-warning-disabled",
    hoverBg: "bg-button-warning-hover",
    activeBg: "bg-button-warning-active",
    border: "border-button-warning-stroke",
    borderDel: "border-button-warning-delete-stroke",
    borderDis: "border-button-warning-disabled-stroke",
    outlineFoc: "outline-button-warning-focus-outline",
  },
  info: {
    ...baseScheme,
    textOnDark: "text-button-text-on-dark",
    textDis: "text-button-info-disabled-text",
    acceptBg: "bg-button-info-primary",
    readMoreBg: "bg-button-info-secondary",
    disabledBg: "bg-button-info-disabled",
    hoverBg: "bg-button-info-hover",
    activeBg: "bg-button-info-active",
    border: "border-button-info-stroke",
    borderDel: "border-button-info-delete-stroke",
    borderDis: "border-button-info-disabled-stroke",
    outlineFoc: "outline-button-info-focus-outline",
  },
  muted: {
    ...baseScheme,
    textOnDark: "text-button-text-on-dark",
    textDis: "text-button-muted-disabled-text",
    acceptBg: "bg-button-muted-primary",
    readMoreBg: "bg-button-muted-secondary",
    disabledBg: "bg-button-muted-disabled",
    hoverBg: "bg-button-muted-hover",
    activeBg: "bg-button-muted-active",
    border: "border-button-muted-stroke",
    borderDel: "border-button-muted-delete-stroke",
    borderDis: "border-button-muted-disabled-stroke",
    outlineFoc: "outline-button-muted-focus-outline",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme,
  className,
}) => {
  const scheme = colorSchemes[colorScheme];

  if (!scheme) {
    // fallback if colorScheme is invalid
    return <button>{children}</button>;
  }

  const variant = children.toLowerCase();

  const baseClasses =
    "font-inter font-semibold border px-6 py-2 transition gap-5 focus:outline-solid focus:outline-2 focus:outline-offset-2";

  const isDisabled = variant === "disabled";

  // Disabled button styles
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

  // Non-disabled buttons styling based on variant
  let bgClass = "";
  let borderClass = "";
  let textClass = scheme.text;

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

  const hoverClasses = {
    danger: "hover:bg-button-danger-hover",
    success: "hover:bg-button-success-hover",
    warning: "hover:bg-button-warning-hover",
    info: "hover:bg-button-info-hover",
    muted: "hover:bg-button-muted-hover",
  };

  const activeClasses = {
    danger: "active:bg-button-danger-active",
    success: "active:bg-button-success-active",
    warning: "active:bg-button-warning-active",
    info: "active:bg-button-info-active",
    muted: "active:bg-button-muted-active",
  };

  const focusClasses = {
    danger: "focus:outline-button-danger-focus-outline",
    success: "focus:outline-button-success-focus-outline",
    warning: "focus:outline-button-warning-focus-outline",
    info: "focus:outline-button-info-focus-outline",
    muted: "focus:outline-button-muted-focus-outline",
  };

  return (
    <button
      className={classNames(
        baseClasses,
        textClass,
        bgClass,
        borderClass,
        "cursor-pointer",
        hoverClasses[colorScheme],
        activeClasses[colorScheme],
        focusClasses[colorScheme],
        scheme.outlineFoc,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
