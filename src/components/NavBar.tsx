import React from "react";
import { useState } from "react";
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
    <div className="w-screen  bg-black text-white flex flex-row justify-center gap-10 items-center p-2">
      <nav className="flex flex-row justify-between gap-10 items-center max-w-xl text-xs">
        <a href="/"> Web Unit Converter</a>
        <a href="/"> Color Converter</a>
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
