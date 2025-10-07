function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1>MyShop</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Featured Products
        </h2>

        <div className="products">
          {/* Product 1 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Product 1" />
            <div className="info">
              <h3>Product 1</h3>
              <p>High quality and stylish.</p>
              <p className="price">$25.00</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Product 2" />
            <div className="info">
              <h3>Product 2</h3>
              <p>Perfect for everyday use.</p>
              <p className="price">$35.00</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Product 3" />
            <div className="info">
              <h3>Product 3</h3>
              <p>Trendy and affordable.</p>
              <p className="price">$45.00</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyShop. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
