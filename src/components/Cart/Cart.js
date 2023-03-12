import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = parseFloat((total + shipping + tax).toFixed(2));

  return (
    <div className="cart">
      <h4> Orders </h4>
      <div className="cartInfo">
        <p>Selected items: {quantity}</p>
        <p>Total Price: {total}</p>
        <p>Shipping: {shipping}Tk.</p>
        <p>Tax: {tax}Tk.</p>
        <h5><span>Grand Total: {grandTotal}Tk.</span></h5>
      </div>
    </div>
  );
};

export default Cart;
