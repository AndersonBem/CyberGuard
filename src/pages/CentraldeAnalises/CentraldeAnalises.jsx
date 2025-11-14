import { Link } from "react-router-dom";
import verificarlink from "../CentraldeAnalises/assets/verificarlink3.png";
import escanearQrcode from "../CentraldeAnalises/assets/escanearQrcode3.png";
import analisarBoleto from "../CentraldeAnalises/assets/analisarBoleto3.png";
import "./styles.css";
import Noticias from "../../componentes/API/Noticias";
import Header from "../../componentes/Header";
import Footer from "../../componentes/footer";


export default function CentraldeAnalise () {

  return (
    <div className="app-shell">
            <Header />
            <div className="app-content">
              
     <section className="centraldeanalises" aria-labelledby="centraldeanalises">
          <h2 id="centraldeanalises">Central de Análises</h2>

          <Link to="/verificar-link" className="img-button-verificarlink">
            <img
              src={verificarlink}
              alt="Verificar Link"
              className="img-button__image"
            />
          </Link>

          <Link to="/DetectorQrcode" className="img-button-escanearQrcode">
            <img
              src={escanearQrcode}
              alt="Escanear QR Code"
              className="img-button__image"
            />
          </Link>

          <Link to="/analisar-boleto" className="img-button-analisarBoleto">
            <img
              src={analisarBoleto}
              alt="Analisar Boleto"
              className="img-button__image"
            />
          </Link>
      
    <Noticias />
    
     </section>
         <Footer className="app-footer" />

      </div>
  </div>
  );
}