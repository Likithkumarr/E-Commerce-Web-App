import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // redirect to Home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="col-md-4 offset-md-4">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
