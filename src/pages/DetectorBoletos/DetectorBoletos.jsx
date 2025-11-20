import { useState } from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import qrcodemeio from "./assets/iconeBoleto.svg";
import { Link } from "react-router-dom";

export default function DetectorQrcodes() {
  const [opcao, setOpcao] = useState("");
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          <h2 id="DetectordeQRcodefalso-title">Detector de boleto falso </h2>
          <Link to="/CentraldeAnalises" className="back" aria-label="Voltar">← Voltar</Link>
          <CardLaranja>
     

           <img className= "qrcode-imagem" src={qrcodemeio} alt="qrcodemeio" />
            {opcao ? (
              <Link
                to={opcao === "verdadeiro" ? "/DetectorBoletosVerdadeiros" : "/DetectorBoletosFalso"}
                className="qrcode-container-link"
              >
                ESCANEAR BOLETO
              </Link>
            ) : (
              <Link
                className="qrcode-container-link"
                to ={''}
              >
                ESCANEAR BOLETO
              </Link>
            )}

            <select
              className="qrcode-select"
              value={opcao}
              onChange={(e) => setOpcao(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="verdadeiro">Verdadeiro</option>
              <option value="falso">Falso</option>
            </select>  



          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
