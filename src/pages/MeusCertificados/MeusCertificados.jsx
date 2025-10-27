import CardLaranja from "../../componentes/CardLaranja/index";
import CertificadosList from "../../componentes/CertificadoList/index";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup";
import certific from "./assets/certific.svg";
import "./styles.css";

export default function MeusCertificados() {
  return (
    <DeviceMockup>
      <div className="app-shell">
        <Header />
        <div className="app-content">
          <section className="meus-certificados" aria-labelledby="certificados-title">
            <h2 id="certificados-title">Meus Certificados</h2>

            <CardLaranja>
              <div className="cert-banner">
                <div className="cert-badge">
                  <img src={certific} alt="Certificado" />
                </div>
              </div>

              <CertificadosList />
            </CardLaranja>
          </section>
        </div>
        <Footer />
      </div>
    </DeviceMockup>
  );
}
