import Accordion from "../../pastel-ui-library/components/Accordion/Accordion";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";

const AccordionPage: React.FC = () => {
  const [scheme, setScheme] = useState("default");
  const items = [
    {
      id: "random1",
      label: "Accordion 1",
      content:
        "Longer information hidden inside of this panel. It is formatted with padding on the left, right, top and bottom sides for clarity",
    },
    {
      id: "random2",
      label: "Accordion 2",
      content:
        "More than one Accordion panel is open. All the information is easily accessible at the same time. The layout of the Component keeps all the breathable spacing.",
    },
    {
      id: "random3",
      label: "Accordion 3",
      content:
        "More than one Accordion panel is open. All the information is easily accessible at the same time. The layout of the Component keeps all the breathable spacing.",
    },
  ];

  return (
    <div>
      <ComponentBreadcrumb>Component/ Accordion</ComponentBreadcrumb>

      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentDescription>
        An accordion allows users to expand and collapse sections of related
        content.
      </ComponentDescription>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>

      <Accordion items={items} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <Accordion items={items} multiple />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Accordion items={items} colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + One Panel Rounded
      </ComponentVariantHeading>

      <Accordion items={items} roundedPanels colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <Accordion items={items} multiple colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + All Panels Rounded
      </ComponentVariantHeading>

      <Accordion items={items} multiple roundedPanels colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default AccordionPage;
