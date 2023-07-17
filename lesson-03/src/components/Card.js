import React from "react";
import movies from "../movies";

const Card = () => {
  return (
    <div>
      {/* <h2>{props.name}</h2>
      <img src={props.imgURL} alt="" />
      <p>{props.liked}</p>
      <p>{props.year}</p> */}
      {movies.map((item) => (
        <div className="card">
          <h1>{item.name}</h1>
          <img src={item.imgURL} alt="" />
          <p>{item.liked}</p>
          <p>{item.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
