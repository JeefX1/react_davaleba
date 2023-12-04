import { useState } from 'react';
import Item from '../Item';
import './itemlist.css';

const ItemList = ({ data, setCartItems }) => {
  const defaultQuantities = {};
  data.forEach(product => {
    defaultQuantities[product.id] = 1;
  })
  const [quantities, setQuantities] = useState(defaultQuantities);
  return (<div id='itemlist'>{data.map((item, index) => <Item setCartItems={setCartItems} key={`key-${item.id}-${index}`} itemData={item} quantityState={{ quantities, setQuantities }} />)}</div>);
}

export default ItemList;