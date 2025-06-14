import Card from "../../pastel-ui-library/components/Card/Card";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import SubsectionHeading from "./partials/SubsectionHeading";
import ParagraphText from "./partials/ParagraphText";

const CardPage: React.FC = () => {
  return (
    <div>
      <ComponentBreadcrumb>Component/ Card</ComponentBreadcrumb>

      <ComponentHeading>Card</ComponentHeading>

      <ComponentDescription>
        A card displays content in a contained, structured layout.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Card</ComponentVariantHeading>

      <Card />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Simple Card + Wrapper</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Card />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Buttons + Wrapper</ComponentVariantHeading>

      <Card />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Media + Simple</ComponentVariantHeading>

      <Card />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Full Card</ComponentVariantHeading>

      <Card />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default CardPage;
