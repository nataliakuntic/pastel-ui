interface ComponentDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ComponentDescription({
  children,
  className = "",
  ...rest
}: ComponentDescriptionProps) {
  return (
    <p
      {...rest}
      className={`font-mono text-base font-medium font-stretch-expanded text-primary ${className}`}
    >
      <span className={`bg-platinum ${className}`}>{children} </span>
    </p>
  );
}

export default ComponentDescription;
