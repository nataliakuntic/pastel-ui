interface HeroSubheaderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function HeroSubheaderTitle({
  children,
  className = "",
  ...rest
}: HeroSubheaderTitleProps) {
  return (
    <h1
      {...rest}
      className={`font-display text-7xl font-bold font-stretch-expanded text-secondary ${className}`}
    >
      {children}
    </h1>
  );
}

export default HeroSubheaderTitle;
