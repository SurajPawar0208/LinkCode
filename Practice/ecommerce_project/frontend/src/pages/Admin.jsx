import React, { useEffect, useState } from 'react'

export default function Admin(){
  // This is a minimal placeholder admin UI. For full admin you must login as admin and call protected endpoints.
  const [msg, setMsg] = useState('Use backend admin routes with a valid admin token to manage products.')
  return (
    <div>
      <h2>Admin Panel (Placeholder)</h2>
      <p>{msg}</p>
      <p>To create an admin user: open backend/users.json and set isAdmin:true for a user, or register a user then manually edit the file.</p>
    </div>
  )
}
