interface ParagraphText extends React.HTMLAttributes<HTMLParagraphElement> {}

function ParagraphText({ children, className = "", ...rest }: ParagraphText) {
  return (
    <p
      {...rest}
      className={`text-xl/7 font-normal font-stretch-expanded text-gray-800 ${className}`}
    >
      {children}
    </p>
  );
}

export default ParagraphText;
