import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import UnitConverter from "./pages/UnitConverter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <UnitConverter />
    </>
  );
}

export default App;
