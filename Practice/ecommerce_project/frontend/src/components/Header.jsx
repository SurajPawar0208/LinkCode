import React from 'react'
export default function Header({ cartCount, onNavigate, user }) {
  return (
    <header className="header">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{cursor:'pointer'}} onClick={()=>onNavigate('home')}>My E-Shop</h3>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button className="link" onClick={()=>onNavigate('home')}>Home</button>
          <button className="link" onClick={()=>onNavigate('admin')}>Admin</button>
          {!user && <button className="link" onClick={()=>onNavigate('login')}>Login</button>}
          {!user && <button className="link" onClick={()=>onNavigate('register')}>Register</button>}
          <div>Cart: {cartCount}</div>
        </div>
      </div>
    </header>
  )
}
