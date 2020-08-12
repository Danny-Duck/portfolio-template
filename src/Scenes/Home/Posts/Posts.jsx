import React, { useContext } from "react";
import styled from "styled-components";
// Context
import { PostContext } from "../../../PostContext.jsx";
import { ThemeContext } from "../../../ThemeContext";

// styled components
const PostDiv = styled.div`
  margin-bottom: 5vh;
  margin-left: 8px;
  margin-right: 8px;
  width: 80vw;
`;

const Photo = styled.img`
  height: 50vh;
  box-shadow: ${(props) => props.innerShadow};
`;

const Description = styled.p`
  margin-top: 5px;
  margin-bottom: 3px;
`;

export default function Post(props) {
  const { innerShadow } = useContext(ThemeContext);

  const randomColour = () => {
    const colours = ["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"];
    return colours[Math.floor(Math.random() * colours.length)];
  };

  const data = useContext(PostContext);

  return (
    data &&
    data.pics.map((img, i) => {
      const { title, desc } = data.content;
      return (
        <PostDiv key={i} id="post">
          <Photo
            innershadow={innerShadow}
            src={img}
            alt=""
            style={{ backgroundColor: randomColour() }}
            id="photo"
          />
          <p>
            <b>{title}</b>
          </p>
          <Description>{desc}</Description>
        </PostDiv>
      );
    })
  );
}
