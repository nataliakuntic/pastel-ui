import TextInput from "../../pastel-ui-library/components/TextInput/TextInput";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";

const TextInputPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <ComponentBreadcrumb>Component/ Text Input</ComponentBreadcrumb>

      <ComponentHeading>Text Input</ComponentHeading>

      <ComponentDescription>
        A text input gives users a field to type information such as names,
        email addresses, or phone numbers.
      </ComponentDescription>

      <ComponentVariantHeading>Text + Number Input</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <TextInput
        colorScheme={scheme}
        type="text"
        value={name}
        onChange={handleChange}
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Number Input</ComponentVariantHeading>

      <TextInput colorScheme={scheme} type="number" />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>E-mail Input</ComponentVariantHeading>

      <TextInput colorScheme={scheme} type="email" />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Password Input</ComponentVariantHeading>

      <TextInput colorScheme={scheme} type="password" />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default TextInputPage;
