import { BaseCardProps } from "./types";
import classNames from "classnames";

type SmallCardLayout = "text" | "media";

interface SmallCardProps extends BaseCardProps {
  description?: string | number | React.ReactNode;
  img?: string;
  alt?: string;
  layout: SmallCardLayout;
}

const theme = {
  title: "font-inter text-2xl font-bold text-title",
  subtitle:
    "text-subtitle tracking-wider italic font-light font-inter leading-7",
  description: "text-description font-light font-inter leading-7",
};

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  subtitle,
  description,
  img,
  alt,
  layout = "text",
}) => {
  // MEDIA LAYOUT

  if (layout === "media") {
    if (!img || !alt) {
      console.warn("SmallCard with media layout requires img and alt.");
      return null;
    }

    // CLASSNAMES FOR MEDIA LAYOUT

    const mediaWrapperClass = classNames("max-w-md", "shadow-md", "p-1");
    const mediaTitleClass = classNames(
      "mt-2",
      "pl-4.5",
      "pt-2",
      "pb-1",
      theme.title
    );
    const mediaSubtitleClass = classNames(theme.subtitle, "pl-4.5", "pb-3.5");

    return (
      <div className={mediaWrapperClass}>
        <img src={img} alt={alt} className="w-full h-auto" />
        <div className={mediaTitleClass}>{title}</div>
        <div className={mediaSubtitleClass}>{subtitle}</div>
      </div>
    );
  }

  // TEXT LAYOUT

  // CLASSNAMES FOR TEXT LAYOUT

  const textWrapperClass = classNames(
    "max-w-sm",
    "border-2",
    "border-platinum-light",
    "shadow-xs",
    "p-8",
    "text-left",
    "space-y-3",
    "bg-default"
  );

  return (
    <div className={textWrapperClass}>
      <div className={theme.title}>{title}</div>
      <div className={theme.subtitle}>{subtitle}</div>
      {description && <div className={theme.description}>{description}</div>}
    </div>
  );
};

export default SmallCard;
