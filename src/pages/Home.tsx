import React from "react";
import { useState } from "react";
import UnitConverterDisplay from "../components/UnitConverterDisplay";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="h-full pt-20 bg-white dark:bg-zinc-900 dark:text-white flex flex-col items-center justify-left text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">
            Welcome to Web Dev Tool Box <span className="text-4xl p-1">🧰</span>
          </h1>

          <p className="text-xl">
            Web Dev Tool Box is a simple tool to accomplish web design tasks.
          </p>
          <br />
          <p className="text-xl font-semibold">Current Tools:</p>
          <ol>
            <li>PX unit converter</li>
            <li>REM unit converter</li>
            <li>Heading and Paragraph CSS generator</li>
          </ol>
          <br />
          <p className="text-xl font-semibold">Upcoming Tools:</p>
          <ol>
            <li>Shadow CSS Generator</li>
            <li>Layout Generator</li>
            <li>Export Types</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Home;
