import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Bem-vindo</h1>
        <nav>
          <Link to="/">
            <button>Formulário</button>
          </Link>
          <Link to="/admin">
            <button>Área do Administrador</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
