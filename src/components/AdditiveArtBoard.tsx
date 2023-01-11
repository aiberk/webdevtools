import React from "react";
import { appStateObject } from "../types/types";
import { ShortLorem, Lorem } from "./Constants";

type Props = { data: appStateObject[] };

const AdditiveArtBoard = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
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
                {item.placeholder == "" ? item.name : item.placeholder}
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
                {item.placeholder == "" ? item.name : item.placeholder}
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
                {item.placeholder == "" ? item.name : item.placeholder}
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
                {item.placeholder == "" ? item.name : item.placeholder}
              </h4>
            );
          } else if (item.tag == "h5") {
            return (
              <h5
                style={{
                  ...props.data[index],
                  fontSize: `${props.data[index].fontSize}px`,
                  letterSpacing: `${props.data[index].tracking}px`,
                  fontStyle: `${props.data[index].style}`,
                  fontWeight: `${props.data[index].weight}`,
                }}
              >
                {item.placeholder == "" ? item.name : item.placeholder}
              </h5>
            );
          } else if (item.tag == "h6") {
            return (
              <h6
                style={{
                  ...props.data[index],
                  fontSize: `${props.data[index].fontSize}px`,
                  letterSpacing: `${props.data[index].tracking}px`,
                  fontStyle: `${props.data[index].style}`,
                  fontWeight: `${props.data[index].weight}`,
                }}
              >
                {item.placeholder == "" ? item.name : item.placeholder}
              </h6>
            );
          } else if (item.tag == "a") {
            return (
              <a
                href="#"
                style={{
                  ...props.data[index],
                  fontSize: `${props.data[index].fontSize}px`,
                  letterSpacing: `${props.data[index].tracking}px`,
                  fontStyle: `${props.data[index].style}`,
                  fontWeight: `${props.data[index].weight}`,
                }}
              >
                {item.placeholder == "" ? item.name : item.placeholder}
              </a>
            );
          } else if (item.tag == "caption") {
            return (
              <caption
                className="text-left"
                style={{
                  ...props.data[index],
                  fontSize: `${props.data[index].fontSize}px`,
                  letterSpacing: `${props.data[index].tracking}px`,
                  fontStyle: `${props.data[index].style}`,
                  fontWeight: `${props.data[index].weight}`,
                }}
              >
                {item.placeholder == "" ? item.name : item.placeholder}
              </caption>
            );
          } else {
            return undefined;
          }
        })}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {props.data.map((item, index) => {
          if (item.tag == "p") {
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
                {item.placeholder == "" ? ShortLorem : item.placeholder}
              </p>
            );
          } else {
            return undefined;
          }
        })}
      </div>
    </>
  );
};

export default AdditiveArtBoard;
