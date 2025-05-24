import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ComponentHeading>Accordion</ComponentHeading>

      <ComponentVariantHeading>Simple + One Panel</ComponentVariantHeading>

      <ComponentVariantHeading>Simple + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>Color + One Panel</ComponentVariantHeading>

      <ComponentVariantHeading>
        Color + One Panel + Rounded
      </ComponentVariantHeading>

      <ComponentVariantHeading>Color + All Panels</ComponentVariantHeading>

      <ComponentVariantHeading>
        Color + All Panels + Rounded
      </ComponentVariantHeading>
    </div>
  );
}

export default HomePage;
