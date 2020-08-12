import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

//styled components
const SlideshowDiv = styled(Carousel)`
  height: 80vh;
  margin-bottom: 7vh;
  width: 100vw;
`;

const Slide = styled(Carousel.Item)`
  background-color: ${(props) => props.backgroundcolour};
  height: 80vh;
`;

export default function Slideshow() {
  return (
    <SlideshowDiv>
      {["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"].map((colour, ind) => {
        return (
          <Slide backgroundcolour={colour} key={ind}>
            {colour}
          </Slide>
        );
      })}
    </SlideshowDiv>
  );
}
