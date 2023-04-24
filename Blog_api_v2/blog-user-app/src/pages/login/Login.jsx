import React, { useState } from "react";
import "./login.css";
import { useLoginMutation } from "../../app/services/auth.Api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: email, password: password })
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Nhập email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập password"
          />
          <button>Đăng nhập</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
