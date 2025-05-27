import NavBar from "./NavBar";
import SmallLogoSVG from "../partials/small_logo.svg?react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-10">
      <SmallLogoSVG />
      <NavBar />
    </div>
  );
};

export default Header;
