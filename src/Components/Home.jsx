import React from "react";

// Components
import Posts from "./Posts";
import Slideshow from "./Slideshow";

export default function Home() {
  return (
    <div id="home">
      <Slideshow />
      <Posts />
    </div>
  );
}
