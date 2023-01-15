import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import { Lorem, starterData } from "../components/Constants";
import OptionsDropDown from "../components/OptionsDropDown";
import OptionsDropDownGenerator from "../components/OptionsDropDownGenerator";
import GenerateTokens from "../components/GenerateTokens";
import AddElement from "../components/AddElement";
import AdditiveArtBoard from "../components/AdditiveArtBoard";
import FontPicker from "font-picker-react";

function CSSDesignTokenGenerator() {
  const [previewHeading, setPreviewHeading] = useState<string>("Heading");
  const [previewText, setPreviewText] = useState<string>(Lorem);
  const [editorStatus, setEditorStatus] = useState<string>("elements");
  const [artBoard, setArtBoard] = useState<string>("rgb(255,255,255)");
  const [font, setFont] = useState<string>("Nanum Gothic");

  const [appState, setAppState] = useState(starterData);

  const updateStateChanged = (index, key, e) => {
    //Makes a copy of the state object, to edit then replace
    let temp = appState.map((item) => {
      return { ...item };
    });
    temp[index][key] = e;
    setAppState(temp);
  };

  const updateElementAdded = (e) => {
    //Makes a copy of the state object, to edit then replace
    let temp = appState.map((item) => {
      return { ...item };
    });
    temp.push(e);
    setAppState(temp);
  };

  const updateElementDeleted = (e) => {
    // Makes a copy of the state object, to edit then replace
    let temp = appState.map((item) => {
      return { ...item };
    });
    temp.splice(e, 1);
    setAppState(temp);
    console.log(appState);
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
          className={`w-full max-w-2xl overflow-hidden p-20 min-h-18 f-full`}
          style={{
            backgroundColor: `${artBoard}`,
            boxShadow: `0px -1px 5px 1px rgba(0,0,0,0.2)`,
          }}
        >
          {appState.length == 0 ? (
            <div className="pt-4 pb-4 flex flex-col gap-10">
              {" "}
              <h1 className="text-3xl text-center apply-font">
                Your style sheet is empty 😅
              </h1>
              <h1 className="text-3xl text-center">
                Use the right navigation to add elements or click below to add
                some starter elements.
              </h1>
              <div className="flex justify-center">
                <button
                  className="bg-green-500 text-white pt-1 pb-1 pr-4 pl-4 rounded-sm"
                  onClick={() => {
                    setAppState(starterData);
                  }}
                >
                  Add Starter Elements
                </button>
              </div>
            </div>
          ) : (
            <AdditiveArtBoard data={appState} />
          )}
        </div>
      </div>

      {/* Input Tab Left of UI */}
      <div className=" bg-white p-5 z-10 md:pt-20 md:max-w-xs dark:bg-zinc-800 w-96">
        <GenerateTokens appState={appState} />
        <div className="flex flex-row mt-2 mb-6 w-full">
          {editorStatus != "elements" ? (
            <button
              className="w-full bg-gray-200 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-1 px-2 rounded-l "
              onClick={() => {
                setEditorStatus("elements");
              }}
            >
              Elements
            </button>
          ) : (
            <button
              className="w-full bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-1 px-2 rounded-l "
              onClick={() => {
                setEditorStatus("elements");
              }}
            >
              Elements
            </button>
          )}

          {editorStatus != "preview" ? (
            <button
              className="w-full bg-gray-200 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-1 px-2 rounded-r "
              onClick={() => {
                setEditorStatus("preview");
              }}
            >
              Artboard
            </button>
          ) : (
            <button
              className="w-full bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-1 px-2 rounded-r "
              onClick={() => {
                setEditorStatus("preview");
              }}
            >
              Artboard
            </button>
          )}
        </div>

        {/* Preview Tab */}
        {editorStatus == "preview" ? (
          <>
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
                title={"Artboard"}
                tag={"Setting"}
              />
            </div>
            <div className="flex flex-col justify-center">
              {" "}
              <button
                className="text-white bg-green-500 pt-1 pb-1 pr-2 pl-2 rounded-sm w-full mt-4 "
                onClick={() => {
                  setAppState(starterData);
                }}
              >
                Use Starter Elements
              </button>
              <button
                className="text-white bg-red-500 pt-1 pb-1 pr-2 pl-2 rounded-sm w-full mt-4 "
                onClick={() => {
                  setAppState([]);
                }}
              >
                Reset Artboard
              </button>
            </div>
          </>
        ) : undefined}

        {/*  Elements Tab */}
        {editorStatus == "elements" ? (
          <div className="flex flex-col md:p-0 p-10 w-full max-w-xl gap-4">
            {appState.map((item, index) => {
              return (
                <OptionsDropDown
                  key={index}
                  title={item.name}
                  tag={item.tag}
                  children={
                    <>
                      <OptionsDropDownGenerator
                        index={index}
                        appState={appState}
                        setAppState={(e) => {
                          updateElementDeleted(e);
                        }}
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
                        tag={item.tag}
                        placeholder={item.placeholder}
                        placeHolderFunction={(css) =>
                          updateStateChanged(index, "placeholder", css)
                        }
                      />
                    </>
                  }
                />
              );
            })}
            <AddElement
              appState={appState}
              setAppState={(e) => {
                updateElementAdded(e);
              }}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default CSSDesignTokenGenerator;
