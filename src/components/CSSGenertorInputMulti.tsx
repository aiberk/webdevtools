import React from "react";

type Props = {
  label: string;
  type: string;
  changeCSS: any;
  children: any[];
  name: string;
};

const CSSGeneratorInputMulti = (props: Props) => {
  return (
    <form className=" flex flex-col gap-1 border border-zinc-200 p-4 rounded-md">
      <label
        htmlFor={props.name}
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {props.label}
      </label>
      <div className=" flex flex-row gap-4">
        {props.children.map((child) => {
          return (
            <div>
              <label
                htmlFor={child}
                className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                {child}
              </label>
              <input
                onChange={(e) => props.changeCSS(e.target.value)}
                type={props.type}
                id={child}
                value={child}
                name={props.label}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default CSSGeneratorInputMulti;
