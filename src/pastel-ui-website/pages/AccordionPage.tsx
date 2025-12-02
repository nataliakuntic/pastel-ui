import Accordion from "../../pastel-ui-library/components/Accordion/Accordion";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { AccordionThemeName } from "../../pastel-ui-library/components/Accordion/accordionThemes";
import accordionItems from "./partials/accordionContent";

const AccordionPage: React.FC = () => {
  const [scheme, setScheme] = useState<AccordionThemeName>("default");

  return (
    <div>
      <ComponentBreadcrumb>Component/ Accordion</ComponentBreadcrumb>

      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentDescription>
        An accordion allows users to expand and collapse sections of related
        content.
      </ComponentDescription>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>

      <ParagraphText className="mb-7">
        <span className="font-bold">Click</span> on the{" "}
        <span className="font-bold">panel</span> to see how it behaves.
      </ParagraphText>

      <Accordion items={accordionItems} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <Accordion items={accordionItems} multiple />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Accordion items={accordionItems} colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + One Panel Rounded
      </ComponentVariantHeading>

      <Accordion items={accordionItems} roundedPanels colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <Accordion items={accordionItems} multiple colorScheme={scheme} />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + All Panels Rounded
      </ComponentVariantHeading>

      <Accordion
        items={accordionItems}
        multiple
        roundedPanels
        colorScheme={scheme}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default AccordionPage;
