interface ColorSchemePickerProps {
  onSelect: (
    scheme: "dustyrose" | "pistacchio" | "honey" | "aquafrost" | "lilac"
  ) => void;
}

const ColorSchemePicker: React.FC<ColorSchemePickerProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-row gap-5 m-7">
      <button
        className="w-7 h-7 rounded-full bg-dustyrose cursor-pointer"
        onClick={() => onSelect("dustyrose")}
      />
      <button
        className="w-7 h-7 rounded-full bg-pistachio cursor-pointer"
        onClick={() => onSelect("pistachio")}
      />
      <button
        className="w-7 h-7 rounded-full bg-honey cursor-pointer"
        onClick={() => onSelect("honey")}
      />
      <button
        className="w-7 h-7 rounded-full bg-aquafrost cursor-pointer"
        onClick={() => onSelect("aquafrost")}
      />
      <button
        className="w-7 h-7 rounded-full bg-lilac cursor-pointer"
        onClick={() => onSelect("lilac")}
      />
    </div>
  );
};

export default ColorSchemePicker;
