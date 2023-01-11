import React from "react";
interface appStateObject {
  name: string;
  color: string;
  fontSize: string;
  tracking: number;
  weight: number;
  style: string;
}

type Props = {
  appState: appStateObject[];
};

const GenerateTokens = (props: Props) => {
  const handleClick = () => {
    const regex = /"/gm;
    let final = "";
    props.appState.map((item, index) => {
      let styledComponent = `const ${JSON.stringify(
        item.name
      )}=styled.${JSON.stringify(item.name).toLowerCase()}`;
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
