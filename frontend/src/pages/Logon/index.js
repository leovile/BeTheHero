import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

const Logon = () => {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      navigate("/profile");
    } catch (error) {
      alert("Falha no login");
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
