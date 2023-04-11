import React from "react";

const Products = ({ cardProduct }) => {
  return (
    <div className="Card">
      <h1 className="tittleProduct">{cardProduct.modelo}</h1>
      <ul className="list">
        <li>{cardProduct.peso}</li>
        <li>{cardProduct.largo}</li>
        <li>{cardProduct.ancho}</li>
        <li>{cardProduct.personas}</li>
        <li>{cardProduct.precio}</li>
      </ul>
    </div>
  );
};

export default Products;
