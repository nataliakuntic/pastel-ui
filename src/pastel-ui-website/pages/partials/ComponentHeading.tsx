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
      className={`font-mono text-5xl font-semibold tracking-wide text-gray-800 ${className}`}
    >
      {children}
    </h1>
  );
}

export default ComponentHeading;
