import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState("");
    const [password,setPassword] = useState("")
    const handleRegister = (e)=>{
        e.preventDefault();
        alert({name,password})
    }
  return (
    <form>
        <input type="text" placeholder='Enter name...' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="password" placeholder='Enter password...' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit' onClick={handleRegister}>Register</button>
    </form>
    
  )
}

export default Register