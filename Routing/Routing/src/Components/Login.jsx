import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navi = useNavigate();

  function handleclick() {
    navi("/dashboard");
  }
  return (
    <div>
      <h2>LOGIN PAGE</h2>
      <button onClick={handleclick}>Login</button>
      <button onclick={handleclick}>LogOut</button>
    </div> 
  );
}

export default Login;
