import React, { useState } from 'react';
import { login } from '../api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert('Login realizado com sucesso!');
    } catch {
      alert('Email ou senha inválidos');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default AdminLogin;
