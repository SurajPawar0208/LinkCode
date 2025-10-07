import React, { useState } from 'react'
import { register } from '../api'

export default function Register({ onRegister }) {
  const [name,setName]=useState(''), [email,setEmail]=useState(''), [password,setPassword]=useState('')
  async function submit(e){ e.preventDefault(); const res = await register({name,email,password}); if(res.message) { alert('Registered - please login'); onRegister(); } else alert(res.error || 'Register failed') }
  return (
    <form onSubmit={submit} style={{maxWidth:400}}>
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button className="btn" type="submit">Register</button>
    </form>
  )
}
