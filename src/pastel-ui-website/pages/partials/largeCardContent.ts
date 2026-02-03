import CafeImg from "./cafe.png";
import ForestImg from "./forest.png";
import PeonyImg from "./peony.png";
import SandwichImg from "./sandwich.png";
import SnowImg from "./snow.jpg";
import YellowFlowerImg from "./yellowflower.png";

const largeCardContent = (scheme: string) => {
  switch (scheme) {
    case "dustyrose":
      return {
        img: PeonyImg,
        alt: "pink peony",
        title: "Pink Flower",
        subtitle: "Peony",
        description:
          "The peony is a lush, fragrant flower known for its large, ruffled blooms and vibrant colors ranging from soft pastels to deep reds. Native to Asia, Europe, and Western North America, it symbolizes romance, prosperity, and honor in many cultures. Peonies are popular in gardens and floral arrangements for their elegance and timeless beauty.",
        expandedDetails:
          "Peonies thrive in well-drained soil and sunny spots, blooming from late spring to early summer. Though slow to establish, they reward patience with decades of stunning flowers and minimal care. Their lush petals attract pollinators and evoke a nostalgic charm, making them a favorite in cottage gardens and wedding bouquets.",
      };
    case "pistachio":
      return {
        img: ForestImg,
        alt: "green forest",
        title: "Green Forest",
        subtitle: "Pine",
        description:
          "Pines are evergreen coniferous trees with needle-like leaves and distinctive seed cones, native to the Northern Hemisphere. They thrive in diverse climates and soils, contributing to forest ecosystems worldwide. Their resin and seeds have long been valued in traditional medicine, carpentry, and cuisine.",
        expandedDetails:
          "Pine trees play a crucial role in soil stabilization and carbon capture, making them essential to environmental health. Their wood is widely used in construction and furniture, prized for its durability and grain. In many cultures, pines symbolize resilience and longevity, and their calming scent is known to promote relaxation and mental clarity.",
      };
    case "honey":
      return {
        img: YellowFlowerImg,
        alt: "yellow flower sow thistle",
        title: "Yellow Flower",
        subtitle: "Sow thistle",
        description:
          "Sow thistles (Sonchus spp.) are hardy, fast-growing plants with toothed leaves and yellow flowers, often found in fields and roadsides. Though commonly considered weeds, they support pollinators and soil health. Traditionally, their young leaves have been used in herbal remedies, wild salads, and as a mild diuretic in folk medicine.",
        expandedDetails:
          "Beyond their nutritional and medicinal uses, sow thistles contribute to biodiversity by attracting bees, butterflies, and other beneficial insects. Their deep roots help break up compacted soil, improving aeration and drainage. In permaculture and organic gardening, they’re sometimes encouraged as companion plants. Despite their weedy reputation, they offer surprising ecological and cultural value when viewed through a regenerative lens.",
      };
    case "aquafrost":
      return {
        img: SandwichImg,
        alt: "fancy sandwich",
        title: "Summer Dish",
        subtitle: "Norwegian sandwich",
        description:
          "Norwegian sandwiches are open-faced, often built on hearty rye or whole-grain bread. Toppings range from smoked salmon with dill and lemon, to creamy shrimp salad, cured meats, cheeses, and pickled vegetables — each layer thoughtfully chosen. These sandwiches are reflecting both tradition and the country’s focus on fresh, wholesome ingredients.",
        expandedDetails:
          "Rooted in centuries of culinary tradition, Norwegian open-faced sandwiches — known as smørbrød — are not just meals but expressions of seasonal availability and regional pride. Whether served at festive gatherings or everyday lunches, they emphasize balance, presentation, and respect for ingredients. The careful layering isn't just aesthetic; it reflects a cultural appreciation for simplicity, quality, and nourishment, making each sandwich both comforting and artful.",
      };
    case "lilac":
      return {
        img: CafeImg,
        alt: "cafe in baerums verk",
        title: "Bærums Verk",
        subtitle: "Workshop village",
        description:
          "Bærums Verk is a historic village in Bærum, Norway, known for its beautifully preserved ironworks heritage and scenic riverside setting. Originally established in the early 17th century as an iron foundry, today Bærums Verk is a vibrant cultural destination with old workshops now being house artisan boutiques, galleries, and cozy cafés.",
        expandedDetails:
          "Beyond its industrial origins, Bærums Verk has evolved into a harmonious blend of history and creativity. Cobblestone paths wind through restored buildings that once echoed with the sound of forges, now filled with the quiet charm of modern craftsmanship. Visitors can explore art exhibitions, enjoy locally sourced cuisine, and experience seasonal events that celebrate Norwegian heritage. Nestled along the river and surrounded by forested hills, it offers both cultural richness and natural tranquility—making it a beloved retreat for locals and travelers alike.",
      };
    case "boutique":
      return {
        img: SnowImg,
        alt: "valley near the river covered with snow",
        title: "Akerselva in winter",
        subtitle: "River bank road",
        description:
          "Akerselva spans gently through Oslo, transforming into a serene winter corridor when snow settles along its banks. The river path becomes softer and slower, framed by bare trees and muted light, offering a rare stillness just minutes from the city center.",
        expandedDetails:
          "In winter, Akerselva feels almost suspended in time. Footsteps crunch against packed snow, and the sound of flowing water slips beneath ice and branches. The contrast between dark trunks, white ground, and pale sky creates a restrained, almost monochrome landscape that feels both intimate and expansive.",
      };
    default:
      return {
        img: PeonyImg,
        alt: "default flower",
        title: "Pink Flower",
        subtitle: "Peony",
        description:
          "The peony is a lush, fragrant flower known for its large, ruffled blooms and vibrant colors ranging from soft pastels to deep reds. Native to Asia, Europe, and Western North America, it symbolizes romance, prosperity, and honor in many cultures. Peonies are popular in gardens and floral arrangements for their elegance and timeless beauty.",
        expandedDetails:
          "Peonies thrive in well-drained soil and sunny spots, blooming from late spring to early summer. Though slow to establish, they reward patience with decades of stunning flowers and minimal care. Their lush petals attract pollinators and evoke a nostalgic charm, making them a favorite in cottage gardens and wedding bouquets.",
      };
  }
};

export default largeCardContent;
