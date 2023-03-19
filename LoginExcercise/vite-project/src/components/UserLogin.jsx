import React, { useState } from 'react'

function UserLogin() {
    const [user, setUser] = useState()
    const loginHandleRequest = () => {

    }
    return (
        <div>
            <label>Enter your username</label>
            <input value={user?.username} type="text" placeholder={"Enter your username..."} onChange={(e) => { e.target.value }}></input>
            <br></br>
            <label>Enter your password</label>
            <input type="password" value={user?.password} onChange={(e) => { e.target.value }}></input>
            <br />
            <button>Login</button>
        </div>
    )
}

export default UserLogin