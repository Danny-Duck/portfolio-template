import React, { useState, useEffect } from "react";

export default function Test() {
  const [state, setState] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:3000/");
      const data = await response.json();
      setState(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {state &&
        state.map((pic) => {
          return <img src={pic.attributes.table.urls.raw} alt="" />;
        })}
    </>
  );
}
