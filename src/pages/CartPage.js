import React, { useState } from "react";

const CartPage = ({ cart, updateQty, removeFromCart, clearCart, onBack }) => {
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleBuyNow = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details!");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const msg = `🐠 Order from Classy Pets & Aquarium 🐠
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Order Details:
${cart.map(item => `${item.name} - ${item.qty} pcs - ₹${item.price * item.qty}`).join("\n")}

Total Amount: ₹${totalAmount}`;

    const phone = "919629134868";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    clearCart();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f6fbff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={{ color: "#004aad" }}>Classy Pets & Aquarium</h1>
        <button onClick={onBack} style={{ background: "#00c49f", color: "white", border: "none", padding: "8px 14px", borderRadius: 8, cursor: "pointer" }}>← Back</button>
      </div>

      {/* Cart */}
      {cart.length === 0 ? (
        <p style={{ color: "#0077b6", fontSize: 18, textAlign: "center", marginTop: 60 }}>Your Cart is Empty 🐟</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#ffffff",
              padding: "12px 16px",
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              marginBottom: 12
            }}>
              <div>
                <h3 style={{ margin: 0, color: "#004aad" }}>{item.name}</h3>
                <p style={{ margin: "4px 0", color: "#0077ff", fontWeight: 700 }}>₹{item.price} each</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  style={{ padding: "6px 10px", borderRadius: 6, border: "none", background: "#0077ff", color: "#fff", cursor: "pointer" }}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  style={{ padding: "6px 10px", borderRadius: 6, border: "none", background: "#0077ff", color: "#fff", cursor: "pointer" }}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ padding: "6px 10px", borderRadius: 6, border: "none", background: "#ff4d4f", color: "#fff", cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
              <div style={{ fontWeight: 700 }}>₹{item.price * item.qty}</div>
            </div>
          ))}

          <h3 style={{ textAlign: "right", marginTop: 20 }}>Total: ₹{totalAmount}</h3>

          {/* Customer Details */}
          <div style={{ marginTop: 20, background: "#e0f7fa", padding: 16, borderRadius: 12 }}>
            <h3 style={{ marginBottom: 12, color: "#004aad" }}>Enter Your Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={customer.name}
              onChange={e => setCustomer({ ...customer, name: e.target.value })}
              style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
            <input
              type="text"
              placeholder="Phone"
              value={customer.phone}
              onChange={e => setCustomer({ ...customer, phone: e.target.value })}
              style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Address"
              value={customer.address}
              onChange={e => setCustomer({ ...customer, address: e.target.value })}
              style={{ width: "100%", padding: 10, marginBottom: 12, borderRadius: 6, border: "1px solid #ccc" }}
            />

            <button
              onClick={handleBuyNow}
              style={{ width: "100%", padding: 12, background: "#00c49f", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: 16 }}
            >
              Place Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
