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
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {props.label}
      </label>
      <form className=" flex flex-col gap-1 border border-zinc-200 p-4 rounded-md">
        <div className=" flex flex-row gap-4 flex-wrap">
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
                  className="w-5 h-5"
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
    </div>
  );
};

export default CSSGeneratorInputMulti;
