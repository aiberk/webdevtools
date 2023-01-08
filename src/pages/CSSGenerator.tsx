import React, { useState } from "react";
// import { copy } from "clipboard";

function CSSGenerator() {
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("50px");

  const generateCSS = () => {
    const css = `
      color: ${color};
      font-size: ${fontSize};
    `;

    return css;
  };

  //   const handleCopy = () => {
  //     copy(generateCSS());
  //   };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`w-full h-60 flex justify-center items-center bg-zinc-100`}
        style={{ color: color, fontSize: `${fontSize}` }}
      >
        <h1>Sample Text</h1>
      </div>
      <form className="flex flex-col p-10 w-full max-w-xl gap-2">
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Font Size:
          <input
            type="text"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </label>
      </form>
      <br />
      {/* <button>Copy CSS</button>
      <br />
      <br /> */}
      {/* <textarea value={generateCSS()} readOnly /> */}
      <code>{`color:${color}`}</code>
      <code>{`font-size:${fontSize}`}</code>
    </div>
  );
}

export default CSSGenerator;
