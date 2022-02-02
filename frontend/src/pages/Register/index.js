import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [UF, setUF] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      UF,
    };

    try {
      const response = await api.post("/ongs", data);

      alert(`Seu id de acesso: ${response.data.id}`);
      navigate("/");
    } catch (error) {
      alert("Tente novamente");
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={UF}
              onChange={(e) => setUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
