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

      <nav className=" fixed  hidden lg:flex pt-11 min-h-screen bg-zinc-100 dark:bg-zinc-800 max-w-xs w-100  flex-col pr-4">
        <div className="w-full    dark:border-white p-2 dark:text-white">
          <h1 className="mt-4">
            <strong className="text-lg">Tools:</strong>
          </h1>
        </div>
        <div className="w-full  p-4 dark:text-white">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/converter/px"
          >
            <div className="flex flex-row gap-2 align-middle items-center w-full">
              <p className="text-xl">👾</p>
              <h4 className="w-40"> Pixel Converter</h4>{" "}
            </div>
          </NavLink>
        </div>

        <div className="w-full p-4 dark:text-zinc-100">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/generator/design-tokens"
          >
            <div className="flex flex-row gap-2  align-middle items-center w-full">
              <p className="text-xl">🔤</p>
              <h4 className="w-40"> Typography Tokens</h4>{" "}
            </div>
          </NavLink>
        </div>

        {/* <div className="w-full p-4 dark:text-zinc-100">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/generator/design-tokens"
          >
            <div className="flex flex-row gap-2  align-middle items-center w-full">
              <p className="text-xl"> 🌈</p>
              <h4 className="w-40"> Color Tokens</h4>{" "}
            </div>
          </NavLink>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
