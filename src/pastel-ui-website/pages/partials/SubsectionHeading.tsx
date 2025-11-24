interface SubsectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function SubsectionHeading({
  children,
  className = "",
  ...rest
}: SubsectionHeadingProps) {
  return (
    <h5
      {...rest}
      className={`text-3xl mb-10 mt-10 font-bold text-primary ${className}`}
    >
      {children}
    </h5>
  );
}

export default SubsectionHeading;
