import React, { useState } from "react";
// import { copy } from "clipboard";

function CSSGenerator() {
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16px");

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
    <div>
      <form>
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
      <button>Copy CSS</button>
      <br />
      <br />
      <textarea value={generateCSS()} readOnly />
    </div>
  );
}

export default CSSGenerator;
