
import { Link } from "react-router-dom";
import "./styles.css"

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1>CyberGuard</h1>
        <form>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="usuario">Nome de Usuário</label>
          <input type="text" id="usuario" name="usuario" />

          <label htmlFor="senha">Criar senha</label>
          <input type="password" id="senha" name="senha" />

          <label htmlFor="confirmar">Confirmar senha</label>
          <input type="password" id="confirmar" name="confirmar" />

          <Link type="submit" to={'/'} className="btn-cadastrar">
            Cadastrar
          </Link>

          <Link to={'/login'} className="link-login">
            Possuo cadastro &gt;
          </Link>
        </form>
      </div>
    </div>
  );
}
