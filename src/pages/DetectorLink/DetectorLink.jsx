import { useState } from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import link from "./assets/link.png";
import { Link } from "react-router-dom";





export default function DetectorLink() {
  const [opcao, setOpcao] = useState("");

  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section
          className="DetectordeQRcodefalso"
          aria-labelledby="DetectordeQRcodefalso-title"
          > 
          <div className='titulo-link' >
            <h2 id="DetectordeQRcodefalso-title">Detector de Links Falsos </h2>
          </div>
          <Link to="/CentraldeAnalises" className="back" aria-label="Voltar">← Voltar</Link>
          <CardLaranja>
            <img className= "link" src={link} alt="link" />
            <button type="button" className="texto-container" onClick={() => alert("Botão clicado!")}>
        Identifique Links Falsos
            </button>
            <button type="button" className="texto-container2" onClick={() => alert("Botão clicado!")}>
        Cole seu link aqui
            </button>
       
             {opcao ? (
              <Link
                to={opcao === "verdadeiro" ? "/DetectorLinkverdadeiro" : "/DetectorLinkfalso"}
                className="link-container"
              >
                ESCANEAR LINK
              </Link>
            ) : (
              <Link
                className="link-container"
                to ={''}
              >
                ESCANEAR LINK
              </Link>
            )}
            
             <select
              className="link-select"
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
