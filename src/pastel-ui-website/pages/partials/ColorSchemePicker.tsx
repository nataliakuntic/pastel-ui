const ColorSchemePicker: React.FC = () => {
  return (
    <div className="flex flex-row gap-5 mt-10 m-7">
      <button className="w-7 h-7 rounded-full bg-danger cursor-pointer" />
      <button className="w-7 h-7 rounded-full bg-success cursor-pointer" />
      <button className="w-7 h-7 rounded-full bg-warning cursor-pointer" />
      <button className="w-7 h-7 rounded-full bg-info cursor-pointer" />
      <button className="w-7 h-7 rounded-full bg-muted cursor-pointer" />
    </div>
  );
};

export default ColorSchemePicker;
