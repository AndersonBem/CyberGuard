
import Footer from "../../componentes/Footer";
import "./styles.css"
import Certificados from "../../componentes/Certificado_Perfil";
import Pontuacao from "../../componentes/Pontuacao_Perfil";
import { Link } from "react-router-dom";





export default function Perfil () {

  return (
    <>
          <div className="perfil-card">
            <div className="foto-container">
      <img
        src="https://i.pravatar.cc/50?img=2" 
        alt="Foto de perfil"
        className="foto-perfil"
      />
      <label htmlFor="trocar-foto" className="trocar-foto">
        Alterar foto
      </label>
      <input type="file" id="trocar-foto" accept="image/*" />
    </div>
            <form>
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" placeholder="Maria Aparecida" />
    
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="mariaaparecida@gmail.com" />
    
              <label htmlFor="usuario">Nome de Usuário</label>
              <input type="text" id="usuario" name="usuario" placeholder="Cida"/>
    
              <label htmlFor="senha">Senha Atual</label>
              <input type="password" id="senha" name="senha" placeholder="********" />
    
               <p>
                <a href="/Perfil" className="link-senha">Alterar senha</a>
              </p>

              <p>
                <Link to="/cadastro" className="link-logout">Sair da conta</Link>
              </p>
      
            </form> 
          </div>
                  <Certificados />
                  <Pontuacao />
                  <Footer />
        </>
  );
}