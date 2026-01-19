import Select from "../../pastel-ui-library/components/Select/Select";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";
import selectOptions from "./partials/selectContent";

const SelectPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  const [city, setCity] = useState<string>("bergen");

  const handleChange = (newCity: string) => {
    setCity(newCity);
  };

  const doNothing = () => {};

  return (
    <div>
      <ComponentBreadcrumb>Component/ Select</ComponentBreadcrumb>

      <ComponentHeading>Select</ComponentHeading>

      <ComponentDescription>
        A select field allows users to choose one option from a predefined list.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Select</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <Select
        colorScheme={scheme}
        name="favorite-city"
        value={city}
        label="Pick your favourite city:"
        options={selectOptions}
        onChange={handleChange}
      />

      <Select
        colorScheme={scheme}
        name="favorite-city-disabled"
        value={"trondheim"}
        isDisabled
        label="Disabled version:"
        options={selectOptions}
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default SelectPage;
