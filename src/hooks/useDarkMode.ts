import { useState, useEffect } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<any>("light");
  const colorTheme: any = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [setTheme, colorTheme]);
  return [setTheme, colorTheme];
}

export default useDarkMode;
