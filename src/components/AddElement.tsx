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
  "Pick Element",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "a",
  "caption",
  "strong",
  "code",
  "abbr",
  "cite",
  "small",
  "strike",
  "sub",
];

const AddElement = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [element, setElement] = useState<string>("");

  const handleOnChange = () => {
    let prototype = {
      name: `${name.length == 0 ? "Unnamed" : name}`,
      tag: `${element.length == 0 ? "h1" : element}`,
      color: "#000000",
      fontSize: "15",
      tracking: 0,
      weight: 500,
      style: "normal",
      placeholder: "",
    };
    props.setAppState(prototype);
    setIsOpen(false);
    setElement("");
    setName("");
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
    // props.setAppState(ee);
  };
  return (
    <div className="flex flex-col justify-center gap-4">
      <button
        className="bg-green-600 dark:bg-zinc-800 border border-green-500 pt-1 pb-2 pr-4 pl-4 text-2xl rounded-lg text-white dark:text-green-500 hover:dark:bg-green-500 hover:dark:text-white"
        onClick={() => handleOnClick()}
      >
        +
      </button>{" "}
      {isOpen ? (
        <div className="flex flex-col gap-2">
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
        </div>
      ) : undefined}
    </div>
  );
};

export default AddElement;
