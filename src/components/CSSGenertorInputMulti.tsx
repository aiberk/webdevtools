import React from "react";

type Props = {
  label: string;
  type: string;
  changeCSS: any;
  children: string[];
  name: string;
};

const CSSGeneratorInputMulti = (props: Props) => {
  return (
    <form>
      {props.children.map((child) => {
        return (
          <>
            <input
              onChange={(e) => props.changeCSS(e.target.value)}
              type="radio"
              id={child}
              value={child}
              name={props.label}
            />
            <label htmlFor={child}>{child}</label>
          </>
        );
      })}
    </form>
  );
};

export default CSSGeneratorInputMulti;
