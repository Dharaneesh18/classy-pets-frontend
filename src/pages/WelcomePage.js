import React from "react";

const WelcomePage = ({ onExplore }) => {
  return (
    <div style={{
      minHeight: "72vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(90deg,#00c6ff,#0072ff)",
      color: "#fff",
      padding: "60px 20px"
    }}>
      <div style={{ textAlign: "center", maxWidth: 980 }}>
        <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 12 }}>🐟 Welcome to Classy Pets & Aquarium</div>
        <div style={{ opacity: 0.95, fontSize: 18, marginBottom: 28 }}>
          Fresh fish, quality tanks, premium food & accessories — all in one place.
        </div>
        <button
          onClick={onExplore}
          style={{
            background: "#fff",
            color: "#0077ff",
            border: "none",
            padding: "14px 28px",
            borderRadius: 12,
            fontWeight: 800,
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
          }}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
