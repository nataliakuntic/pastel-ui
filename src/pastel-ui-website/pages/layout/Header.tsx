import NavBar from "./NavBar";
import SmallLogoSVG from "../partials/small_logo.svg?react";

function Header() {
  return (
    <div className="flex justify-between p-10">
      <SmallLogoSVG />
      <NavBar />
    </div>
  );
}

export default Header;
