import React, { useState } from "react";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "1234") {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  };

  return (
    <div>
      <h2>Login do Administrador</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuário:</label>
        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />

        <label>Senha:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default AdminLogin;
