import React from "react";
import { useState } from "react";

type Props = {
  label: string;
  input: number;
  equation: number;
};

const UnitConverterDisplay = (props: Props) => {
  const [clipboard, setClipboard] = useState("");

  const myFunc = () => {
    alert(`${props.label} clicked`);
  };

  let text = props.input * props.equation;
  let convertedText = text.toString();
  return (
    <>
      <label
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="fname"
      >
        Converted to {props.label}
      </label>
      <div className="flex flex-row justify-between items-center dark:text-white appearance-none block max-w-xl w-auto  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <p>{text}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText(convertedText);
          }}
          className="border-zinc-400 border p-0.5 rounded-sm text-xs"
        >
          Copy
        </button>
      </div>
    </>
  );
};

export default UnitConverterDisplay;
