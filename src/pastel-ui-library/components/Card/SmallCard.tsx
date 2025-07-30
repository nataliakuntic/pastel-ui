import { BaseCardProps } from "./types";

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
  description: `text-description font-light font-inter leading-7`,
};

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  subtitle,
  description,
  img,
  alt,
  layout = "text",
}) => {
  if (layout === "media") {
    if (!img || !alt) {
      console.warn("SmallCard with media layout requires img and alt.");
      return null;
    }

    return (
      <div className="max-w-md shadow-md p-1">
        <img src={img} alt={alt} className="w-full h-auto" />
        <div className={`${theme.title} mt-2 pl-4.5 pt-2 pb-1`}>{title}</div>
        <div className={`${theme.subtitle} pl-4.5 pb-3.5`}>{subtitle}</div>
      </div>
    );
  }

  return (
    <div className="max-w-sm border-2 border-platinum-light shadow-xs p-8 text-left space-y-3 bg-white">
      <div className={`${theme.title}`}>{title}</div>
      <div className={`${theme.subtitle}`}>{subtitle}</div>
      {description && (
        <div className={`${theme.description}`}>{description}</div>
      )}
    </div>
  );
};

export default SmallCard;
