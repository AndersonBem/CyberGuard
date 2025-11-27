// src/paginas/Alertas/index.jsx

import { Link } from "react-router-dom";
import CardLaranja from "../../componentes/CardLaranja";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import alerta from "./assets/alerta.png";
import "./styles.css";
import { ALERTAS } from "./alertasData";

export default function Alertas() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section
          className="alertaNovosGolpes"
          aria-labelledby="alertaNovosGolpes-title"
        >
          <h2 id="alertaNovosGolpes-title">Fique Atento!</h2>

          <CardLaranja>
            <div className="cert-banner">
              <div className="cert-badge">
                <img src={alerta} alt="alerta" />
              </div>
            </div>

            {ALERTAS.map((item) => (
              <Link
                key={item.id}
                to={`/alertas/${item.id}`}
                className="alerta-container"
              >
                <p className="alerta-texto">{item.titulo}</p>
              </Link>
            ))}
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
