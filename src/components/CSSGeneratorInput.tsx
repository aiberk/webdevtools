import React from "react";

type Props = {
  label: string;
  value: any;
  type: string;
  changeCSS: any;
  unit?: string;
};

const CSSGeneratorInput = (props: Props) => {
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
      </div>
    </>
  );
};

export default CSSGeneratorInput;
