import CardLaranja from "../../componentes/CardLaranja/index";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import alerta from "./assets/alerta.png";
import "./styles.css";
import Alertalist from "../../componentes/Alertalist";

export default function Alertas() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="alertaNovosGolpes" aria-labelledby="alertaNovosGolpes-title">
          <h2 id="alertaNovosGolpes-title">Novos Golpes</h2>

          <CardLaranja>
            <div className="cert-banner">
              <div className="cert-badge">
                <img src={alerta} alt="alerta" />
              </div>
            </div>

            
            <Alertalist mensagem="Golpe do Pix com Devolução" />

            <Alertalist mensagem="Assinaturas Automáticas em Testes Grátis" />

            <Alertalist mensagem="Links de Rastreamento de Encomenda" />

            <Alertalist mensagem="Pix Programado" />

          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
