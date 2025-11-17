import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import vector from "./assets/iconeCheck.svg";
import { Link } from "react-router-dom";

export default function DetectorQRverdadeiro() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          
          <Link to="/DetectorBoletos" className="back" aria-label="Voltar">← Voltar</Link>
          <CardLaranja>
        

           <img className= "vector" src={vector} alt="vector" />
           <p className="texto-alerta">SEU BOLETO É VERDADEIRO!</p>
               <Link
                 className="qrcode-container-link"
                 to ={'/DetectorBoletos'}
               >
                 ESCANEAR NOVO BOLETO
               </Link>


        
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
