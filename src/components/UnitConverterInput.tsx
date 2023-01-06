import React from "react";

type Props = { label: string };

const UnitConverterInput = (props: Props) => {
  return (
    <>
      {" "}
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="fname"
      >
        {props.label}
      </label>
      <input
        type="text"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="fname"
        name="fname"
        placeholder={`0`}
      />
    </>
  );
};

export default UnitConverterInput;
