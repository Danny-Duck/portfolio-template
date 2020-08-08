import React, { useState, useEffect } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
// Components
import Post from "./Post";
import Slideshow from "./Slideshow";

export default function Home() {
  const [state, setState] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:3000/");
      const data = await response.json();
      setState(data);
    }
    fetchData();
  }, []);

  console.log(1 && state);
  
  return (
    <div id="home">
      <Slideshow />
      {state &&
        state.map((pic, i) => {
          return (
            <Post key={i} image={pic.attributes.table.urls.raw} title={"Post"} desc={<LoremIpsum p={1} />} />
          );
        })}
    </div>
  );
}
