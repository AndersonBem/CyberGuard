// DenunciaEnviada.jsx

import iconeCheck from './assets/iconeCheck.svg';
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css"; 
import { Link } from 'react-router-dom';

export default function DenunciaEnviada() {
  return (
    <div className="app-shell">
      <Header />


      <div className="app-content-feedback">
        
        <div className="feedback-card">
          

          <img src={iconeCheck} alt="Ícone de sucesso" className="feedback-icon" />


          <p className="feedback-text">
            Denúncia enviada
          </p>


          <Link to="/relatarGolpe" className="feedback-btn">
            Enviar nova denúncia
          </Link>

        </div>
      </div>
      
      <Footer /> 
    </div>
  );
}
