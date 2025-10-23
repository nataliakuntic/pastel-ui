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

  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (newIsChecked: boolean) => {
    setIsChecked(newIsChecked);
  };

  const doNothing = () => {};

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

      <Checkbox
        isChecked={isChecked}
        label="Checkbox 1"
        onChange={handleChange}
      />

      <Checkbox
        isChecked={isChecked}
        label="Checkbox 2"
        onChange={handleChange}
      />

      <Checkbox isChecked label="Disabled" isDisabled onChange={doNothing} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Checkbox Dark</ComponentVariantHeading>

      <Checkbox label="Selected" onChange={doNothing} />

      <Checkbox isChecked label="Disabled" isDisabled onChange={doNothing} />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default CheckboxPage;
