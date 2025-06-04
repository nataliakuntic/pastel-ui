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
      className={`font-roboto mb-4 text-5xl font-bold text-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export default ComponentHeading;
