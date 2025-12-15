import { ThemeName } from "../../types";

interface RadiobuttonProps {
  colorScheme: ThemeName;
}

const Radiobutton: React.FC<RadiobuttonProps> = ({ colorScheme }) => {
  return (
    <fieldset>
      <legend>Select your favorite city:</legend>
      <div>
        <input type="radio" id="radio1" name="city" value="bergen" />
        <label>Bergen</label>
      </div>
      <div>
        <input type="radio" id="radio2" name="city" value="oslo" />
        <label>Oslo</label>
      </div>
      <div>
        <input type="radio" id="radio3" name="city" value="stavanger" />
        <label>Stavanger</label>
      </div>
      <div>
        <input type="radio" id="radio4" name="city" value="trondheim" />
        <label>Trondheim</label>
      </div>
    </fieldset>
  );
};

export default Radiobutton;
