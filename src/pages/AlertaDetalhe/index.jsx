// src/pages/AlertaDetalhe/index.jsx

import { useParams, Link } from "react-router-dom";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import CardLaranja from "../../componentes/CardLaranja";
import { ALERTAS } from "../Alerta/alertasData";
import alerta from "../Alerta/assets/alerta.png";
import "./styles.css";

export default function AlertaDetalhe() {
  const { id } = useParams();
  const alertaSelecionado = ALERTAS.find((item) => item.id === id);

  if (!alertaSelecionado) {
    return (
      <div className="app-shell">
        <Header />
        <div className="app-content">
        <div className="alerta-back-wrapper">
        <Link to="/alerta" className="alerta-back-top">
            ← Voltar
        </Link>
        </div>

          <section className="alerta-detalhe">
            <CardLaranja>
              <div className="alerta-detalhe-conteudo">
                <h2 className="alerta-detalhe-titulo">Alerta não encontrado</h2>
              </div>
            </CardLaranja>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        {/* botão voltar no topo */}
        <div className="alerta-back-wrapper">
        <Link to="/alerta" className="alerta-back-top">
            ← Voltar
        </Link>
        </div>

        <section
          className="alerta-detalhe"
          aria-label={alertaSelecionado.titulo}
        >
          <CardLaranja>
            <div className="alerta-detalhe-conteudo">
              {/* ícone em quadrado branco */}
              <div className="alerta-detalhe-icone-wrapper">
                <div className="alerta-detalhe-icone-quadro">
                  <img src={alerta} alt="ícone de alerta" />
                </div>
              </div>

              {/* título centralizado */}
              <h2 className="alerta-detalhe-titulo">
                {alertaSelecionado.titulo}
              </h2>

              {/* texto em fundo branco com letra azul */}
              <div className="alerta-detalhe-box-texto">
                <p className="alerta-detalhe-texto">
                  {alertaSelecionado.texto}
                </p>
              </div>
            </div>
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
