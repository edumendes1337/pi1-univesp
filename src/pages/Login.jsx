import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // já existe api.js configurado

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        usuario,
        senha
      });

      if (response.data.success) {
        navigate('/admin');
      } else {
        alert('Usuário ou senha inválidos.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar fazer login.');
    }
  };

  return (
    <div className="container">
      <h1>Login Administrativo</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
