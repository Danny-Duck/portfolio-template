import React from "react";
import styled from "styled-components";

// Components
import Posts from "./Posts/Posts";
import Slideshow from "./Slideshow";

// styled components
const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <HomeDiv id="home">
      <Slideshow />
      <Posts />
    </HomeDiv>
  );
}
