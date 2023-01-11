import React from "react";
import { useState } from "react";
import { appStateObject } from "../types/types";
import { ShortLorem } from "./Constants";
import CSSGeneratorInputDropDown from "./CSSGeneratorDropDown";
import CSSGeneratorInput from "./CSSGeneratorInput";

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
  const [name, setName] = useState<string>("");
  const [element, setElement] = useState<string>("");

  const handleOnChange = () => {
    let prototype = {
      name: `${name}`,
      tag: `${element}`,
      color: "#000000",
      fontSize: "15",
      tracking: 0,
      weight: 500,
      style: "normal",
    };
    props.setAppState(prototype);
    setIsOpen(false);
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
    // props.setAppState(ee);
  };
  return (
    <div className="flex flex-col justify-center gap-4">
      <button
        className="bg-green-600 pt-1 pb-2 pr-4 pl-4 text-2xl rounded-lg text-white"
        onClick={() => handleOnClick()}
      >
        +
      </button>{" "}
      {isOpen ? (
        <form className="flex flex-col gap-2">
          <CSSGeneratorInput
            label={"Add Name"}
            value={undefined}
            type={""}
            changeCSS={(e) => setName(e)}
          />
          <CSSGeneratorInputDropDown
            label={"html element"}
            changeCSS={(e) => setElement(e)}
            children={elementList}
            name={"html element"}
          />
          <button
            onClick={() => {
              handleOnChange();
            }}
            className="w-full bg-blue-500 text-white font-semibold pt-2 pb-2 rounded-xs"
          >
            Add Element
          </button>
        </form>
      ) : undefined}
    </div>
  );
};

export default AddElement;
