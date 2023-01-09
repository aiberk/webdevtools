import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UnitConverterPX from "./pages/UnitConverterPX";
import UnitConverterREM from "./pages/UnitConverterREM";
import CSSHeadingGenerator from "./pages/CSSHeadingGenerator";
import CSSTextGenerator from "./pages/CSSTextGenerator";
import CSSDesignTokenGenerator from "./pages/CSSDesignTokenGenerator";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="h-screen dark:bg-zinc-900">
        <NavBar />
        <Routes>
          <Route path="/converter/px" element={<UnitConverterPX />} />
          <Route path="/converter/rem/" element={<UnitConverterREM />} />
          <Route
            path="/generator/text-styling"
            element={<CSSHeadingGenerator />}
          />
          <Route
            path="/generator/design-tokens"
            element={<CSSDesignTokenGenerator />}
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
