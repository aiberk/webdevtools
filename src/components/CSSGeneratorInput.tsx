import React from "react";
import { ShortLorem, Lorem, Sentence } from "./Constants";

type Props = {
  label: string;
  value: any;
  type: string;
  changeCSS: any;
  unit?: string;
  tag?: string;
};

const CSSGeneratorInput = (props: Props) => {
  console.log(props);
  return (
    <>
      <div className="max-w-lg flex flex-col justify-between dark:bg-zinc-800">
        <label
          className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="fname"
        >
          {props.label} {props.unit == undefined ? undefined : props.unit}
        </label>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => props.changeCSS(e.target.value)}
          className="w-full h-12 flex flex-row justify-between items-center dark:text-white dark:bg-zinc-800 appearance-none  max-w-lg  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ></input>
        {props.tag == "p" ? (
          <div className="pt-1 pb-1 flex flex-col gap-2">
            <label className="dark:text-white">Use Lorem Ipsum</label>{" "}
            <div className="flex flex-row gap-2">
              <button
                onClick={() => props.changeCSS(Sentence)}
                className="text-white border border-white dark:hover:bg-white dark:hover:text-zinc-900 pt-1 pb-1 pr-2 pl-2  rounded-xl text-xs"
              >
                Sentence
              </button>
              <button
                onClick={() => props.changeCSS(ShortLorem)}
                className="text-white border border-white dark:hover:bg-white dark:hover:text-zinc-900 pt-1 pb-1 pr-2 pl-2 rounded-xl text-xs"
              >
                Short
              </button>
              <button
                onClick={() => props.changeCSS(Lorem)}
                className="text-white border border-white dark:hover:bg-white dark:hover:text-zinc-900 pt-1 pb-1 pr-2 pl-2 rounded-xl text-xs"
              >
                Long
              </button>
            </div>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default CSSGeneratorInput;
