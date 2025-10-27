import { useParams, useLocation } from "react-router-dom";
import CardLaranja from "../../componentes/CardLaranja";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup";
import logo from "./assets/certificLogo.svg";
import './styles.css'

export default function Certificado(){
  const { id } = useParams();
  const { state } = useLocation();

  const titulo = state?.titulo ?? "Curso";
  const nomeAluno = "Maria Souza";

    return (
    <DeviceMockup>
        <div className="app-shell">
            <Header />
            <div className="app-content">
                <section className="certificado" aria-labelledby="certificado-title">
                    <h2 id="certificado-title">Micro-Certificado</h2>
                <CardLaranja>
                    <div className="cert-banner">
                        <div className="cert-badge">
                        <img src={logo} alt="Certificado" />
                        </div>
                    </div>

                    <div className="nome-pill">{nomeAluno}</div>

                    <div className="texto-cert">
                        Concluiu com sucesso o curso de <strong>{titulo}</strong>
                    </div>

                    <button
                        className="btn-obter"
                        onClick={() => alert(`Emitir certificado ${id} - ${titulo}`)}
                    >
                        OBTER CERTIFICADO
                    </button>
                </CardLaranja>
            
          </section>
        </div>
        <Footer />
      </div>
    </DeviceMockup>
  );
}