interface ComponentBreadcrumbProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ComponentBreadcrumb({
  children,
  className = "",
  ...rest
}: ComponentBreadcrumbProps) {
  return (
    <h5
      {...rest}
      className={`uppercase text-sm font-medium font-stretch-expanded text-gray-800 ${className}`}
    >
      {children}
    </h5>
  );
}

export default ComponentBreadcrumb;
