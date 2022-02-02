import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import "./styles.css";

import api from "../../services/api";

const Profile = () => {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert("erro");
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>

            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
