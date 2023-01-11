import React from "react";
import { appStateObject } from "../types/types";

type Props = {
  appState: appStateObject[];
};

const GenerateTokens = (props: Props) => {
  const handleClick = () => {
    const regex = /"/gm;
    const regex2 = / /gm;
    let final = "";
    props.appState.map((item, index) => {
      let cleanName = item.name.replace(regex2, "");
      let styledComponent = `const ${JSON.stringify(
        cleanName
      )}=styled.${JSON.stringify(cleanName).toLowerCase()}`;
      let body = `\`color:${item.color}; fontSize:${item.fontSize}; fontWeight:${item.weight}; fontStyle:${item.style}; letterSpacing:${item.tracking};\``;
      final = final + styledComponent + body;
    });
    let print = final.replace(regex, "");
    navigator.clipboard.writeText(print);
    console.log(props.appState);
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="w-full bg-blue-500 text-white font-semibold pt-2 pb-2 rounded-xs"
    >
      Get Styled Components
    </button>
  );
};

export default GenerateTokens;
