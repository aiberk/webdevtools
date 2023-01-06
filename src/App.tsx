import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UnitConverter from "./pages/UnitConverter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="h-screen dark:bg-zinc-900">
        <NavBar />
        <Routes>
          <Route path="/" element={<UnitConverter />} />
          <Route path="/test/" element={<h1>Hello</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
