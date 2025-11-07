import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup"; 
import "./styles.css"; 
import iconeTelefone from './assets/iconeTelefone.svg';
import iconeEmail from './assets/iconeEmail.svg';
import iconeTelefoneL from './assets/iconeTelefoneL.svg';

export default function FaleConosco() {
  return (
    <DeviceMockup>
      <div className="app-shell"> 
         <Header />
        <div className="app-header-container">
          <div className="app-header">
            
          </div>
        </div>
        
        <div className="app-content"> 
          
          <div className="contato-card"> 
            
            <div className="contato-card-title-wrapper">
              <img src={iconeTelefoneL} alt="Ícone de telefone" className="fale-conosco-icone-titulo" /> 
              <h2 className="contato-card-title">Fale conosco</h2>
            </div>

           <div className="contato-bloco-interno"> 

              {/* --- Linha 1: Central de Atendimento --- */}
                 <div className="contato-item-bloco">
                  <img src={iconeTelefone} alt="Central de atendimento" className="contato-icone" /> 
                    <div className="contato-texto">
                        <p className="contato-titulo-bloco">Central de atendimento</p>
                       <p className="contato-conteudo-bloco">0800 1234-5678</p>  
                </div>
              </div>

                  {/* --- Linha 2: Email --- */}
                      <div className="contato-item-bloco">
                      <img src={iconeEmail} alt="Email de contato" className="contato-icone" />
                     <div className="contato-texto">
                      <p className="contato-titulo-bloco">Fale Conosco</p>
                      <p className="contato-conteudo-bloco">CyberGuard@email.com</p>
                </div>
              </div>
            </div>           
          </div>
        </div>

        <Footer /> 
      </div>
    </DeviceMockup>
  );
}
