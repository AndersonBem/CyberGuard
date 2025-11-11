import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import vector from "./assets/vector.png";
import { Link } from "react-router-dom";

export default function DetectorQRverdadeiro() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          

          <CardLaranja>
        

           <img className= "vector" src={vector} alt="vector" />
           <p className="texto-alerta">SEU QR CODE É VERDADEIRO!</p>
               <Link
                 className="qrcode-container-link"
                 to ={'/DetectorQrcode'}
               >
                 ESCANEAR NOVO QR CODE
               </Link>


        
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
