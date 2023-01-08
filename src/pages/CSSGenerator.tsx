import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import CSSGeneratorInputMulti from "../components/CSSGenertorInputMulti";
// import { copy } from "clipboard";

function CSSGenerator() {
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("40");
  const [tracking, setTracking] = useState("2");
  const [weight, setWeight] = useState("400");
  const [style, setStyle] = useState("normal");

  const multiChildren = ["normal", "italique", "oblique"];

  const generateCSS = () => {
    const css = `
      color: ${color};
      font-size: ${fontSize};
    `;

    return css;
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`w-full h-60 flex justify-center items-center bg-zinc-100`}
        style={{
          color: color,
          fontSize: `${fontSize}px`,
          letterSpacing: `${tracking}px`,
          fontWeight: `${weight}`,
          fontStyle: `${style}`,
        }}
      >
        <h1>Sample Text</h1>
      </div>

      <div className="flex flex-col p-10 w-full max-w-xl gap-2">
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

        <CSSGeneratorInput
          unit={"px"}
          type="number"
          label={"Font Weight"}
          value={weight}
          changeCSS={(css) => setWeight(css)}
        />

        <CSSGeneratorInputMulti
          type="radio"
          label={"Font Style"}
          changeCSS={(css) => setStyle(css)}
          children={multiChildren}
        />
      </div>
      <br />
      {/* <button>Copy CSS</button>
      <br />
      <br /> */}
      {/* <textarea value={generateCSS()} readOnly /> */}
      <code>{`color:${color}`}</code>
      <code>{`font-size:${fontSize}`}</code>
      <code>{`style:${style}`}</code>
    </div>
  );
}

export default CSSGenerator;
