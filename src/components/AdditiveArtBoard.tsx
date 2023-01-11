import React from "react";
import { appStateObject } from "../types/types";

type Props = { data: appStateObject[] };

const AdditiveArtBoard = (props: Props) => {
  console.log(props.data);

  return (
    <div>
      {props.data.map((item) => {
        if (item.tag == "h1") {
          return <h1>{item.name}is and H1</h1>;
        } else if (item.tag == "h2") {
          return <h2>{item.name}is and H2</h2>;
        } else if (item.tag == "h3") {
          return <h3>{item.name}is and H3</h3>;
        } else if (item.tag == "h4") {
          return <h4>{item.name}is and H4</h4>;
        } else if (item.tag == "p") {
          return <p>{item.name}is and p</p>;
        } else {
          return <h1>I dont have a tag :(</h1>;
        }
      })}
    </div>
  );
};

export default AdditiveArtBoard;
