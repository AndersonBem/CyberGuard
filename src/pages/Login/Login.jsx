
import { Link } from "react-router-dom";
import "./styles.css"
import logo from "./assets/logo.png";
import logoGoogle from "./assets/google.svg";

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <img src={logo} className="logo-login"/>
        <form>
          <label htmlFor="nome">Usuário</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="email">Senha</label>
          <input type="email" id="email" name="email" />

          <Link type="submit" to={'/home'} className="btn-cadastrar">
            Entrar
          </Link>

          <Link type="submit" to={'/home'} className="btn-cadastrar-google">
            <img src={logoGoogle} />
            Entrar com Google
          </Link>

          <Link to={''} className="link-login">
            Esqueceu a senha &gt;
          </Link>
          <Link to={'/cadastro'} className="link-login">
            Primeiro acesso &gt;
          </Link>
        </form>
      </div>
    </div>
  );
}
