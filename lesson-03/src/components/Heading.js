import React from "react";

const Heading = () => {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting = "";
  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning!";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "green";
  } else {
    greeting = "Best movies";
    customStyle.color = "blue";
  }
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
};

export default Heading;