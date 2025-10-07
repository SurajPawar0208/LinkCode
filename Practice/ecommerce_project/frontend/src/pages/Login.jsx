import React, { useState } from 'react'
import { login } from '../api'

export default function Login({ onLogin }) {
  const [email,setEmail]=useState(''), [password,setPassword]=useState('')
  async function submit(e){ e.preventDefault(); const res = await login({email,password}); if(res.token){ localStorage.setItem('ecom_token', res.token); onLogin(res.user); } else alert(res.error || 'Login failed') }
  return (
    <form onSubmit={submit} style={{maxWidth:400}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button className="btn" type="submit">Login</button>
    </form>
  )
}
