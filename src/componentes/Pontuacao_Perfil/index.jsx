import React from "react";
import "./styles.css";

const Pontuacao = () => {
  // Simulação de dados (pode vir de props ou API)
  const usuario = {
    nome: "Maria Aparecida",
    pontos: 8000,
    foto: "https://i.pravatar.cc/50?img=2", // exemplo de imagem
  };

  return (
    <div className="pontuacao-container">
      <h3 className="pontuacao-titulo">SUA PONTUAÇÃO</h3>

      <div className="pontuacao-card">
        <img src={usuario.foto} alt="Foto do usuário" className="pontuacao-foto" />
        <div className="pontuacao-info">
          <p className="pontuacao-nome">{usuario.nome}</p>
          <p className="pontuacao-pontos">{usuario.pontos.toLocaleString()} Pontos</p>
        </div>
      </div>
    </div>
  );
};

export default Pontuacao;
