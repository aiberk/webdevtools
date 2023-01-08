import React from "react";

type Props = {
  label: string;
  changeCSS: any;
  children: any[];
  name: string;
};

const CSSGeneratorInputDropDown = (props: Props) => {
  return (
    <form className=" flex flex-col gap-1 border border-zinc-200 p-4 rounded-md">
      <label
        htmlFor={props.name}
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {props.label}
      </label>
      <div className=" flex flex-row gap-4">
        <select
          id="cars"
          name="cars"
          multiple
          onChange={(e) => props.changeCSS(e.target.value)}
        >
          {props.children.map((child) => {
            return <option value={child}>{child}</option>;
          })}
        </select>{" "}
      </div>
    </form>
  );
};

export default CSSGeneratorInputDropDown;
