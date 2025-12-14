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
  const [age, setAge] = useState<number>(18);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = parseInt(e.target.value) || 0;
    setAge(newAge);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const doNothing = () => {};

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
        label="Name:"
        placeholder="Enter your first name"
        onChange={handleNameChange}
      />

      <TextInput
        colorScheme={scheme}
        type="text"
        value=""
        isDisabled
        label="Disabled:"
        placeholder="You can't modify this field"
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Number Input</ComponentVariantHeading>

      <TextInput
        colorScheme={scheme}
        type="number"
        value={age}
        label="Age:"
        placeholder="Enter your phone number"
        onChange={handleAgeChange}
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>E-mail Input</ComponentVariantHeading>

      <TextInput
        colorScheme={scheme}
        type="email"
        value={email}
        label="E-mail:"
        placeholder="Enter your e-mail"
        onChange={handleEmailChange}
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Password Input</ComponentVariantHeading>

      <TextInput
        colorScheme={scheme}
        type="password"
        value={password}
        label="Password:"
        onChange={handlePasswordChange}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default TextInputPage;
