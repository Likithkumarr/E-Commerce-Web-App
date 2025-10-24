import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Save user credentials (for demo only)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/"); // redirect to Home
  };

  return (
    <div className="col-md-4 offset-md-4">
      <h3>Signup</h3>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
