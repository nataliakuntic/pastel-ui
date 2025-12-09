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
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(true);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);

  const handleChange1 = (newIsChecked: boolean) => {
    setIsChecked1(newIsChecked);
  };

  const handleChange2 = (newIsChecked: boolean) => {
    setIsChecked2(newIsChecked);
  };

  const handleChange3 = (newIsChecked: boolean) => {
    setIsChecked3(newIsChecked);
  };

  const handleChange4 = (newIsChecked: boolean) => {
    setIsChecked4(newIsChecked);
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
        <span className="font-bold">Click</span> on the checkbox.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Checkbox
        colorScheme={scheme}
        variant="light"
        isChecked={isChecked1}
        label="Checkbox 1"
        onChange={handleChange1}
      />

      <Checkbox
        colorScheme={scheme}
        variant="light"
        isChecked={isChecked2}
        label="Checkbox 2"
        onChange={handleChange2}
      />

      <Checkbox
        colorScheme={scheme}
        variant="light"
        label="Disabled"
        isDisabled
        isChecked
        onChange={doNothing}
      />

      <Checkbox
        colorScheme={scheme}
        variant="light"
        label="Disabled"
        isDisabled
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Checkbox Dark</ComponentVariantHeading>

      <Checkbox
        variant="dark"
        isChecked={isChecked3}
        colorScheme={scheme}
        label="Checkbox 3"
        onChange={handleChange3}
      />

      <Checkbox
        variant="dark"
        isChecked={isChecked4}
        colorScheme={scheme}
        label="Checkbox 4"
        onChange={handleChange4}
      />

      <Checkbox
        colorScheme={scheme}
        variant="dark"
        isChecked
        label="Disabled"
        isDisabled
        onChange={doNothing}
      />

      <Checkbox
        colorScheme={scheme}
        variant="dark"
        label="Disabled"
        isDisabled
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default CheckboxPage;
