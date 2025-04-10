import React, { useEffect, useState } from 'react';
import { getRespostas } from '../api';

const AdminRespostas = () => {
  const [respostas, setRespostas] = useState([]);

  useEffect(() => {
    getRespostas()
      .then(setRespostas)
      .catch(() => alert('Erro ao buscar respostas (verifique o login).'));
  }, []);

  return (
    <div>
      <h2>Respostas Recebidas</h2>
      <ul>
        {respostas.map((r, i) => (
          <li key={i}>
            <strong>{r.nome}</strong> ({r.email}) disse: {r.mensagem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminRespostas;
