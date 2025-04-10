import "./styles.css";
import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <h1>Bem-vindo</h1>
      <button onClick={() => setShowAdmin(!showAdmin)}>
        {showAdmin ? "Voltar ao Formulário" : "Área do Administrador"}
      </button>
      {showAdmin ? <AdminLogin /> : <ContactForm />}
    </div>
  );
};

export default App;
