import Radiogroup from "../../pastel-ui-library/components/Radiobutton/Radiogroup";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";
import radioOptions from "./partials/radioContent";

const RadiobuttonPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");
  const [city, setCity] = useState<string | null>("oslo");

  return (
    <div>
      <ComponentBreadcrumb>Component/ Radio Button</ComponentBreadcrumb>

      <ComponentHeading>Radio Button</ComponentHeading>

      <ComponentDescription>
        Radio button enables users to make a single choice from multiple options
        within a group.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Radio Group</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Radiogroup
        colorScheme={scheme}
        legend="Select your favorite city:"
        options={radioOptions}
        value={city}
        onChange={setCity}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default RadiobuttonPage;
