import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UnitConverterPX from "./pages/UnitConverterPX";
import UnitConverterREM from "./pages/UnitConverterREM";
import CSSHeadingGenerator from "./pages/CSSHeadingGenerator";
import CSSTextGenerator from "./pages/CSSTextGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="h-screen dark:bg-zinc-900">
        <NavBar />
        <Routes>
          <Route path="/converter/px" element={<UnitConverterPX />} />
          <Route path="/converter/rem/" element={<UnitConverterREM />} />
          <Route path="/generator/heading" element={<CSSHeadingGenerator />} />
          <Route path="/generator/text" element={<CSSTextGenerator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
