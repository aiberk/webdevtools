import React, { Children } from "react";
import { useState } from "react";

type Props = {
  title: string;
  children: any;
  tag: string;
};

const OptionsDropDown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-between align-middle items-baseline">
        <div className="flex flex-row gap-2">
          <code className="text-orange-500 text-xs bg-zinc-200 dark:bg-zinc-700 p-0.5 rounded-sm lowercase ">
            {`<`}
            {props.tag}
            {`>`}
          </code>
          <h1 className="dark:text-white block uppercase tracking-wide text-gray-700 text-sm font-bold ">
            {props.title}
          </h1>
        </div>
        <div>
          <button
            className="dark:text-white"
            onClick={(event) => {
              handleOnClick(event);
            }}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>
      {isOpen ? <div>{props.children}</div> : undefined}
    </>
  );
};

export default OptionsDropDown;
