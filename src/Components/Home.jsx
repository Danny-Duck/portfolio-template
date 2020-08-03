import React, { Component } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
// Components
import Post from "./Post";
import Slideshow from "./Slideshow";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slideshow />
        {[1, 2, 3].map((i) => {
          return <Post key={i} title={"Post"} desc={<LoremIpsum p={1} />} />;
        })}
      </div>
    );
  }
}
