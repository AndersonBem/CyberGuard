import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import falsox from "./assets/falsox.png";
import { Link } from "react-router-dom";

export default function DetectorLinkfalso() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          
          <Link to="/DetectorLink" className="back" aria-label="Voltar">← Voltar</Link>
          <CardLaranja>
          


          <img className= "falsoz" src={falsox} alt="falsoz" />
                        <p className="texto-alerta">SEU LINK É FALSO!</p>
                       <Link
                          className="Denuncie-link2"
                          to ={'/relatarGolpe'}
                        >
                          DENUNCIE AQUI
                        </Link>
          
          
        
          </CardLaranja>
 
        </section>
      </div>
      <Footer />
    </div>
  );
}
