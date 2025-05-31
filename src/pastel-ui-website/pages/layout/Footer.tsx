import linkedin_icon from "../partials/linkedin_icon.png";
import SmallLogoSVG from "../partials/small_logo.svg?react";
import FooterColumn from "../partials/FooterColumn";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-between ml-15 mr-30 my-20">
      <div className="flex flex-row items-start gap-4">
        <SmallLogoSVG className="w-15 h-15" />
        <a
          href="https://www.linkedin.com/in/nataliagawronskakuntic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin_icon}
            alt="small linked in icon"
            className="w-auto h-auto"
          />
        </a>
      </div>
      <FooterColumn>
        <p className="font-semibold pb-3">Community</p>
        <p>Follow on LinkedIn</p>
        <p>Report an Issue</p>
        <p>Submit Feedback</p>
      </FooterColumn>

      <FooterColumn>
        <p className="font-semibold pb-3">Extras</p>
        <p>FAQ</p>
        <p>Licence</p>
        <p>Changelog</p>
      </FooterColumn>

      <FooterColumn>
        <p className="font-semibold pb-3">Resources</p>
        <p>About Pastel UI</p>
        <p>Get Started</p>
        <p>Contact</p>
      </FooterColumn>
    </div>
  );
};

export default Footer;
