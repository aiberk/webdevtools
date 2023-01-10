import React from "react";
import CSSGeneratorInput from "./CSSGeneratorInput";
import CSSGeneratorInputDropDown from "./CSSGeneratorDropDown";
type Props = {
  title: string;
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
  const weightChildren = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div className="flex flex-col gap-4">
      <CSSGeneratorInput
        unit={"px"}
        type="number"
        label={`${props.title}  font size`}
        value={props.fontValue}
        changeCSS={(css) => props.fontFunction(css)}
      />
      <CSSGeneratorInput
        unit={"rgb"}
        type="color"
        label={`${props.title}  Color`}
        value={props.colorValue}
        changeCSS={(css) => props.colorFunction(css)}
      />
      <CSSGeneratorInput
        unit={"px"}
        type="number"
        label={`${props.title}  Letter Spacing`}
        value={props.trackingValue}
        changeCSS={(css) => props.trackingFunction(css)}
      />
      <CSSGeneratorInputDropDown
        label={`${props.title}  Font Style`}
        changeCSS={(css) => props.styleFunction(css)}
        children={styleChildren}
        name={"Font Style"}
      />
      <CSSGeneratorInputDropDown
        label={`${props.title}  Font Weight`}
        changeCSS={(css) => props.weightFunction(css)}
        children={weightChildren}
        name={"Font Style"}
      />
    </div>
  );
};

export default OptionsDropDownGenerator;
