import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "Qalaysizlar?"),
    React.createElement(
      "div",
      { className: "box" },
      React.createElement("p", {}, "Lorem ipsum")
    )
  ),
  document.getElementById("root")
);
