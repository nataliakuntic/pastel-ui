interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {}

const FooterColumn: React.FC<FooterColumnProps> = ({
  children,
  className = "",
}) => {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
};

export default FooterColumn;
