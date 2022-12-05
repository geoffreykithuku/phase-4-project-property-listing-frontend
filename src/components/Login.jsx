import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          id="password"
        />
        <button>Login</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("signup")}>
        Don't have an account? Signup here
      </button>
    </div>
  );
};

export default Login;
