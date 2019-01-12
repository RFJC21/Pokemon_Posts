import React from "react";

import Rainbow from "../hoc/Rainbow";

const About = props => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Some text</p>
    </div>
  );
};

export default Rainbow(About);
