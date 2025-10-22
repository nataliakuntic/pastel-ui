import Checkbox from "../../pastel-ui-library/components/Checkbox/Checkbox";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";

const CheckboxPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  return (
    <div>
      <ComponentBreadcrumb>Component/ Checkbox</ComponentBreadcrumb>

      <ComponentHeading>Checkbox</ComponentHeading>

      <ComponentDescription>
        A checkbox allows users to select one or more options from a set,
        toggling between checked and unchecked states.
      </ComponentDescription>

      <ComponentVariantHeading>Checkbox Light</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and{" "}
        <span className="font-bold">click</span> on the button to see how it
        behaves.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Checkbox />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Checkbox Dark</ComponentVariantHeading>

      <Checkbox />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default CheckboxPage;
