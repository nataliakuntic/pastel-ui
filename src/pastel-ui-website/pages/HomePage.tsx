import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ComponentDescription from "./partials/ComponentDescription";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>

      <p className="text-lilac">Text</p>

      <ComponentBreadcrumb>Components/ Accordion</ComponentBreadcrumb>
      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentDescription>
        An accordion allows users to expand and collapse sections of related
        content.
      </ComponentDescription>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>

      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>
        Color + One Panel + Rounded
      </ComponentVariantHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>
        Color + All Panels + Rounded
      </ComponentVariantHeading>
    </div>
  );
};

export default HomePage;
