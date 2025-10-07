import React, { useState, useEffect } from "react";
import axios from "axios";

const ExplorePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Render backend
    axios.get("https://classy-pets-backend-7.onrender.com/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{
      padding: "30px",
      minHeight: "calc(100vh - 70px)",
      background: "linear-gradient(to bottom, #e0f7ff, #f0f8ff)"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#004466",
        marginBottom: "30px",
        fontSize: "28px",
        fontWeight: "bold"
      }}>
        Explore Our Fish & Accessories
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        {products.map(p => (
          <div
            key={p._id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
            }}
          >
            <img
              src={p.image ? `https://classy-pets-backend-7.onrender.com${p.image}` : "https://via.placeholder.com/250x150?text=No+Image"}
              alt={p.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
                transition: "transform 0.3s"
              }}
            />
            <h3 style={{
              color: "#004466",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "8px"
            }}>
              {p.name}
            </h3>
            <p style={{
              fontWeight: "bold",
              color: "#ff4500",
              marginBottom: "15px",
              fontSize: "16px"
            }}>
              ₹ {Array.isArray(p.price) ? p.price[0] : p.price}
            </p>
            <button
              onClick={() => addToCart(p)}
              style={{
                padding: "10px 25px",
                borderRadius: "25px",
                border: "none",
                background: "#00bfff",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#0095cc"}
              onMouseLeave={e => e.currentTarget.style.background = "#00bfff"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
