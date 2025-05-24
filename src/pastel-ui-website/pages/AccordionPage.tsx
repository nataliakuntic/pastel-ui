import Accordion from "../../pastel-ui-library/components/Accordion/Accordion";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";

function AccordionPage() {
  return (
    <div>
      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>
      <Accordion />
      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ComponentVariantHeading>
        Color + One Panel Rounded
      </ComponentVariantHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>
        Color + All Panels Rounded
      </ComponentVariantHeading>
    </div>
  );
}

export default AccordionPage;
