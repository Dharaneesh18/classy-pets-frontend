import React, { useState, useEffect } from "react";

const CartPage = ({ cart, setPage }) => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = cart.map(p => ({ ...p, quantity: p.quantity || 1 }));
    setCartItems(items);
  }, [cart]);

  useEffect(() => {
    const sum = cartItems.reduce((acc, item) => {
      const price = Array.isArray(item.price) ? item.price[0] : item.price;
      return acc + price * item.quantity;
    }, 0);
    setTotal(sum);
  }, [cartItems]);

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    const updated = cartItems.map(item => item._id === id ? { ...item, quantity: qty } : item);
    setCartItems(updated);
  };

  const placeOrder = () => {
    if (!name || !number || !address) {
      alert("Please enter Name, Number & Address");
      return;
    }
    const text = `Order Details:\n${cartItems.map(p => `${p.name} x${p.quantity}`).join("\n")}\n\nTotal: ₹${total}\nName: ${name}\nNumber: ${number}\nAddress: ${address}`;
    const whatsappUrl = `https://wa.me/9629134868?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setMessage("✅ Order placed! Please check WhatsApp to confirm.");
  };

  return (
    <div style={{
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "auto",
      background: "linear-gradient(to bottom, #e0f7ff, #f0f8ff)",
      minHeight: "calc(100vh - 70px)"
    }}>
      
      {/* Back Button */}
      <div
        style={{
          marginBottom: "20px",
          cursor: "pointer",
          color: "#00bfff",
          fontWeight: "bold",
          fontSize: "18px",
          transition: "all 0.3s"
        }}
        onClick={() => setPage("explore")}
        onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
        onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
      >
        ← Back
      </div>

      <h2 style={{ textAlign: "center", color: "#004466", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>
        Your Cart
      </h2>

      {cartItems.map(p => (
        <div key={p._id} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          transition: "transform 0.3s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <span style={{ flex: 2 }}>{p.name}</span>
          <span style={{ flex: 1 }}>₹ {Array.isArray(p.price) ? p.price[0] : p.price}</span>
          <input
            type="number"
            value={p.quantity}
            min={1}
            onChange={e => updateQuantity(p._id, parseInt(e.target.value))}
            style={{
              width: "60px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              textAlign: "center"
            }}
          />
          <span style={{ flex: 1, fontWeight: "bold", color: "#ff4500" }}>
            ₹ {(Array.isArray(p.price) ? p.price[0] : p.price) * p.quantity}
          </span>
        </div>
      ))}

      <h3 style={{ textAlign: "right", marginTop: "20px", color: "#004466" }}>Total: ₹ {total}</h3>

      <div style={{ marginTop: "30px" }}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "10px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="Number" value={number} onChange={e => setNumber(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "10px", border: "1px solid #ccc" }} />
        <textarea placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "10px", border: "1px solid #ccc" }} />
        <button onClick={placeOrder} style={{
          width: "100%",
          padding: "15px",
          background: "#00bfff",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "all 0.3s"
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#0095cc"}
          onMouseLeave={e => e.currentTarget.style.background = "#00bfff"}
        >
          Place Order via WhatsApp
        </button>
        {message && <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>{message}</p>}
      </div>
    </div>
  );
};

export default CartPage;
