import Radiobutton from "../../pastel-ui-library/components/Radiobutton/Radiobutton";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";

const RadiobuttonPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  return (
    <div>
      <ComponentBreadcrumb>Component/ Radio Button</ComponentBreadcrumb>

      <ComponentHeading>Radio Button</ComponentHeading>

      <ComponentDescription>
        Radio button enables users to make a single choice from multiple options
        within a group.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Radio Button</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Radiobutton colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default RadiobuttonPage;
