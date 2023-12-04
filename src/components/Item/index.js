import "./item.css";

const Item = ({ itemData, quantityState, setCartItems }) => {
  const { quantities, setQuantities } = quantityState;

  const handleSetQuantity = (e) => {
    const { value } = e.target;
    setQuantities((prevquantities) => {
      return {
        ...prevquantities,
        [itemData.id]: Number(value),
      };
    });
  };

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const newItemQuantity = prevItems[itemData.id]
        ? {
            quantity: prevItems[itemData.id].quantity + quantities[itemData.id],
            price: itemData.price,
            name:itemData.name,
            imgUrl:itemData.imgUrl
          }
        : {
            quantity: quantities[itemData.id],
            price: itemData.price,
            name:itemData.name,
            imgUrl:itemData.imgUrl
          };

      const newCartItems = {
        ...prevItems,
        [itemData.id]: newItemQuantity,
      };
      return newCartItems;
    });

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemData.id]: 1,
    }));
  };
  return (
    <div className="item">
      <div className="item-image">
        <img src={itemData.imgUrl} className="resp-img" />
      </div>
      <p>
        <b>Name:</b>
        {itemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{itemData.description}</p>
      </div>
      <p>
        <b>Price:</b>
        {itemData.price}$
      </p>
      <p>
        <input
          onChange={handleSetQuantity}
          type="number"
          className="item-price"
          min={1}
          value={quantities[itemData.id]}
        />
      </p>
      <p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </p>
    </div>
  );
};

export default Item;
