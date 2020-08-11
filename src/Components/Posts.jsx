import React, { useContext } from "react";
// Context
import { DataContext } from "./DataContext";

export default function Post(props) {
  const randomColour = () => {
    const colours = ["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"];
    return colours[Math.floor(Math.random() * colours.length)];
  };

  const data = useContext(DataContext);

  return (
    data &&
    data.pics.map((img, i) => {
      const { title, desc } = data.content;
      return (
        <div key={i} id="post">
          <img src={img} alt="" style={{ backgroundColor: randomColour() }} id="photo" />
          <p id="title">
            <b>{title}</b>
          </p>
          {desc}
        </div>
      );
    })
  );
}
