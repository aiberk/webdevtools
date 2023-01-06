import React from "react";
import { useState } from "react";
import UnitConverterDisplay from "../components/UnitConverterDisplay";

type Props = {};

const UnitTypes = [
  // { label: "PX", equation: 1 },
  { label: "CM", equation: 0.0264583333 },
  { label: "MM", equation: 0.264583333 },
  { label: "IN", equation: 0.013888888888888888 },
  // { label: "REM", equation: 0.0625 },
  // { label: "EM", equation: 0.0625 },
];

const UnitConverter = (props: Props) => {
  const [amount1, setAmount1] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <form className="flex flex-col p-10 w-full max-w-xl gap-2">
          <label
            className="block uppercase tracking-wide dark:text-white text-gray-700 text-xs font-bold mb-2"
            htmlFor="fname"
          >
            PX to convert:
          </label>

          <input
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="fname"
            name="fname"
            placeholder="0"
            onChange={(e) => {
              setAmount1(e.target.value);
            }}
          />
          <sub className="block uppercase tracking-wide dark:text-white text-gray-700 text-xs font-bold">
            {" "}
            Set 72 DPI
          </sub>
          <div className=" mt-10 flex flex-col gap-5">
            {" "}
            {UnitTypes.map((item) => (
              <div>
                <UnitConverterDisplay
                  type={"PX"}
                  label={item.label}
                  input={amount1}
                  equation={item.equation}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default UnitConverter;
