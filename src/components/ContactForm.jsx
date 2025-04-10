import React, { useState } from 'react';
import { responder } from '../api';

const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await responder({ nome, email, telefone, mensagem });
      alert('Mensagem enviada com sucesso!');
    } catch (err) {
      alert('Erro ao enviar a mensagem.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <textarea placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
