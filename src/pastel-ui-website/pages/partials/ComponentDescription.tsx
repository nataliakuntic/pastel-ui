interface ComponentDescription extends React.HTMLAttributes<HTMLDivElement> {}

function ComponentDescription({
  children,
  className = "",
  ...rest
}: ComponentDescription) {
  return (
    <p
      {...rest}
      className={`font-mono text-base font-medium font-stretch-expanded text-gray-800 ${className}`}
    >
      <span className={`bg-[#D9D9D9] ${className}`}>{children} </span>
    </p>
  );
}

export default ComponentDescription;
