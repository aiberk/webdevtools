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
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    input: string
  ) => {
    event.preventDefault();
    setShowMessage(true);
    navigator.clipboard.writeText(input);
    console.log(props.input[1]);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

  const convertToCss = (item, className) => {
    let regex = /["'{}]/g;
    let regex2 = /[,]/g;
    let stringified = JSON.stringify(item);
    let removeUnwanted = stringified.replace(regex, "");
    let commasToSemiColons = removeUnwanted.replace(regex2, "; ");
    let jsxToCss = commasToSemiColons.replace(
      /[A-Z]/g,
      (m) => "-" + m.toLowerCase()
    );
    let finalHeading = "." + className + "{" + jsxToCss + "}" + ";";
    let convertedText = finalHeading.toString();
    return convertedText;
  };

  return (
    <>
      <div className="md:max-w-xs  flex flex-row justify-center items-center dark:text-white appearance-none   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {/* <code className="truncate">{text}</code> */}
        <button
          onClick={(event) => {
            handleOnClick(event, convertToCss(props.input[0], "heading"));
          }}
          className=" pt-0.5 pb-0.5 pr-1 pl-1 rounded-sm text-xs border border-zinc-500 hover:bg-zinc-500 hover:text-white"
        >
          CSS
        </button>
        <button
          onClick={(event) => {
            handleOnClick(event, JSON.stringify(props.input[1]));
          }}
          className=" pt-0.5 pb-0.5 pr-1 pl-1 rounded-sm text-xs border border-zinc-500 hover:bg-zinc-500 hover:text-white"
        >
          JSX
        </button>
      </div>
      {showMessage ? (
        <div className="w-200 h-200 bg-pink-100 border border-pink-200 rounded-sm p-2 flex flex-row justify-center">
          <p className="truncate"> Copied to clipboard.</p>
        </div>
      ) : undefined}
    </>
  );
};

export default UnitConverterDisplay;
