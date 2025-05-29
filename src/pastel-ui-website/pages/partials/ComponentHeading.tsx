interface ComponentHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function ComponentHeading({
  children,
  className = "",
  ...rest
}: ComponentHeadingProps) {
  return (
    <h1
      {...rest}
      className={`font-mono text-5xl font-semibold tracking-wide text-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export default ComponentHeading;
