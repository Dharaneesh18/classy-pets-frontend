import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    background: "#fff",
    cursor: "pointer"
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  }}>
    <img src={product.image} alt={product.name} style={{ width: "180px", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
    <h3 style={{ fontSize: "16px", margin: "10px 0", color: "#004466" }}>{product.name}</h3>
    <p style={{ fontWeight: "bold", color: "#ff4500" }}>₹ {Array.isArray(product.price) ? product.price[0] : product.price}</p>
    <button onClick={() => addToCart(product)} style={{
      padding: "8px 15px",
      background: "#00bfff",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s",
      marginTop: "5px"
    }}
    onMouseEnter={e => e.currentTarget.style.background = "#0095cc"}
    onMouseLeave={e => e.currentTarget.style.background = "#00bfff"}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
