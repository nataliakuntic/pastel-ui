import HeroSubheaderTitle from "./HeroSubheaderTitle";
import HeroSubheaderText from "./HeroSubheaderText";

interface HeroTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

function HeroTextBlock({
  children,
  className = "",
  ...rest
}: HeroTextBlockProps) {
  return (
    <div {...rest} className={`space-y-3 ${className}`}>
      <HeroSubheaderTitle>Pastel UI</HeroSubheaderTitle>
      <HeroSubheaderText>React UI Component Library</HeroSubheaderText>
    </div>
  );
}

export default HeroTextBlock;
