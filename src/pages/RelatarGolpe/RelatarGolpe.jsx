import iconeBoneco from './assets/iconeBoneco.svg';
import Footer from "../../componentes/Footer"; 
import Header from "../../componentes/Header";
import "./styles.css";  
import { Link } from 'react-router-dom';

export default function RelatarGolpe() {
  return (
      <div className="app-shell"> 
        <Header/>
        
        <div className="app-Content-golpe"> 
          
          {/* Título da Página */}
          <h1 className="Page-title">Denúncias</h1>

          {/* Card Principal do Formulário */}
          <div className="Form-card"> 
            <div className="Form-Card-Icon-wrapper">
              <img src={iconeBoneco} alt="Ícone de denúncia" className="form-card-icon" /> 
            </div>

            <div className="Form-Container">
              <input 
                type="text" 
                className="Form-Input" 
                placeholder="Tipo de denúncia" 
              />

              <input 
                type="text" 
                className="Form-Input" 
                placeholder="Número do boletim de ocorrência" 
              />

              <textarea 
                className="Form-Textarea" 
                placeholder="Descrição"
              ></textarea>

              {/* Botão DENTRO do card */}
              <Link to="/DenunciaEnviada" className="denuncia-btn">
                ENVIAR DENÚNCIA
              </Link>
            </div>
          </div>

        </div>

        <Footer/> 
      </div>

  );
}
