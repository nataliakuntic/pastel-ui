interface HeroSubheaderTextProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function HeroSubheaderText({
  children,
  className = "",
  ...rest
}: HeroSubheaderTextProps) {
  return (
    <h2
      {...rest}
      className={`font-display text-3xl tracking-wide text-tertiary ${className}`}
    >
      {children}
    </h2>
  );
}

export default HeroSubheaderText;
