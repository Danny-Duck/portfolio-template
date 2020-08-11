import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Slideshow extends Component {
  render() {
    return (
      <div id={"slideshow"}>
        <Carousel>
          {["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"].map((elem, ind) => {
            return (
              <Carousel.Item key={ind}>
                <div style={{ backgroundColor: elem }} id={"slide"}>
                  {elem}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
