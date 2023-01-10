import React from "react";
import CSSGeneratorInput from "./CSSGeneratorInput";
import CSSGeneratorInputDropDown from "./CSSGeneratorDropDown";
type Props = {
  fontValue: string;
  fontFunction: React.SetStateAction<any>;
  colorValue: string;
  colorFunction: React.SetStateAction<any>;
  trackingValue: number;
  trackingFunction: React.SetStateAction<any>;
  styleFunction: React.SetStateAction<any>;
  weightFunction: React.SetStateAction<any>;
};

const OptionsDropDownGenerator = (props: Props) => {
  const styleChildren = ["normal", "italic", "oblique"];
  const alignChildren = ["left", "center", "right"];
  const weightChildren = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div>
      <CSSGeneratorInput
        unit={"px"}
        type="number"
        label={"Heading Font size"}
        value={props.fontValue}
        changeCSS={(css) => props.fontFunction(css)}
      />
      <CSSGeneratorInput
        unit={"rgb"}
        type="color"
        label={"Heading Color"}
        value={props.colorValue}
        changeCSS={(css) => props.colorFunction(css)}
      />
      <CSSGeneratorInput
        unit={"px"}
        type="number"
        label={"Heading Letter Spacing"}
        value={props.trackingValue}
        changeCSS={(css) => props.trackingFunction(css)}
      />
      <CSSGeneratorInputDropDown
        label={"Heading Font Style"}
        changeCSS={(css) => props.styleFunction(css)}
        children={styleChildren}
        name={"Font Style"}
      />
      <CSSGeneratorInputDropDown
        label={"Heading Font Weight"}
        changeCSS={(css) => props.weightFunction(css)}
        children={weightChildren}
        name={"Font Style"}
      />
    </div>
  );
};

export default OptionsDropDownGenerator;
