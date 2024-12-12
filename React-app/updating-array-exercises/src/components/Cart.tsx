import React from 'react'
interface props{
    cartItem:string[];
    onClear:()=>void;
}

const Cart = ({cartItem,onClear}:props) => {
  return (<>
    <div>Cart</div>
    <ul>
{cartItem.map(item=> <li key={item}>{
item}</li> )}

    </ul>
    <button onClick={onClear}>Clear</button>
    </>);
}

export default Cart;