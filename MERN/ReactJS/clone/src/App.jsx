import React from "react";
import "./App.css";

const Row = ({ title }) => {
  const items = new Array(7).fill(0);
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {items.map((_, i) => (
          <div key={i} className="poster" />
        ))}
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="nav-left">
          <span className="logo">NETFLIX</span>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">My List</a>
        </div>
        <div className="nav-right">
          <button className="nav-btn">Sign In</button>
        </div>
      </header>

      <main className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Popular on Netflix</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="hero-buttons">
            <button className="btn btn-play">▶ Play</button>
            <button className="btn btn-more"> More Info</button>
          </div>
        </div>
      </main>

      <div className="content">
        <Row title="Trending Now" />
        <Row title="Top Picks for You" />
        <Row title="Watch It Again" />
        <Row title="New Releases" />
      </div>
    </div>
  );
}

export default App;
