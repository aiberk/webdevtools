import React from "react";
import { useState, useEffect } from "react";

type Props = {};

const HtmlTags = (props: Props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://abyiber.pythonanywhere.com/`).then((response) =>
      console.log(response)
    );
  }, []);
  return <div className="h-screen w-screen bg-red-300">HtmlTags</div>;
};

export default HtmlTags;
