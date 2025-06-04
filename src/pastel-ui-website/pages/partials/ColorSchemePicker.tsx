interface ColorSchemePickerProps {
  onSelect: (scheme: string) => void;
}

const ColorSchemePicker: React.FC<ColorSchemePickerProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-row gap-5 m-7">
      <button
        className="w-7 h-7 rounded-full bg-danger cursor-pointer"
        onClick={() => onSelect("danger")}
      />
      <button
        className="w-7 h-7 rounded-full bg-success cursor-pointer"
        onClick={() => onSelect("success")}
      />
      <button
        className="w-7 h-7 rounded-full bg-warning cursor-pointer"
        onClick={() => onSelect("warning")}
      />
      <button
        className="w-7 h-7 rounded-full bg-info cursor-pointer"
        onClick={() => onSelect("info")}
      />
      <button
        className="w-7 h-7 rounded-full bg-muted cursor-pointer"
        onClick={() => onSelect("muted")}
      />
    </div>
  );
};

export default ColorSchemePicker;
