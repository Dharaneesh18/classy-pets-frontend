import React from "react";

const Navbar = ({ cartCount, setPage }) => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 30px",
      background: "#004466",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
    }}>
      
      {/* Left side: Shop name + icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px", fontSize: "16px" }}>
        <h2 style={{
          fontWeight: "bold",
          fontSize: "22px",
          cursor: "pointer",
          marginRight: "20px"
        }} onClick={() => setPage("welcome")}>
          Classy Pets & Aquarium
        </h2>

        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          🐠 Fishes
        </span>
        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          🏞️ Tanks
        </span>
        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          🪝 Accessories
        </span>
        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          🍤 Fish Food
        </span>
      </div>

      {/* Right side: Home & Cart */}
      <div style={{ display: "flex", gap: "25px", fontSize: "16px" }}>
        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onClick={() => setPage("welcome")}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          Home
        </span>
        <span style={{ cursor: "pointer", transition: "all 0.3s" }}
              onClick={() => setPage("cart")}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}>
          Cart ({cartCount})
        </span>
      </div>

    </nav>
  );
};

export default Navbar;
