import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="flex gap-10 items-center">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/accordion">Accordion</NavLink>
      <NavLink to="/button">Button</NavLink>
    </div>
  );
};

export default NavBar;
