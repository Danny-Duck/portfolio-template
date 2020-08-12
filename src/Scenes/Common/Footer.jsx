import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext";

// styled component
const FooterDiv = styled.div`
  border-top: "solid 1px ${(props) => props.grey}";
  height: "10vh";
  background-color: ${(props) => props.grey};
  box-shadow: ${(props) => props.innerShadow};
`;

const Footer = () => {
  const { innerShadow, grey } = useContext(ThemeContext);
  return (
    <FooterDiv id="footer" grey={grey} innerShadow={innerShadow}>
      <p>Site made by @_Danny_Knows_</p>
    </FooterDiv>
  );
};

export default Footer;
