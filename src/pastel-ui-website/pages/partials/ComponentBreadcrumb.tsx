interface ComponentBreadcrumbProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function ComponentBreadcrumb({
  children,
  className = "",
  ...rest
}: ComponentBreadcrumbProps) {
  return (
    <h5
      {...rest}
      className={`mt-7 mb-3 uppercase text-sm font-medium font-inter tracking-wide text-secondary ${className}`}
    >
      {children}
    </h5>
  );
}

export default ComponentBreadcrumb;
