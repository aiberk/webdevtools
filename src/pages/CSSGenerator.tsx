import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import CSSGeneratorInputMulti from "../components/CSSGenertorInputMulti";
import CopyToClipBoard from "../components/CopyToClipBoard";
import CSSGeneratorInputDropDown from "../components/CSSGeneratorDropDown";
import { Lorem } from "../components/Constants";

function CSSGenerator() {
  const [previewHeading, setPreviewHeading] = useState<string>("Heading");
  const [previewText, setPreviewText] = useState<string>(Lorem);
  const [color, setColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<string>("40");
  const [tracking, setTracking] = useState<string>("2");
  const [weight, setWeight] = useState(400);
  const [style, setStyle] = useState<string>("normal");
  const [headingAlign, setHeadingAlign] = useState<string>("left");

  const styleChildren = ["normal", "italic", "oblique"];
  const alignChildren = ["center", "left", "right", "justify"];
  const weightChildren = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const generateCSS = () => {
    const css = `
      color: ${color};
      font-size: ${fontSize};
    `;

    return css;
  };

  let cssStyle = {
    color: color,
    fontSize: `${fontSize}px`,
    letterSpacing: `${tracking}px`,
    fontWeight: `${weight}`,
    fontStyle: `${style}`,
    textAlign: `${headingAlign}`,
  };

  let regex = /["'{}]/g;
  let regex2 = /[,]/g;
  let cssStyleString = JSON.stringify(cssStyle);
  let removeUnwanted = cssStyleString.replace(regex, "");
  let commasToSemiColons = removeUnwanted.replace(regex2, "; ");
  let jsxToCss = commasToSemiColons.replace(
    /[A-Z]/g,
    (m) => "-" + m.toLowerCase()
  );
  let final = jsxToCss + ";";

  return (
    <div className="flex md:flex-row flex-col justify-center items-center bg-zinc-100 ">
      <div
        className={`overflow-hidden md:h-screen  md:p-0 p-10 h-full w-full flex flex-col justify-center items-center`}
      >
        <div className={`w-full max-w-lg `}>
          <h1
            style={{
              ...cssStyle,
            }}
          >
            {previewHeading}
          </h1>
          <span>
            {" "}
            <p>{previewText}</p>
          </span>
        </div>
      </div>
      <br />

      <div className=" bg-white p-5">
        <div className="flex  md:p-0 p-10 flex-col w-full md:max-w-sm max-w-xl gap-4 border border-zinc-200">
          <CSSGeneratorInput
            unit={undefined}
            type="text"
            label={"Change Preview Heading"}
            value={previewHeading}
            changeCSS={(css) => setPreviewHeading(css)}
          />
          <CSSGeneratorInput
            unit={undefined}
            type="text"
            label={"Change Preview Text"}
            value={previewText}
            changeCSS={(css) => setPreviewText(css)}
          />
          <CopyToClipBoard
            label={"Get CSS"}
            input={final}
            equation={0}
            type={""}
          />
        </div>
        <div className="flex flex-col md:p-0 p-10 w-full max-w-xl gap-4">
          <CSSGeneratorInput
            unit={"px"}
            type="number"
            label={"font size"}
            value={fontSize}
            changeCSS={(css) => setFontSize(css)}
          />

          <CSSGeneratorInput
            unit={"rgb"}
            type="color"
            label={"Color"}
            value={color}
            changeCSS={(css) => setColor(css)}
          />

          <CSSGeneratorInput
            unit={"px"}
            type="number"
            label={"Letter Spacing"}
            value={tracking}
            changeCSS={(css) => setTracking(css)}
          />

          <CSSGeneratorInputMulti
            type="radio"
            label={"Font Style"}
            changeCSS={(css) => setStyle(css)}
            children={styleChildren}
            name={"Font Style"}
          />

          <CSSGeneratorInputMulti
            type="radio"
            label={"Heading Align"}
            changeCSS={(css) => setHeadingAlign(css)}
            children={alignChildren}
            name={"Heading Align"}
          />
          <CSSGeneratorInputDropDown
            label={"Font Style"}
            changeCSS={(css) => setStyle(css)}
            children={styleChildren}
            name={"Font Style"}
          />

          <CSSGeneratorInputMulti
            type="radio"
            label={"Font Weight"}
            changeCSS={(css) => setWeight(css)}
            children={weightChildren}
            name={"Font Style"}
          />
        </div>
      </div>
    </div>
  );
}

export default CSSGenerator;
