import React from "react";
export default function Post(props) {
  const randomColour = () => {
    const colours = ["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"];
    return colours[Math.floor(Math.random() * colours.length)];
  };
  console.log(randomColour());
  console.log(props.image);
  return (
    <div id="post">
      <img src={props.image} alt="" style={{ backgroundColor: randomColour() }} id="photo" />
      <p id="title">{props.title}</p>
      <p id="desc">{props.desc}</p>
    </div>
  );
}
