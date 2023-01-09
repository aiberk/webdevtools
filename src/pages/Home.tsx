import React from "react";
import { useState } from "react";
import UnitConverterDisplay from "../components/UnitConverterDisplay";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="h-full pt-20 bg-white dark:bg-zinc-900 dark:text-white flex flex-col items-center justify-left text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">Welcome to Web Dev Swiss Knife</h1>
          <p className="text-xl text-">
            Web Dev Swiss Knife is a simple tool to accomplish web design tasks.
          </p>
          <p className="text-xl text-">suchs as:</p>
          <ul>
            <li>Converting units</li>
            <li>Generating CSS for text</li>
            <li>Generating CSS shadows</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
