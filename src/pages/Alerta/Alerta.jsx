import CardLaranja from "../../componentes/CardLaranja/index";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import alerta from "./assets/alerta.png";
import "./styles.css";
import Alertalist from "../../componentes/Alertalist";
import { Link } from "react-router-dom";

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

            <Alertalist mensagem="Golpe do Pix com Devolução • O golpista finge ter feito um Pix errado e pede para “devolver o valor”.• A transação inicial é feita com um comprovante falso, e a vítima transfere dinheiro real." />

            <Alertalist mensagem="Assinaturas Automáticas em Testes Grátis
              • Sites prometem “testes gratuitos” de produtos ou serviços, mas escondem assinaturas automáticas de valores altos.
              • Após alguns dias, o valor é debitado no cartão de crédito." />

            <Alertalist mensagem="Links de Rastreamento de Encomenda
              • Mensagens por SMS ou WhatsApp avisam sobre “entregas pendentes”.
              • O link leva a páginas falsas dos Correios ou transportadoras para roubo de dados." />

            <Link
              className="btn-saiba-mais"
              to={''}
              rel="noopener noreferrer"
            >
              SAIBA MAIS
            </Link>
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
