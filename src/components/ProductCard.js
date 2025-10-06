import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [selectedPrice, setSelectedPrice] = useState(
    Array.isArray(product.price) ? product.price[0] : product.price
  );

  const prices = Array.isArray(product.price) ? product.price : [product.price];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7ff, #c2e7ff)",
        borderRadius: 16,
        padding: 16,
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      {/* Product Image */}
      {product.image && (
        <div style={{ overflow: "hidden", borderRadius: 12, marginBottom: 12 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      )}

      {/* Product Name */}
      <h3 style={{ fontSize: 18, color: "#004aad", fontWeight: 700, marginBottom: 8 }}>
        {product.name}
      </h3>

      {/* Price Selector */}
      <div style={{ marginBottom: 12 }}>
        {prices.map((p, i) => (
          <span
            key={i}
            onClick={() => setSelectedPrice(p)}
            style={{
              display: "inline-block",
              margin: "4px 6px",
              padding: "6px 10px",
              borderRadius: 8,
              border: selectedPrice === p ? "2px solid #0077ff" : "1px solid #a0dfff",
              background: selectedPrice === p ? "#0077ff" : "transparent",
              color: selectedPrice === p ? "#fff" : "#0077ff",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            ₹{p}
          </span>
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart({ ...product, price: selectedPrice })}
        style={{
          background: "#00c49f",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#00997f";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#00c49f";
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
