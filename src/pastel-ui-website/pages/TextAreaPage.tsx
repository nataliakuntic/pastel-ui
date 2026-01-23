import TextArea from "../../pastel-ui-library/components/TextArea/TextArea";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";

const TextAreaPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  const [text, setText] = useState<string>("");

  const handleChange = (newValue: string) => {
    setText(newValue);
  };

  const doNothing = () => {};

  return (
    <div>
      <ComponentBreadcrumb>Component/ Text Area</ComponentBreadcrumb>

      <ComponentHeading>Text Area</ComponentHeading>

      <ComponentDescription>
        A textarea provides space for longer text such as messages,
        descriptions, or feedback.
      </ComponentDescription>

      <ComponentVariantHeading>Text Area</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <TextArea
        colorScheme={scheme}
        value={text}
        rows={6}
        cols={30}
        label="Your message:"
        placeholder="Please write your message here"
        onChange={handleChange}
      />

      <TextArea
        colorScheme={scheme}
        rows={6}
        cols={30}
        value=""
        isDisabled
        label="Disabled:"
        placeholder="You can't modify this field"
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default TextAreaPage;
