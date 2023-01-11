import React from "react";
import { appStateObject } from "../types/types";
import { ShortLorem, Lorem } from "./Constants";

type Props = { data: appStateObject[] };

const AdditiveArtBoard = (props: Props) => {
  console.log(props.data);

  return (
    <div className="flex flex-col gap-0.5">
      {props.data.map((item, index) => {
        if (item.tag == "h1") {
          return (
            <h1
              style={{
                ...props.data[index],
                fontSize: `${props.data[index].fontSize}px`,
                letterSpacing: `${props.data[index].tracking}px`,
                fontStyle: `${props.data[index].style}`,
                fontWeight: `${props.data[index].weight}`,
              }}
            >
              {item.name}
            </h1>
          );
        } else if (item.tag == "h2") {
          return (
            <h2
              style={{
                ...props.data[index],
                fontSize: `${props.data[index].fontSize}px`,
                letterSpacing: `${props.data[index].tracking}px`,
                fontStyle: `${props.data[index].style}`,
                fontWeight: `${props.data[index].weight}`,
              }}
            >
              {item.name}
            </h2>
          );
        } else if (item.tag == "h3") {
          return (
            <h3
              style={{
                ...props.data[index],
                fontSize: `${props.data[index].fontSize}px`,
                letterSpacing: `${props.data[index].tracking}px`,
                fontStyle: `${props.data[index].style}`,
                fontWeight: `${props.data[index].weight}`,
              }}
            >
              {item.name}
            </h3>
          );
        } else if (item.tag == "h4") {
          return (
            <h4
              style={{
                ...props.data[index],
                fontSize: `${props.data[index].fontSize}px`,
                letterSpacing: `${props.data[index].tracking}px`,
                fontStyle: `${props.data[index].style}`,
                fontWeight: `${props.data[index].weight}`,
              }}
            >
              {item.name}
            </h4>
          );
        } else if (item.tag == "p") {
          return (
            <p
              style={{
                ...props.data[index],
                fontSize: `${props.data[index].fontSize}px`,
                letterSpacing: `${props.data[index].tracking}px`,
                fontStyle: `${props.data[index].style}`,
                fontWeight: `${props.data[index].weight}`,
              }}
            >
              {ShortLorem}
            </p>
          );
        } else {
          return <h1>I dont have a tag :(</h1>;
        }
      })}
    </div>
  );
};

export default AdditiveArtBoard;
