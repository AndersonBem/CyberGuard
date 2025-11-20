import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import vector from "./assets/vector2.png";
import { Link } from "react-router-dom";

export default function DetectorLinkverdadeiro() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectorLinkverdadeiro" aria-labelledby="DetectorLinkverdadeiro-title">

          <CardLaranja>
           <img className= "vector2" src={vector} alt="vector" />
           <p className="texto-alerta3">SEU LINK É VERDADEIRO!</p>
              <Link
                 className="link-container"
                 to ={'/DetectorLink'}
               >
                 ESCANEAR NOVO LINK
               </Link>

          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
