import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div id="404">
      <p>404</p>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NoMatch;
