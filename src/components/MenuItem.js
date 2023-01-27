import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> <br></br>{name} </h1>
      <p> Php. {price} </p>
    </div>
  );
}

export default MenuItem;
