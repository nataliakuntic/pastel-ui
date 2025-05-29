import HeroTextBlock from "../partials/HeroTextBlock";
import MediumLogoSVG from "../partials/medium_logo.svg?react";

const HeroSubheader: React.FC = () => {
  return (
    <div className="flex justify-between pl-25 pr-35 py-7 bg-hero">
      <HeroTextBlock className="mt-4" />
      <MediumLogoSVG />
    </div>
  );
};

export default HeroSubheader;
