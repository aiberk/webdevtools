import React from "react";
import { useState } from "react";
import UnitConverterInput from "../components/UnitConverterInput";

type Props = {};

const UnitConverter = (props: Props) => {
  const [amount1, setAmount1] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col p-10 w-full max-w-xl gap-2">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="fname"
        >
          PX
        </label>
        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="fname"
          name="fname"
          placeholder="30"
          onChange={(e) => {
            setAmount1(e.target.value);
          }}
        />

        <UnitConverterInput label="CM" />
        <UnitConverterInput label="REM" />

        <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></div>
      </form>
      {amount1}
    </div>
  );
};

export default UnitConverter;
