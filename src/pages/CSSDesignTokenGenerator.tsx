import React, { useState } from "react";
import CSSGeneratorInput from "../components/CSSGeneratorInput";
import CSSGeneratorInputMulti from "../components/CSSGenertorInputMulti";
import CopyToClipBoard from "../components/CopyToClipBoard";
import { Lorem } from "../components/Constants";
import CSSGeneratorInputDropDown from "../components/CSSGeneratorDropDown";
import OptionsDropDown from "../components/OptionsDropDown";

function CSSDesignTokenGenerator() {
  const [previewHeading, setPreviewHeading] = useState<string>("Heading");
  const [previewText, setPreviewText] = useState<string>(Lorem);
  const [editorStatus, setEditorStatus] = useState<string>("mobile");
  const [artBoard, setArtBoard] = useState<string>("rgb(255,255,255)");

  const [color, setColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<string>("40");
  const [tracking, setTracking] = useState<number>(2);
  const [weight, setWeight] = useState<number>(400);
  const [style, setStyle] = useState<string>("normal");

  const [H2color, setH2Color] = useState<string>("#000000");
  const [H2fontSize, setH2FontSize] = useState<string>("40");
  const [H2tracking, setH2Tracking] = useState<number>(2);
  const [H2weight, setH2Weight] = useState<number>(400);
  const [H2style, setH2Style] = useState<string>("normal");

  const [paragraphcolor, setParagraphColor] = useState<string>("#000000");
  const [paragraphfontSize, setParagraphFontSize] = useState<string>("16");
  const [paragraphtracking, setParagraphTracking] = useState<number>(0);
  const [paragraphweight, setParagraphWeight] = useState<number>(400);
  const [paragraphstyle, setParagraphStyle] = useState<string>("normal");
  const [paragraphAlign, setParagraphAlign] = useState<string>("left");

  const styleChildren = ["normal", "italic", "oblique"];
  const alignChildren = ["left", "center", "right"];
  const weightChildren = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  let cssStyle = {
    color: color,
    fontSize: `${fontSize}px`,
    letterSpacing: `${tracking}px`,
    fontWeight: `${weight}`,
    fontStyle: `${style}`,
  };

  let cssStyleH2 = {
    color: H2color,
    fontSize: `${H2fontSize}px`,
    letterSpacing: `${H2tracking}px`,
    fontWeight: `${H2weight}`,
    fontStyle: `${H2style}`,
  };

  let paragraphcssStyle = {
    color: paragraphcolor,
    fontSize: `${paragraphfontSize}px`,
    letterSpacing: `${paragraphtracking}px`,
    fontWeight: `${paragraphweight}`,
    fontStyle: `${paragraphstyle}`,
    textAlign: `${paragraphAlign}`,
  };

  return (
    <div className="flex md:flex-row flex-col  bg-zinc-200 dark:bg-zinc-700 ">
      <div className="hidden md:flex pt-11 min-h-screen max-w-xs w-full  flex-col"></div>

      {/* Artboard */}
      <div
        className={`overflow-hidden md:h-screen   md:p-0  h-full w-full flex flex-col justify-center items-center`}
      >
        <h1>Design Token generator</h1>
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
              ...cssStyle,
            }}
          >
            Heading 1
          </h1>

          <h2
            className=""
            style={{
              ...cssStyleH2,
            }}
          >
            Heading 2
          </h2>
          <h3
            className=""
            style={{
              ...cssStyle,
            }}
          >
            Heading 3
          </h3>
          <h4
            className=""
            style={{
              ...cssStyle,
            }}
          >
            Heading 4
          </h4>

          <span>
            {" "}
            <caption> Caption Large</caption>
            <caption> Caption Medium</caption>
            <caption> Caption Small</caption>
          </span>

          <a href="#link">Link</a>
          <span>
            {" "}
            <p
              style={{
                ...paragraphcssStyle,
              }}
            >
              {previewText}
            </p>
          </span>
        </div>
      </div>

      {/* Input Tab Left of UI */}
      <div className=" bg-white p-5 z-10 md:pt-20 md:max-w-xs dark:bg-zinc-800">
        <CopyToClipBoard
          label={"Get CSS"}
          input={[cssStyle, paragraphcssStyle]}
          equation={0}
          type={""}
        />
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
            <OptionsDropDown
              children={
                <>
                  {" "}
                  <CSSGeneratorInput
                    unit={"px"}
                    type="number"
                    label={"Heading Font size"}
                    value={fontSize}
                    changeCSS={(css) => setFontSize(css)}
                  />
                  <CSSGeneratorInput
                    unit={"rgb"}
                    type="color"
                    label={"Heading Color"}
                    value={color}
                    changeCSS={(css) => setColor(css)}
                  />
                  <CSSGeneratorInput
                    unit={"px"}
                    type="number"
                    label={"Heading Letter Spacing"}
                    value={tracking}
                    changeCSS={(css) => setTracking(css)}
                  />
                  <CSSGeneratorInputDropDown
                    label={"Heading Font Style"}
                    changeCSS={(css) => setStyle(css)}
                    children={styleChildren}
                    name={"Font Style"}
                  />
                  <CSSGeneratorInputDropDown
                    label={"Heading Align"}
                    changeCSS={(css) => setHeadingAlign(css)}
                    children={alignChildren}
                    name={"Heading Align"}
                  />
                  <CSSGeneratorInputDropDown
                    label={"Heading Font Weight"}
                    changeCSS={(css) => setWeight(css)}
                    children={weightChildren}
                    name={"Font Style"}
                  />
                </>
              }
              title={"H1"}
            />

            <OptionsDropDown
              children={
                <>
                  {" "}
                  <CSSGeneratorInput
                    unit={"px"}
                    type="number"
                    label={"Heading Font size"}
                    value={H2fontSize}
                    changeCSS={(css) => setH2FontSize(css)}
                  />
                  <CSSGeneratorInput
                    unit={"rgb"}
                    type="color"
                    label={"Heading Color"}
                    value={H2color}
                    changeCSS={(css) => setH2Color(css)}
                  />
                  <CSSGeneratorInput
                    unit={"px"}
                    type="number"
                    label={"Heading Letter Spacing"}
                    value={H2tracking}
                    changeCSS={(css) => setH2Tracking(css)}
                  />
                  <CSSGeneratorInputDropDown
                    label={"Heading Font Style"}
                    changeCSS={(css) => setH2Style(css)}
                    children={styleChildren}
                    name={"Font Style"}
                  />
                  <CSSGeneratorInputDropDown
                    label={"Heading Font Weight"}
                    changeCSS={(css) => setH2Weight(css)}
                    children={weightChildren}
                    name={"Font Style"}
                  />
                </>
              }
              title={"H2"}
            />
          </div>
        ) : undefined}

        {/* Paragraph Tab */}
        {editorStatus == "desktop" ? (
          <div className="flex flex-col md:p-0 p-10 w-full max-w-xl gap-4">
            <CSSGeneratorInput
              unit={"px"}
              type="number"
              label={"paragraph font size"}
              value={paragraphfontSize}
              changeCSS={(css) => setParagraphFontSize(css)}
            />

            <CSSGeneratorInput
              unit={"rgb"}
              type="color"
              label={"paragraph Color"}
              value={paragraphcolor}
              changeCSS={(css) => setParagraphColor(css)}
            />

            <CSSGeneratorInput
              unit={"px"}
              type="number"
              label={"paragraph Letter Spacing"}
              value={paragraphtracking}
              changeCSS={(css) => setParagraphTracking(css)}
            />

            <CSSGeneratorInputDropDown
              label={"paragraph Font Style"}
              changeCSS={(css) => setParagraphStyle(css)}
              children={styleChildren}
              name={"Font Style"}
            />

            <CSSGeneratorInputDropDown
              label={"paragraph Font Weight"}
              changeCSS={(css) => setParagraphWeight(css)}
              children={weightChildren}
              name={"Font Style"}
            />

            <CSSGeneratorInputDropDown
              label={"Paragraph Align"}
              changeCSS={(css) => setParagraphAlign(css)}
              children={alignChildren}
              name={"Paragraph Align"}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default CSSDesignTokenGenerator;
