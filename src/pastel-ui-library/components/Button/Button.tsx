interface ButtonProps {
  colorScheme?: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
