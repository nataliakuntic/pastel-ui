import violet_thin_line from "../partials/violet_thin_line.png";
import SideMenuLink from "../partials/SideMenuLink";

const links = [
  { to: "/accordion", label: "Accordion" },
  { to: "/button", label: "Button" },
  { to: "/card", label: "Card" },
  { to: "/checkbox", label: "Checkbox" },
  { to: "/radiobutton", label: "Radio Button" },
  { to: "/select", label: "Select" },
  { to: "/textinput", label: "Text Input" },
  { to: "/textarea", label: "Text Area" },
  // ...other links
];

const SideMenu: React.FC = () => {
  return (
    <div className="mt-4 font-roboto flex flex-row tracking-wider">
      <img
        src={violet_thin_line}
        alt="violet thin line"
        className="pl-2 h-auto w-auto"
      />

      <div className="flex flex-col ml-4">
        <div className="ml-1.5 mt-4">
          <p className="uppercase font-bold bg-lavenderblue px-2 py-1 inline-block">
            Components
          </p>
        </div>

        <div className="flex flex-col gap-2 ml-4 mt-4 text-secondary">
          {links.map((link) => (
            <SideMenuLink key={link.to} to={link.to} label={link.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
