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

  const [isChecked1, setIsChecked1] = useState<boolean>(true);
  const [isChecked2, setIsChecked2] = useState<boolean>(true);

  const handleChange1 = (newIsChecked: boolean) => {
    setIsChecked1(newIsChecked);
  };

  const handleChange2 = (newIsChecked: boolean) => {
    setIsChecked2(newIsChecked);
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
        isChecked={isChecked1}
        label="Checkbox 1"
        onChange={handleChange1}
      />

      <Checkbox
        isChecked={isChecked2}
        label="Checkbox 2"
        onChange={handleChange2}
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
