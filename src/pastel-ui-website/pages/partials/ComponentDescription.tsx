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
      className={`font-roboto mb-10 text-sm tracking-wider text-primary ${className}`}
    >
      <span className={`bg-platinum ${className}`}>{children} </span>
    </p>
  );
}

export default ComponentDescription;
