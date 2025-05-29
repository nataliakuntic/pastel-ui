interface ComponentVariantHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function ComponentVariantHeading({
  children,
  className = "",
  ...rest
}: ComponentVariantHeadingProps) {
  return (
    <h1
      {...rest}
      className={`uppercase font-roboto text-5xl font-bold tracking-wider text-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export default ComponentVariantHeading;
