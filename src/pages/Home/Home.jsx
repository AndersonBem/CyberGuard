import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import MissaoIcon from "./assets/smile.svg";
import SimuladorIcon from "./assets/simuladores.svg";
import AprendaIcon from "./assets/aprenda.svg";
import RankingIcon from "./assets/ranking.svg";
import DenunciaIcon from "./assets/denuncia.svg";
import ContatoIcon from "./assets/telefone.svg";
import AlertaIcon from "./assets/alertagolpe.svg";
import "./styles.css";

export default function Home() {
  const botoesPrincipais = [
    { icone: MissaoIcon, texto: "Missões Diárias", rota: "/MissoesDiarias" },
    { icone: AlertaIcon, texto: "Alerta de Golpe", rota: "/alerta" },
    { icone: AprendaIcon, texto: "Aprenda", rota: "/aprenda" },
    { icone: RankingIcon, texto: "Ranking", rota: "/ranking" },
    { icone: DenunciaIcon, texto: "Denúncias", rota: "/relatarGolpe" },
    { icone: ContatoIcon, texto: "Fale conosco", rota: "/faleconosco" },
  ];

  return (
    <div className="home-page">
      <Header />
      <div className="app-content">
        <div className="menu-container">
          <div className="botoes-grid">
            {botoesPrincipais.map((botao, index) => (
              <Link key={index} to={botao.rota} className="botao-item">
                <img src={botao.icone} alt={botao.texto} className="icone-placeholder" />
                <p className="botao-texto">{botao.texto}</p>
              </Link>
            ))}
          </div>
          <div className="missao-do-dia-card">
            <div className="missao-texto-container">
              <p className="missao-titulo">Missão do dia</p>
              <p className="missao-descricao">Crie uma senha forte agora</p>
            </div>
            <Link to="/missoes" className="missao-botao-comecar">
              Começar
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
