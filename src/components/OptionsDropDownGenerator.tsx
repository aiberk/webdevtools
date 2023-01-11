import React from "react";
import CSSGeneratorInput from "./CSSGeneratorInput";
import CSSGeneratorInputDropDown from "./CSSGeneratorDropDown";
import { appStateObject } from "../types/types";
type Props = {
  index: number;
  title: string;
  fontValue: string;
  fontFunction: React.SetStateAction<any>;
  colorValue: string;
  colorFunction: React.SetStateAction<any>;
  trackingValue: number;
  trackingFunction: React.SetStateAction<any>;
  styleFunction: React.SetStateAction<any>;
  weightFunction: React.SetStateAction<any>;
  appState: appStateObject[];
  setAppState: any;
};

const OptionsDropDownGenerator = (props: Props) => {
  const styleChildren = ["normal", "italic", "oblique"];
  const weightChildren = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const handleOnClick = (title) => {
    props.setAppState(title);
  };
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
      <button
        className="bg-red-400 pt-1 pb-2 pr-4 pl-4  rounded-lg text-white"
        onClick={() => {
          handleOnClick(props.index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default OptionsDropDownGenerator;
