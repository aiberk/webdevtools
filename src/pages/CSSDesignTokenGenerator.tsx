import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import CopyToClipBoard from "../components/CopyToClipBoard";
import { Lorem } from "../components/Constants";
import OptionsDropDown from "../components/OptionsDropDown";
import OptionsDropDownGenerator from "../components/OptionsDropDownGenerator";

function CSSDesignTokenGenerator() {
  const [previewHeading, setPreviewHeading] = useState<string>("Heading");
  const [previewText, setPreviewText] = useState<string>(Lorem);
  const [editorStatus, setEditorStatus] = useState<string>("mobile");
  const [artBoard, setArtBoard] = useState<string>("rgb(255,255,255)");

  const [appState, setAppState] = useState([
    {
      name: "H1",
      color: "#000000",
      fontSize: "40",
      tracking: 0,
      weight: 400,
      style: "normal",
    },
    {
      name: "H2",
      color: "#ff0000",
      fontSize: "30",
      tracking: 0,
      weight: 500,
      style: "normal",
    },
    {
      name: "H3",
      color: "#000000",
      fontSize: "25",
      tracking: 0,
      weight: 500,
      style: "normal",
    },
    {
      name: "H4",
      color: "#000000",
      fontSize: "20",
      tracking: 0,
      weight: 500,
      style: "normal",
    },
    {
      name: "P",
      color: "#000000",
      fontSize: "16",
      tracking: 0,
      weight: 500,
      style: "normal",
    },
  ]);

  const [color, setColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<string>("40");
  const [tracking, setTracking] = useState<number>(2);
  const [weight, setWeight] = useState<number>(400);
  const [style, setStyle] = useState<string>("normal");

  const [paragraphcolor, setParagraphColor] = useState<string>("#000000");
  const [paragraphfontSize, setParagraphFontSize] = useState<string>("16");
  const [paragraphtracking, setParagraphTracking] = useState<number>(0);
  const [paragraphweight, setParagraphWeight] = useState<number>(400);
  const [paragraphstyle, setParagraphStyle] = useState<string>("normal");
  const [paragraphAlign, setParagraphAlign] = useState<string>("left");

  ///Change for export
  let cssStyle = {
    color: color,
    fontSize: `${fontSize}px`,
    letterSpacing: `${tracking}px`,
    fontWeight: `${weight}`,
    fontStyle: `${style}`,
  };

  let paragraphcssStyle = {
    color: paragraphcolor,
    fontSize: `${paragraphfontSize}px`,
    letterSpacing: `${paragraphtracking}px`,
    fontWeight: `${paragraphweight}`,
    fontStyle: `${paragraphstyle}`,
    textAlign: `${paragraphAlign}`,
  };

  const updateStateChanged = (index, key, e) => {
    //Makes a copy of the state object, to edit then replace
    let temp = appState.map((item) => {
      return { ...item };
    });
    temp[index][key] = e;
    setAppState(temp);
  };

  return (
    <div className="flex md:flex-row flex-col  bg-zinc-200 dark:bg-zinc-700 ">
      <div className="hidden md:flex pt-11 min-h-screen max-w-xs w-full  flex-col"></div>

      {/* Artboard */}
      <div
        className={`overflow-hidden md:h-screen   md:p-0  h-full w-full flex flex-col justify-center items-center`}
      >
        <h1 className="text-3xl font-semibold mb-4 dark:text-white">
          Typography Token Generator
        </h1>
        <div
          className={`w-full max-w-2xl overflow-hidden p-20`}
          style={{
            backgroundColor: `${artBoard}`,
            boxShadow: `0px -1px 5px 1px rgba(0,0,0,0.2)`,
          }}
        >
          <h1
            className=""
            style={{
              ...appState[0],
              fontSize: `${appState[0].fontSize}px`,
              letterSpacing: `${appState[0].tracking}px`,
              fontStyle: `${appState[0].style}`,
              fontWeight: `${appState[0].weight}`,
            }}
          >
            Heading 1
          </h1>

          <h2
            className=""
            style={{
              ...appState[1],
              fontSize: `${appState[1].fontSize}px`,
              letterSpacing: `${appState[1].tracking}px`,
              fontStyle: `${appState[1].style}`,
              fontWeight: `${appState[1].weight}`,
            }}
          >
            Heading 2
          </h2>
          <h3
            className=""
            style={{
              ...appState[2],
              fontSize: `${appState[2].fontSize}px`,
              letterSpacing: `${appState[2].tracking}px`,
              fontStyle: `${appState[2].style}`,
              fontWeight: `${appState[2].weight}`,
            }}
          >
            Heading 3
          </h3>
          <h4
            className=""
            style={{
              ...appState[3],
              fontSize: `${appState[3].fontSize}px`,
              letterSpacing: `${appState[3].tracking}px`,
              fontStyle: `${appState[3].style}`,
              fontWeight: `${appState[3].weight}`,
            }}
          >
            Heading 4
          </h4>
          <br />
          <span>
            {" "}
            <p
              style={{
                ...appState[4],
                fontSize: `${appState[4].fontSize}px`,
                letterSpacing: `${appState[4].tracking}px`,
                fontStyle: `${appState[4].style}`,
                fontWeight: `${appState[4].weight}`,
              }}
            >
              {previewText}
            </p>
          </span>
        </div>
      </div>

      {/* Input Tab Left of UI */}
      <div className=" bg-white p-5 z-10 md:pt-20 md:max-w-xs dark:bg-zinc-800">
        {/* <CopyToClipBoard
          label={"Get CSS"}
          input={[cssStyle, paragraphcssStyle]}
          equation={0}
          type={""}
        /> */}
        <button
          onClick={() => {
            alert("Downloading");
          }}
          className="w-full bg-blue-500 text-white font-semibold pt-2 pb-2 rounded-xs"
        >
          Download Tokens
        </button>
        <div className="flex flex-row mt-2 mb-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"
            onClick={() => {
              setEditorStatus("mobile");
            }}
          >
            Mobile
          </button>
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2`}
            onClick={() => {
              setEditorStatus("desktop");
            }}
          >
            Desktop
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
            onClick={() => {
              setEditorStatus("preview");
            }}
          >
            Artboard
          </button>
        </div>

        {/* Preview Tab */}
        {editorStatus == "preview" ? (
          <div className="flex  md:p-0 p-10 flex-col w-full md:max-w-xs gap-4  ">
            <OptionsDropDown
              children={
                <>
                  {" "}
                  <CSSGeneratorInput
                    unit={"rgb"}
                    type="color"
                    label={"Artboard Color"}
                    value={artBoard}
                    changeCSS={(css) => setArtBoard(css)}
                  />
                </>
              }
              title={"Test Title"}
            />
          </div>
        ) : undefined}

        {/*  Tab */}
        {editorStatus == "mobile" ? (
          <div className="flex flex-col md:p-0 p-10 w-full max-w-xl gap-4">
            {appState.map((item, index) => {
              return (
                <OptionsDropDown
                  title={item.name}
                  children={
                    <>
                      <OptionsDropDownGenerator
                        title={item.name}
                        fontValue={appState[index].fontSize}
                        fontFunction={(css) =>
                          updateStateChanged(index, "fontSize", css)
                        }
                        colorValue={appState[index].color}
                        colorFunction={(css) =>
                          updateStateChanged(index, "color", css)
                        }
                        trackingValue={appState[index].tracking}
                        trackingFunction={(css) =>
                          updateStateChanged(index, "tracking", css)
                        }
                        styleFunction={(css) =>
                          updateStateChanged(index, "style", css)
                        }
                        weightFunction={(css) =>
                          updateStateChanged(index, "weight", css)
                        }
                      />
                    </>
                  }
                />
              );
            })}
          </div>
        ) : undefined}

        {/* Paragraph Tab */}
        {editorStatus == "desktop" ? (
          <div className="flex flex-col md:p-0 p-10 w-full max-w-xl gap-4">
            {appState.map((item, index) => {
              return (
                <OptionsDropDown
                  title={item.name}
                  children={
                    <>
                      <OptionsDropDownGenerator
                        title={item.name}
                        fontValue={appState[index].fontSize}
                        fontFunction={(css) =>
                          updateStateChanged(index, "fontSize", css)
                        }
                        colorValue={appState[index].color}
                        colorFunction={(css) =>
                          updateStateChanged(index, "color", css)
                        }
                        trackingValue={appState[index].tracking}
                        trackingFunction={(css) =>
                          updateStateChanged(index, "tracking", css)
                        }
                        styleFunction={(css) =>
                          updateStateChanged(index, "style", css)
                        }
                        weightFunction={(css) =>
                          updateStateChanged(index, "weight", css)
                        }
                      />
                    </>
                  }
                />
              );
            })}
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default CSSDesignTokenGenerator;
