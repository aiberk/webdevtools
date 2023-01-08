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
    <div className="w-screen  bg-black text-white flex flex-row justify-center gap-10 items-center pt-2 pb-2 pl-10 pr-10">
      <nav className="flex flex-row justify-between gap-10 items-center w-full max-w-lg text-xs">
        <div className="group ">
          <h1>Converters</h1>
          <div className="w-auto p-4 h-auto absolute hidden  z-1 group-hover:flex flex-col bg-zinc-800  gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-300" : undefined
              }
              to="/converter/px"
            >
              {" "}
              PX Converter
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-300" : undefined
              }
              to="/converter/rem/"
            >
              {" "}
              REM Converter
            </NavLink>
          </div>
        </div>

        <div className="group ">
          <h1>Generators</h1>
          <div className="w-auto p-4 h-auto absolute hidden  z-1 group-hover:flex flex-col bg-zinc-800  gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-300" : undefined
              }
              to="/generator/text"
            >
              {" "}
              Text CSS Generator
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-300" : undefined
              }
              to="/generator/shadow"
            >
              {" "}
              Shadow Generator
            </NavLink>
          </div>
        </div>

        <button
          className="bg-red-400 dark:bg-blue-500 ml-2 mr-2 p-2"
          onClick={handleOnClick}
        >
          Toggle {colorTheme} mode
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
