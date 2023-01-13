import React from "react";
import { useState, useEffect } from "react";

export interface Tags {
  description: string;
  tag: string;
}

type Props = { data: Tags[] | undefined | null };

const HtmlTags = (props: Props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch(`https://abyiber.pythonanywhere.com/`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  };
  console.log(data);

  return (
    <div className="h-screen w-screen bg-zinc-700">
      <div className="w-full grid grid-col justify-center pt-28">
        {data?.map((item) => {
          return (
            <div className="p-6 flex flex-row gap-10 align-middle items-center">
              <h1 className="p-5 bg-zinc-800 rounded-lg text-orange-500">
                {item.Tag}
              </h1>
              <p className="text-white">{item.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HtmlTags;

// useEffect(() => {
//   fetch(`https://abyiber.pythonanywhere.com/`)
//     .then((response) => {
//       // ...
//     })
//     .then((actualData) => {
//       setData(actualData);
//       setError(null);
//     })
//     .catch((err) => {
//       setError(err.message);
//       setData(null);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);
