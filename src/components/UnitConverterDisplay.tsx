import React from "react";
import { useState } from "react";

type Props = {
  label: string;
  input: number;
  equation: number;
  type: string;
};

const UnitConverterDisplay = (props: Props) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowMessage(true);
    navigator.clipboard.writeText(convertedText);
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowMessage(false);
    }, 1500);
  };

  let text = props.input * props.equation;
  let convertedText = text.toString();
  return (
    <>
      <label
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="fname"
      >
        {props.label} converted from {props.type}
      </label>
      <div className="flex flex-row justify-between items-center dark:text-white appearance-none  max-w-xl w-auto  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <p>{text}</p>
        <button
          onClick={(event) => {
            handleOnClick(event);
          }}
          className="border-zinc-400 border p-0.5 rounded-sm text-xs"
        >
          Copy
        </button>
      </div>
      {showMessage ? (
        <div className="w-200 h-200 bg-pink-100 border border-pink-300 rounded-sm p-2 flex flex-row justify-center">
          {props.label} conversion: {convertedText} copied to clipboard.
        </div>
      ) : undefined}
    </>
  );
};

export default UnitConverterDisplay;
