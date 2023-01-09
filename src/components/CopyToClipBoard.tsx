import React from "react";
import { useState } from "react";

type Props = {
  label: string;
  input: any;
  equation: number;
  type: string;
};

const UnitConverterDisplay = (props: Props) => {
  const [clipboard, setClipboard] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowMessage(true);
    navigator.clipboard.writeText(convertedText);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

  let text = props.input;
  let convertedText = text.toString();
  return (
    <>
      <div className="md:max-w-xs  flex flex-row justify-center hover:bg-zinc-500  dark:hover:text-white items-center dark:text-white appearance-none   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {/* <code className="truncate">{text}</code> */}
        <button
          onClick={(event) => {
            handleOnClick(event);
          }}
          className=" p-0.5 rounded-sm text-xs"
        >
          Copy CSS
        </button>
      </div>
      {showMessage ? (
        <div className="w-200 h-200 bg-pink-100 border border-pink-300 rounded-sm p-2 flex flex-row justify-center">
          <p className="truncate"> Copied to clipboard.</p>
        </div>
      ) : undefined}
    </>
  );
};

export default UnitConverterDisplay;
