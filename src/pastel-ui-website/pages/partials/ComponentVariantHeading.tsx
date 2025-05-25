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
      className={`uppercase font-mono text-5xl font-semibold tracking-wide text-gray-800 ${className}`}
    >
      {children}
    </h1>
  );
}

export default ComponentVariantHeading;
