import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ExplorePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch products from backend
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px 20px 80px 20px", background: "#e0f7ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#004aad", textAlign: "center", marginBottom: 24, fontSize: 28, fontWeight: 700 }}>
        🐠 Explore Our Fish & Aquarium Collection
      </h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 30, gap: 12, flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            border: "1px solid #cfe9ff",
            width: "320px",
            outline: "none",
            fontSize: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "all 0.2s",
          }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1", color: "#0077ff", fontWeight: 600 }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
