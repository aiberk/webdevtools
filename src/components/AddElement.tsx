import React from "react";
import { appStateObject } from "../types/types";

type Props = {
  appState: appStateObject[];
  setAppState: any;
};

let ee = {
  name: "TETETETE",
  tag: "p",
  color: "#000000",
  fontSize: "20",
  tracking: 0,
  weight: 500,
  style: "normal",
};

const AddElement = (props: Props) => {
  return <button onClick={() => props.setAppState(ee)}>AddElement</button>;
};

export default AddElement;
