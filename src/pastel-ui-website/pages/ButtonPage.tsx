import Button from "../../pastel-ui-library/components/Button/Button";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";

const ButtonPage: React.FC = () => {
  const [scheme, setScheme] = useState<
    "danger" | "success" | "warning" | "info" | "muted"
  >("danger");
  return (
    <div>
      <ComponentBreadcrumb>Component/ Button</ComponentBreadcrumb>

      <ComponentHeading>Button</ComponentHeading>

      <ComponentDescription>
        A button triggers an action or event.
        <span className="font-bold"> PastelUI</span> buttons are accessible,
        themeable, and flexible.
      </ComponentDescription>

      <ComponentVariantHeading>Sharp-Edge Buttons</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <div className="ml-7 mt-10 flex flex-row gap-8">
        <Button colorScheme={scheme}>ACCEPT</Button>
        <Button colorScheme={scheme}>READ MORE</Button>
        <Button colorScheme={scheme}>DELETE</Button>
        <Button colorScheme={scheme}>DISABLED</Button>
      </div>

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Pill Buttons</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <div className="ml-7 mt-10 flex flex-row gap-8">
        <Button colorScheme={scheme} className="rounded-full">
          ACCEPT
        </Button>
        <Button
          colorScheme={scheme}
          className="
          rounded-full"
        >
          READ MORE
        </Button>
        <Button colorScheme={scheme} className="rounded-full">
          DELETE
        </Button>
        <Button
          colorScheme={scheme}
          className="
          rounded-full"
        >
          DISABLED
        </Button>
      </div>

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default ButtonPage;
