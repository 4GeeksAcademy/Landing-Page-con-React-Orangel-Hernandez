import React from "react";
import imagen from "../../img/rigo-baby.jpg"
export const Card = () => {
  return (
    <div className="card px-0 col-3" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
  );
};