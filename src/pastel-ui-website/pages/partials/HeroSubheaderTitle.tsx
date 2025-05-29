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
      className={`font-inter text-7xl font-bold text-secondary ${className}`}
    >
      {children}
    </h1>
  );
}

export default HeroSubheaderTitle;
