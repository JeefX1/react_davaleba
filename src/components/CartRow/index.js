import React from 'react';

const CartRow = ({ product, deleteHandler }) => {
  const { id, name, price, imgUrl, quantity } = product;

  return (
    <tr key={`product-${id}`}>
      <td className='prod-img '><img className="resp-img" src={imgUrl} alt={name} /></td>
      <td>{name}</td>
      <td>{price}$</td>
      <td>{quantity}</td>
      <td>{quantity * price}</td>
      <td><button onClick={() => deleteHandler(id)}>Delete One</button></td>
    </tr>
  );
};

export default CartRow;