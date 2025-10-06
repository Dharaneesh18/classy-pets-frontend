import React from "react";

const Navbar = ({ goTo, cartCount }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px",
      background: "linear-gradient(90deg,#ffffff, #c2e7ff)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 46,
          height: 46,
          borderRadius: 10,
          background: "linear-gradient(135deg,#00c6ff,#0072ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 800,
          fontSize: 18
        }}>CP</div>
        <div>
          <div style={{ fontWeight: 800, color: "#004aad", fontSize: 18 }}>Classy Pets & Aquarium</div>
          <div style={{ fontSize: 12, color: "#336699" }}>Fish • Tanks • Food • Accessories</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={() => goTo("explore")} style={navBtnStyle}>Explore</button>
        <button onClick={() => goTo("welcome")} style={navBtnStyleWhite}>Home</button>
        <button onClick={() => goTo("cart")} style={navBtnStyleCart}>Cart ({cartCount})</button>
      </div>
    </div>
  );
};

const navBtnStyle = {
  background: "#0077ff", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 10, cursor: "pointer", fontWeight: 700
};
const navBtnStyleWhite = {
  background: "#fff", color: "#0077ff", border: "1px solid #d6eefd", padding: "8px 12px", borderRadius: 10, cursor: "pointer", fontWeight: 700
};
const navBtnStyleCart = {
  background: "#00c49f", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 10, cursor: "pointer", fontWeight: 700
};

export default Navbar;
