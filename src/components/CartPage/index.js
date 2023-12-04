import React, { useEffect, useState } from 'react';
import "./cartPage.css";
import CartRow from "../CartRow";

const CartPage = ({ data, openCart }) => {
  const [cartData, setCartData] = useState(data);

  useEffect(() => {
    setCartData(data)
  }, [data])

  const deleteHandler = (productId) => {
    const updatedCart = cartData.map((product) => {
      if (product.id === productId) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return null;
        }
      }
      return product;
    }).filter(Boolean);

    setCartData(updatedCart);
  };

  const totalPrice = cartData.reduce((acc, chair) => acc + (chair.quantity * chair.price), 0);

  return (
    <>
      {cartData.length}
      <table className={openCart ? "tbl tblact" : "tbl"}>
        <thead>
          <tr>
            <th>Img</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>InTotal</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((product, key) => (
            <CartRow key={key} product={product} deleteHandler={deleteHandler} />
          ))}
          <p>InTotal {totalPrice}$</p>
        </tbody>
      </table>
    </>
  );
};

export default CartPage;
