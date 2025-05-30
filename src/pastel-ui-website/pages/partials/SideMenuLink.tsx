import { NavLink } from "react-router-dom";

interface SideMenuLinkProps {
  to: string;
  label: string;
}

const SideMenuLink: React.FC<SideMenuLinkProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `pl-2 border-l-4 transition-colors duration-200
         ${
           isActive
             ? "border-violetmist text-violetmist font-semibold"
             : "border-transparent text-secondary"
         }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SideMenuLink;
