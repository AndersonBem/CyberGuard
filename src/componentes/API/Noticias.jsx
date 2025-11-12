import React, { useEffect, useState } from "react";
import "./styles.css";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=golpes%20digitais&lang=pt&country=br&max=5&apikey=062bf2863accbef480ee0b28ebeff077"
    )
      .then((response) => response.json())
      .then((data) => setNoticias(data.articles || []))
      .catch((error) => console.error("Erro ao buscar notícias:", error));
  }, []);

  return (
    <div className="noticias-container">
      <h1 className="titulo-pagina">📰 Notícias</h1>

      {noticias.length === 0 ? (
        <p className="loading-text">Carregando notícias...</p>
      ) : (
        noticias.map((item, index) => (
          <div className="noticia-card" key={index}>
            {item.image && (
              <img
                src={item.image}
                alt="Imagem da notícia"
                className="noticia-img"
              />
            )}
            <div className="noticia-content">
              <h2 className="noticia-titulo">{item.title}</h2>
              <p className="noticia-descricao">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="noticia-link"
              >
                Ler mais
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Noticias;
