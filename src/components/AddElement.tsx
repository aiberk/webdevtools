import React from "react";
interface appStateObject {
  name: string;
  color: string;
  fontSize: string;
  tracking: number;
  weight: number;
  style: string;
}

type Props = {
  appState: appStateObject[];
  setAppState: any;
};

let ee = {
  name: "TETETETE",
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
