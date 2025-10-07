import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import ExplorePage from "./pages/ExplorePage";
import CartPage from "./pages/CartPage";

function App() {
  const [page, setPage] = useState("welcome");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(p => p._id === product._id);
    if (!exists) setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div style={{ background: "#f0f8ff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar cartCount={cart.length} setPage={setPage} />

      {page === "welcome" && <WelcomePage goExplore={() => setPage("explore")} />}
      {page === "explore" && <ExplorePage addToCart={addToCart} />}
      {page === "cart" && <CartPage cart={cart} setPage={setPage} />}

      {cart.length > 0 && page !== "cart" && (
        <button
          onClick={() => setPage("cart")}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            padding: "15px 30px",
            background: "#00d4ff",
            color: "#004466",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s",
            zIndex: 100
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.background = "#0095cc";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "#00d4ff";
          }}
        >
          🛒 Go to Cart ({cart.length})
        </button>
      )}
    </div>
  );
}

export default App;
