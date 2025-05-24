interface ComponentVariantHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

function ComponentVariantHeading({
  children,
  className = "",
  ...rest
}: ComponentVariantHeadingProps) {
  let content: React.ReactNode;

  if (typeof children === "string") {
    content = children.toUpperCase();
  } else {
    content = children;
  }
  return (
    <h1
      {...rest}
      className={`font-mono text-5xl font-semibold tracking-wide text-gray-800 ${className}`}
    >
      {content}
    </h1>
  );
}

export default ComponentVariantHeading;
