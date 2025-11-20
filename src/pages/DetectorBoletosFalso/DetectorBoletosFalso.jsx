import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import falsox from "./assets/iconeFalso.svg";
import { Link } from "react-router-dom";

export default function DetectorQRfalso() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          
          <Link to="/DetectorBoletos" className="back" aria-label="Voltar">← Voltar</Link>

          <CardLaranja>
        

           <img className= "falsox" src={falsox} alt="falsox" />
              <p className="texto-alerta">SEU BOLETO É FALSO!</p>
             <Link
                className="Denuncie-link"
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
