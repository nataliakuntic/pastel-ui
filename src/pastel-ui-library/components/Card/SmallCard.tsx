type SmallCardLayout = "text" | "media";

interface SmallCardProps {
  title: string;
  subtitle: string;
  description?: string;
  img?: string;
  alt?: string;
  layout: SmallCardLayout;
}

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
        <div className="mt-2 font-inter text-2xl font-bold text-title pl-4.5 pt-2 pb-1">
          {title}
        </div>
        <div className="text-subtitle tracking-wider italic font-light font-inter leading-7 pl-4.5 pb-3.5">
          {subtitle}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm border-2 border-platinum-light shadow-xs p-6 text-left space-y-3 bg-white">
      <div className="font-inter text-2xl font-bold text-title">{title}</div>
      <div className="text-subtitle tracking-wider italic font-light font-inter leading-7">
        {subtitle}
      </div>
      {description && (
        <div className="text-description font-light font-inter leading-7">
          {description}
        </div>
      )}
    </div>
  );
};

export default SmallCard;
