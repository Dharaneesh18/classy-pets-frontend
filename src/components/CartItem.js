import React from "react";

const CartItem = ({ item, handleRemove }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px auto",
        padding: "10px",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>
      <button
        onClick={() => handleRemove(item._id)}
        style={{
          background: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
