import Button from "../../pastel-ui-library/components/Button/Button";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";

const ButtonPage: React.FC = () => {
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

      <Button />
      <Button />
      <Button />
      <Button />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Pill Buttons</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <Button />
      <Button />
      <Button />
      <Button />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default ButtonPage;
