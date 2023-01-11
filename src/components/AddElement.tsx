import React from "react";
import { useState } from "react";
import { appStateObject } from "../types/types";
import { ShortLorem } from "./Constants";
import CSSGeneratorInputDropDown from "./CSSGeneratorDropDown";

type Props = {
  appState: appStateObject[];
  setAppState: any;
};

const elementList = [
  "Pick html tag",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "a",
  "caption",
];

const AddElement = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = (e) => {
    let ee = {
      name: `${e}`,
      tag: `${e}`,
      color: "#000000",
      fontSize: "20",
      tracking: 0,
      weight: 500,
      style: "normal",
    };
    console.log(e);
    props.setAppState(ee);
    setIsOpen(false);
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
    // props.setAppState(ee);
  };
  return (
    <div>
      <button onClick={() => handleOnClick()}>AddElement</button>{" "}
      {isOpen ? (
        <CSSGeneratorInputDropDown
          label={"html element"}
          changeCSS={(e) => handleOnChange(e)}
          children={elementList}
          name={"html element"}
        />
      ) : undefined}
    </div>
  );
};

export default AddElement;
