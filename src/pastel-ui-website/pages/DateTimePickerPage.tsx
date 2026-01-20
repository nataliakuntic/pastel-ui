import DatePicker from "../../pastel-ui-library/components/DateTimePicker/DatePicker";
import TimePicker from "../../pastel-ui-library/components/DateTimePicker/TimePicker";
import ComponentHeading from "./partials/ComponentHeading";
import ComponentVariantHeading from "./partials/ComponentVariantHeading";
import ComponentBreadcrumb from "./partials/ComponentBreadcrumb";
import ComponentDescription from "./partials/ComponentDescription";
import ParagraphText from "./partials/ParagraphText";
import SubsectionHeading from "./partials/SubsectionHeading";
import ColorSchemePicker from "./partials/ColorSchemePicker";
import { useState } from "react";
import { ThemeName } from "../../pastel-ui-library/types";

const DateTimePickerPage: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeName>("dustyrose");

  const [date, setDate] = useState<string>("");

  const [time, setTime] = useState<string>("");

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
  };
  const doNothing = () => {};

  return (
    <div>
      <ComponentBreadcrumb>Component/ Date and Time Picker</ComponentBreadcrumb>

      <ComponentHeading>Date and Time Picker</ComponentHeading>

      <ComponentDescription>
        A <span className="font-bold">date picker</span> allows to select a
        specific day, month, and year. A{" "}
        <span className="font-bold">time picker</span> allows to choose a
        precise hour and minute.
      </ComponentDescription>

      <ComponentVariantHeading>Simple Date Picker</ComponentVariantHeading>

      <ParagraphText>
        <span className="font-bold">Pick</span> a color scheme.
      </ParagraphText>

      <ColorSchemePicker onSelect={setScheme} />

      <DatePicker
        colorScheme={scheme}
        value={date}
        label="Select date:"
        onChange={handleDateChange}
      />

      <DatePicker
        colorScheme={scheme}
        value="2026-01-06"
        label="Disabled version:"
        isDisabled
        onChange={doNothing}
      />

      <ComponentVariantHeading>Simple Time Picker</ComponentVariantHeading>

      <TimePicker
        colorScheme={scheme}
        label="Select time:"
        value={time}
        onChange={handleTimeChange}
      />

      <TimePicker
        colorScheme={scheme}
        value="02:05"
        isDisabled
        label="Disabled version:"
        onChange={doNothing}
      />

      <SubsectionHeading>Code:</SubsectionHeading>
    </div>
  );
};

export default DateTimePickerPage;
