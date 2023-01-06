import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UnitConverterPX from "./pages/UnitConverterPX";
import UnitConverterREM from "./pages/UnitConverterREM";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="h-screen dark:bg-zinc-900">
        <NavBar />
        <Routes>
          <Route path="/" element={<UnitConverterPX />} />
          <Route path="/rem/" element={<UnitConverterREM />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
