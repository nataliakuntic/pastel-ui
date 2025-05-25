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
      className={`text-3xl font-bold font-stretch-expanded text-gray-800 ${className}`}
    >
      {children}
    </h5>
  );
}

export default SubsectionHeading;
