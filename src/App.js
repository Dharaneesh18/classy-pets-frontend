import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import ExplorePage from "./pages/ExplorePage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [view, setView] = useState("welcome"); // 'welcome' | 'explore' | 'cart'
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((c) => c.id === product._id);
    if (existing) {
      setCart(cart.map(c => c.id === product._id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...product, qty: 1, id: product._id }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter(c => c.id !== id));
    } else {
      setCart(cart.map(c => c.id === id ? { ...c, qty } : c));
    }
  };

  const removeFromCart = (id) => setCart(cart.filter(c => c.id !== id));
  const clearCart = () => setCart([]);

  return (
    <div style={{ background: "#e0f7ff", minHeight: "100vh" }}>
      <Navbar goTo={setView} cartCount={cart.reduce((s, c) => s + c.qty, 0)} />
      {view === "welcome" && <WelcomePage onExplore={() => setView("explore")} />}
      {view === "explore" && <ExplorePage addToCart={addToCart} />}
      {view === "cart" && (
        <CartPage
          cart={cart}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
          clearCart={() => { clearCart(); setView("explore"); }}
          onBack={() => setView("explore")}
        />
      )}

      {/* Mobile bottom cart button */}
      <div style={{ position: "fixed", right: 20, bottom: 20 }}>
        <button
          onClick={() => setView("cart")}
          style={{
            background: "#0088ff",
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "10px 14px",
            boxShadow: "0 6px 14px rgba(0,136,255,0.25)",
            cursor: "pointer",
            fontWeight: 700
          }}
        >
          Cart ({cart.reduce((s,c)=>s+c.qty,0)})
        </button>
      </div>
    </div>
  );
};

export default App;
