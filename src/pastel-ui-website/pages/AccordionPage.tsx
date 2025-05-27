import Accordion from "../../pastel-ui-library/components/Accordion/Accordion";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";

const AccordionPage: React.FC = () => {
  return (
    <div>
      <ComponentBreadcrumb>Component/ Accordion</ComponentBreadcrumb>

      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentDescription>
        An accordion allows users to expand and collapse sections of related
        content.
      </ComponentDescription>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + One Panel Rounded
      </ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + All Panels Rounded
      </ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Accordion />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default AccordionPage;
