import React, { Children } from "react";
import { useState } from "react";

type Props = {
  title: string;
  children: any;
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
      {" "}
      <div className="flex flex-row justify-between align-middle items-baseline">
        <h1 className="dark:text-white block uppercase tracking-wide text-gray-700 text-sm font-bold ">
          {props.title} Settings
        </h1>
        <button
          onClick={(event) => {
            handleOnClick(event);
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen ? <div>{props.children}</div> : undefined}
    </>
  );
};

export default OptionsDropDown;
