import React, { useEffect, useState } from 'react'
import { fetchProducts, createCheckout, razorpayOrder } from './api'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  const [view, setView] = useState('home') // home, login, register, admin

  useEffect(() => { fetchProducts().then(setProducts) }, [])

  function addToCart(product) {
    setCart(prev => {
      const next = [...prev]
      const idx = next.findIndex(p => p.id === product.id)
      if (idx === -1) next.push({ ...product, quantity: 1 })
      else next[idx].quantity += 1
      return next
    })
  }

  async function checkoutStripe() {
    if (cart.length === 0) return alert('Cart is empty')
    const items = cart.map(i => ({ name: i.name, price: i.price, quantity: i.quantity }))
    const session = await createCheckout(items)
    if (session.url) window.location = session.url
  }

  async function checkoutRazorpay() {
    // Amount in paise for INR example; here we use USD-> multiply by 100 as placeholder
    const total = Math.round(cart.reduce((s,i)=>s + i.price * i.quantity,0) * 100)
    const order = await razorpayOrder(total)
    alert('Razorpay order created (head to integrate on frontend using checkout). Order id: ' + (order.id || 'n/a'))
  }

  return (
    <div>
      <Header cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onNavigate={setView} user={user} />
      <main className="container">
        {view === 'home' && <>
          <h1>Products</h1>
          <div className="grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
            ))}
          </div>
          <section className="cart">
            <h2>Cart</h2>
            {cart.length === 0 && <p>Empty</p>}
            <ul>
              {cart.map(i => (
                <li key={i.id}>{i.name} — {i.quantity} × ${i.price.toFixed(2)}</li>
              ))}
            </ul>
            <div style={{display:'flex',gap:8}}>
              <button onClick={checkoutStripe} className="btn">Checkout (Stripe)</button>
              <button onClick={checkoutRazorpay} className="btn">Checkout (Razorpay)</button>
            </div>
          </section>
        </>}
        {view === 'login' && <Login onLogin={(u)=>{setUser(u); setView('home')}} />}
        {view === 'register' && <Register onRegister={()=>setView('login')} />}
        {view === 'admin' && <Admin />}
      </main>
    </div>
  )
}
