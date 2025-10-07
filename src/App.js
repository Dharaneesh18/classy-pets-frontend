import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import ExplorePage from "./pages/ExplorePage";
import CartPage from "./pages/CartPage";

function App() {
  const [page, setPage] = useState("welcome");
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find(p => p._id === product._id);
    if (!exists) setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div style={{
      background: "#f0f8ff",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    }}>
      
      {/* Navbar */}
      <Navbar cartCount={cart.length} setPage={setPage} />

      {/* Pages */}
      {page === "welcome" && <WelcomePage goExplore={() => setPage("explore")} />}
      {page === "explore" && <ExplorePage addToCart={addToCart} />}
      {page === "cart" && <CartPage cart={cart} setPage={setPage} />}

      {/* Floating Cart Button */}
      {cart.length > 0 && page !== "cart" && (
        <button
          onClick={() => setPage("cart")}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            padding: "15px 25px",
            background: "#00bfff",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s",
            zIndex: 100,
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Go to Cart ({cart.length})
        </button>
      )}
    </div>
  );
}

export default App;
