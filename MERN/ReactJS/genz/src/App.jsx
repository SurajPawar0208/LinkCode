import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for catalog, product, cart, dashboard, admin, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
