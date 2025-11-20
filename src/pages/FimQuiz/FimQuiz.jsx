import iconeContorno from './assets/iconeContorno.svg';
import iconePesquisa from './assets/iconePesquisa.svg';
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css"; 
import { Link } from 'react-router-dom';

export default function FimQuiz() {
  return (
    <div className="app-shell">
      <Header />

      <div className="app-content-feedback">
        
        <div className="feedback-card">
          
         {/* Criei um container para agrupar os dois ícones*/}
            <div className="icone-composto-container">

            {/* Imagem de fundo (o contorno) */}
                <img 
                    src={iconeContorno} 
                    alt="Contorno do ícone" 
                    className="contorn-icon" 
                />

            {/* Imagem de cima (a pesquisa) */}
                 <img 
                      src={iconePesquisa} 
                      alt="Ícone de pesquisa" 
                      className="pesquisa-icon" 
                 />

</div>
          {/* Texto de Confirmação */}
          <p className="feedback-text">
            PARABÉNS, VOCÊ CONCLUIU O QUIZ!
          </p>

          {/* Botão para Voltar Ao Inicio */}
          <Link to="/" className="feedback-btn">
            Voltar para a tela inicial
          </Link>

        </div>
      </div>
      
      <Footer /> 
    </div>
  );
}
