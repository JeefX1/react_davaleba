import React, { useState } from "react";
import "./cart.css";
import CartPage from "../CartPage";

const Cart = ({ cartItems }) => {
  const [openCart, setOpenCart] = useState(false);
  let data = [];

  const itemKeys = Object.keys(cartItems);
  for (const key of itemKeys) {
    const item = cartItems[key];
    data.push({
      id: key,
      quantity: item.quantity,
      price: item.price,
      name: item.name,
      imgUrl: item.imgUrl,
    });
  }

  return (
    <div id="cart">
      <div style={{cursor:'pointer'}} onClick={() => setOpenCart(!openCart)}>
        {" "}
        <i className="fa fa-shopping-cart"></i>
      </div>
        <CartPage openCart={openCart} data={data} />
    </div>
  );
};

export default Cart;
