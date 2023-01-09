import React from "react";
import { useState } from "react";

type Props = {
  label: string;
  input: any;
  equation: number;
  type: string;
};

const CopyToClipBoard = (props: Props) => {
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

  const convertToCss = (item, className, item2, className2) => {
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
    let convertedText1 = finalHeading.toString();

    let stringified2 = JSON.stringify(item2);
    let removeUnwanted2 = stringified2.replace(regex, "");
    let commasToSemiColons2 = removeUnwanted2.replace(regex2, "; ");
    let jsxToCss2 = commasToSemiColons2.replace(
      /[A-Z]/g,
      (m) => "-" + m.toLowerCase()
    );
    let finalHeading2 = "." + className2 + "{" + jsxToCss2 + "}" + ";";
    let convertedText2 = finalHeading2.toString();

    let convertedText = convertedText1 + " " + convertedText2;
    return convertedText;
  };

  const convertToJSX = (item1, item2) => {
    let item1string = JSON.stringify(item1);
    let item2string = JSON.stringify(item2);
    return "heading JSX:" + item1string + " " + "paragraph JSX:" + item2string;
  };

  const convertToStyledComponents = (item, className, item2, className2) => {
    let regex = /["'{}]/g;
    let regex2 = /[,]/g;
    let stringified = JSON.stringify(item);
    let removeUnwanted = stringified.replace(regex, "");
    let commasToSemiColons = removeUnwanted.replace(regex2, "; ");
    let jsxToCss = commasToSemiColons.replace(
      /[A-Z]/g,
      (m) => "-" + m.toLowerCase()
    );
    let finalHeading = "const " + className + "=styled.h1`" + jsxToCss + "`";
    let convertedText1 = finalHeading.toString();

    let stringified2 = JSON.stringify(item2);
    let removeUnwanted2 = stringified2.replace(regex, "");
    let commasToSemiColons2 = removeUnwanted2.replace(regex2, "; ");
    let jsxToCss2 = commasToSemiColons2.replace(
      /[A-Z]/g,
      (m) => "-" + m.toLowerCase()
    );
    let finalHeading2 = "const " + className2 + "=styled.p`" + jsxToCss2 + "`";
    let convertedText2 = finalHeading2.toString();
    return convertedText1 + " " + convertedText2;
  };

  return (
    <>
      <div className="md:max-w-xs  flex flex-col  bg-zinc-200 dark:text-white appearance-none   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <h4 className="text-black font-semibold">Copy styling for:</h4>
        <div className="md:max-w-xs  flex flex-row justify-center items-center bg-zinc-200 dark:text-white appearance-none   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <button
            onClick={(event) => {
              handleOnClick(
                event,
                convertToCss(
                  props.input[0],
                  "heading",
                  props.input[1],
                  "paragraph"
                )
              );
            }}
            className=" pt-0.5 pb-0.5 pr-1 pl-1 rounded-sm text-xs  hover:scale-110 hover:text-white"
          >
            <img className="h-14" src="/css.png" />
          </button>
          <button
            onClick={(event) => {
              handleOnClick(
                event,
                convertToJSX(props.input[0], props.input[1])
              );
            }}
            className=" pt-0.5 pb-0.5 pr-1 pl-1 rounded-sm text-xs  hover:scale-110 hover:text-white"
          >
            <img className="h-14" src="/jsx.png" />
          </button>
          <button
            onClick={(event) => {
              handleOnClick(
                event,
                convertToStyledComponents(
                  props.input[0],
                  "Heading",
                  props.input[1],
                  "Paragraph"
                )
              );
            }}
            className="pt-0.5 pb-0.5 pr-1 pl-1 rounded-sm text-xs  hover:scale-110 hover:text-white"
          >
            <img className="h-14" src="/styledComp.png" />
          </button>
        </div>
      </div>
      {showMessage ? (
        <div className="w-200 h-200 bg-pink-100 border border-pink-200 rounded-sm p-2 flex flex-row justify-center">
          <p className="truncate"> Copied to clipboard.</p>
        </div>
      ) : undefined}
    </>
  );
};

export default CopyToClipBoard;
