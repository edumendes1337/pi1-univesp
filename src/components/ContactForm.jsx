import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por: ${formData.name}`);
  };

  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>E-mail:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Telefone:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />

        <label>Mensagem:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
