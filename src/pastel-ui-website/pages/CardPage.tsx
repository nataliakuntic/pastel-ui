import { useState } from "react";
import LargeCard from "../../pastel-ui-library/components/Card/LargeCard";
import MediumCard from "../../pastel-ui-library/components/Card/MediumCard";
import SmallCard from "../../pastel-ui-library/components/Card/SmallCard";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import SubsectionHeading from "./partials/SubsectionHeading";
import ParagraphText from "./partials/ParagraphText";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import largeCardContent from "./partials/LargeCardContent";
import PeonyImg from "./partials/peony.png";

const CardPage: React.FC = () => {
  const [scheme, setScheme] = useState<
    "dustyrose" | "pistachio" | "honey" | "aquafrost" | "lilac"
  >("dustyrose");

  const { img, alt, title, subtitle, description, expandedDetails } =
    largeCardContent(scheme);

  return (
    <div>
      <ComponentBreadcrumb>Component/ Card</ComponentBreadcrumb>

      <ComponentHeading>Card</ComponentHeading>

      <ComponentDescription>
        A card displays content in a contained, structured layout.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Card</ComponentVariantHeading>

      <SmallCard
        title="Cherry Tomato"
        subtitle="Vegetable"
        description="Cherry tomatoes are small, round, and typically bright red or yellow in color. They have a juicy, sweet flavor and a crisp skin, making them perfect for snacking or salads.
"
        layout="text"
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Simple Card + Container</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Hover over</span> and
        <span className="font-bold"> click</span> on the button to see how it
        behaves
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <MediumCard
        title="Cherry Tomato"
        subtitle="Vegetable"
        description="Cherry tomatoes are small, round, and typically bright red or yellow in color. They have a juicy, sweet flavor and a crisp skin, making them perfect for snacking or salads.
"
        colorScheme={scheme}
        hasContainer
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Buttons + Container</ComponentVariantHeading>

      <MediumCard
        title="Cherry Tomato"
        subtitle="Vegetable"
        description="Cherry tomatoes are small, round, and typically bright red or yellow in color. They have a juicy, sweet flavor and a crisp skin, making them perfect for snacking or salads.
"
        expandedDetails="Cherry tomatoes are not only delicious but also packed with nutrients like vitamin C, potassium, and antioxidants such as lycopene, which supports heart health. They grow best in warm, sunny climates and thrive in containers or garden beds. Regular watering and pruning promote high yields, making them a favorite for home gardeners and chefs alike."
        colorScheme={scheme}
        isExpandable
        hasContainer
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Media + Simple</ComponentVariantHeading>

      <SmallCard
        img={PeonyImg}
        alt="pink peony"
        title="Pink Flower"
        subtitle="Peony"
        layout="media"
      />

      <SubsectionHeading>Code:</SubsectionHeading>

      <ComponentVariantHeading>Full Card</ComponentVariantHeading>

      <LargeCard
        img={img}
        alt={alt}
        title={title}
        subtitle={subtitle}
        description={description}
        expandedDetails={expandedDetails}
        colorScheme={scheme}
        hasContainer
        isExpandable
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default CardPage;
