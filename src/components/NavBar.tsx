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
    <div className="w-screen h-10 bg-zinc-900 text-white">
      NavBar
      <button
        className="bg-red-400 dark:bg-blue-500 ml-2 mr-2 p-2"
        onClick={handleOnClick}
      >
        Toggle {colorTheme} mode
      </button>
    </div>
  );
}

export default NavBar;
