import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ handleAddToCart, product }) => {
  // const {handleAddToCart, product} = props;
  const { name, img, seller, ratings, price } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p>Price: Tk.{price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btnCart">
        <p className="btnText">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
