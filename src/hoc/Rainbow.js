import React from "react";

//i wwant to pass some rondom color text to the wrapped compon
//nent

const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "green", "blue"];
  const randomColour = colours[Math.floor(Math.random() * 3)];
  const className = randomColour + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
