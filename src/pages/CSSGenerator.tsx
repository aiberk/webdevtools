import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import CSSGeneratorInputMulti from "../components/CSSGenertorInputMulti";
import CopyToClipBoard from "../components/CopyToClipBoard";
import CSSGeneratorInputDropDown from "../components/CSSGeneratorDropDown";
// import { copy } from "clipboard";

function CSSGenerator() {
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("40");
  const [tracking, setTracking] = useState("2");
  const [weight, setWeight] = useState(400);
  const [style, setStyle] = useState("normal");

  const styleChildren = ["normal", "italic", "oblique"];
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
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`w-full h-60 flex justify-center items-center bg-zinc-100`}
        style={{
          ...cssStyle,
        }}
      >
        <h1>Sample Text</h1>
      </div>
      <br />
      <CopyToClipBoard label={"Get CSS"} input={final} equation={0} type={""} />

      <div className="flex flex-col p-10 w-full max-w-xl gap-4">
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
      <br />
    </div>
  );
}

export default CSSGenerator;
