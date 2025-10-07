import React from "react";

const WelcomePage = ({ goExplore }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 70px)",
      background: "linear-gradient(to bottom, #e0f7ff, #f0f8ff)",
      padding: "20px",
      textAlign: "center"
    }}>
      
      <h1 style={{
        fontSize: "48px",
        fontWeight: "bold",
        color: "#004466",
        marginBottom: "20px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
        animation: "fadeInDown 1s ease-in-out"
      }}>
        🐟 Welcome to Classy Pets & Aquarium
      </h1>

      <p style={{
        fontSize: "20px",
        color: "#004466",
        maxWidth: "600px",
        marginBottom: "40px",
        lineHeight: "1.5",
        animation: "fadeInUp 1s ease-in-out"
      }}>
        Fresh fish, quality tanks, premium food & accessories — all in one place.
      </p>

      <button
        onClick={goExplore}
        style={{
          padding: "15px 40px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          background: "#00bfff",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.background = "#0095cc";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "#00bfff";
        }}
      >
        Explore Now
      </button>

    </div>
  );
};

export default WelcomePage;
