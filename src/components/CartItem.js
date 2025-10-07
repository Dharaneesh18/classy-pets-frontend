import React from "react";

const CartItem = ({ item }) => (
  <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #ccc"}}>
    <div>
      <h4>{item.name}</h4>
      <p>₹{item.price} x {item.quantity}</p>
    </div>
    <img src={item.image} alt={item.name} style={{width:"80px", borderRadius:"5px"}}/>
  </div>
);

export default CartItem;
