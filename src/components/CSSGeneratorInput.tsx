import React from "react";

type Props = {
  label: string;
  value: any;
  type: string;
  changeCSS: any;
  unit: string;
};

const CSSGeneratorInput = (props: Props) => {
  return (
    <>
      <label
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="fname"
      >
        {props.label} in {props.unit}
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.changeCSS(e.target.value)}
        className="h-12 flex flex-row justify-between items-center dark:text-white appearance-none  max-w-xl w-auto  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      ></input>
    </>
  );
};

export default CSSGeneratorInput;
