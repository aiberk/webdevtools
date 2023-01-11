import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

type Props = {};

function NavBar({}: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [setTheme, colorTheme] = useDarkMode();

  const handleOnClick = () => {
    setIsSelected(!isSelected);
    setTheme(colorTheme);
  };

  return (
    <>
      <div className="z-20 w-screen fixed  bg-zinc-800 dark:bg-zinc-900 text-white flex flex-row justify-between gap-10 items-center pt-2 pb-2 pl-2 pr-2">
        <nav className="flex flex-row justify-between gap-10 items-center w-full  text-xs">
          <NavLink className="text-lg font-semibold" to="/">
            Web Dev Tool Box <span className="text-2xl p-1">🧰</span>
          </NavLink>

          <button
            className="bg-red-400 dark:bg-blue-500 ml-2 mr-2 p-2"
            onClick={handleOnClick}
          >
            Toggle {colorTheme} mode
          </button>
        </nav>
      </div>

      <nav className=" fixed  hidden lg:flex pt-11 min-h-screen bg-zinc-100 dark:bg-zinc-800 max-w-xs w-full  flex-col">
        <div className="w-full   border-t border-b border-zinc-200  dark:border-white p-2 dark:text-white">
          <h1>
            <strong>Unit Converters</strong>
          </h1>
        </div>
        <div className="w-full  border-b p-4 dark:text-white">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/converter/px"
          >
            PX to Anything
          </NavLink>
        </div>

        <div className="w-full   border-t border-b border-zinc-200  dark:border-zinc-100 p-2 dark:text-white">
          <h1>
            <strong>CSS Generators</strong>
          </h1>
        </div>
        <div className="w-full  border-b p-4 dark:text-zinc-100">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/generator/design-tokens"
          >
            Typography CSS Token Generator
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
