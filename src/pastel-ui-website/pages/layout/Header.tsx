import NavBar from "./NavBar";
import SmallLogoSVG from "../partials/small_logo.svg?react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between pl-15 pr-7 py-3">
      <SmallLogoSVG />
      <NavBar />
    </div>
  );
};

export default Header;
