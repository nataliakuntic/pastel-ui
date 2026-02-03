import { ThemeName } from "../../../pastel-ui-library/types";

interface ColorSchemePickerProps {
  onSelect: (scheme: ThemeName) => void;
}

const ColorSchemePicker: React.FC<ColorSchemePickerProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-row gap-5 m-7">
      <button
        title="Dustyrose"
        className="w-7 h-7 rounded-full bg-dustyrose cursor-pointer"
        onClick={() => onSelect("dustyrose")}
      />
      <button
        title="Pistachio"
        className="w-7 h-7 rounded-full bg-pistachio cursor-pointer"
        onClick={() => onSelect("pistachio")}
      />
      <button
        title="Honey"
        className="w-7 h-7 rounded-full bg-honey cursor-pointer"
        onClick={() => onSelect("honey")}
      />
      <button
        title="Aquafrost"
        className="w-7 h-7 rounded-full bg-aquafrost cursor-pointer"
        onClick={() => onSelect("aquafrost")}
      />
      <button
        title="Lilac"
        className="w-7 h-7 rounded-full bg-lilac cursor-pointer"
        onClick={() => onSelect("lilac")}
      />
      <button
        title="Boutique"
        className="w-7 h-7 rounded-full bg-boutique-split cursor-pointer"
        onClick={() => onSelect("boutique")}
      />
    </div>
  );
};

export default ColorSchemePicker;
