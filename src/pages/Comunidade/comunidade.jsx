import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Logo from "./assets/lococomunidade4.png";
import "./styles.css";

export default function BasePage() {
    return (
        
        <div className="app-fundo-br">
            <img src={Logo} className="logo-comunidade" alt='Logo da Comunidade'/>
            <p className="P1">
             Bem-vindo à comunidade <span className="span1">CyberGuard!</span>
            </p>
            <Link to="/bemvindocom" className="back_comunidade" aria-label="Voltar">← Voltar</Link>
            <div className="app-content">
                <div className="container">
                    <div className="post-card">
                        <h3 className="username">CyberGuardOficial</h3>

                        <h2 className="post-title">Entenda o básico da segurança digital</h2>

                        <p>⚠️ A internet é cheia de riscos, mas com pequenas atitudes você pode se proteger.</p>
                        <p>✔️ Use senhas fortes, ative a verificação em duas etapas e desconfie de links suspeitos.</p>
                        <p className="question">💬 Comente aqui: qual dica de segurança você aprendeu recentemente?</p>

                        <div className="actions">
                            <span className="action">♡</span>
                            <Link to="/NovaPostagem" className="action">
                                <span className="action">💬</span>
                            </Link>
                        </div>

                        <div className="info">
                            <span>3 comentários</span>
                            <span>Ontem</span>
                        </div>
                    </div>

                    {/* POST 2 */}
                    <div className="post-card">
                        <h3 className="username">CyberGuardOficial</h3>

                        <h1 className="post-title alert">Alerta: Golpe do Pix agendado</h1>

                        <p>⚠️ Criminosos estão enviando mensagens falsas com supostos comprovantes de Pix agendado.</p>
                        <p>👉 Nunca clique em links enviados por e-mail ou WhatsApp.</p>
                        <p className="question">💬 Já recebeu algo assim? Compartilhe sua experiência para alertar outros membros.</p>

                        <div className="actions">
                            <span className="action">♡</span>
                            <Link to="/NovaPostagem" className="action">
                                <span className="action">💬</span>
                            </Link>
                        </div>

                        <div className="info">
                            <span>3 comentários</span>
                            <span>Ontem</span>
                        </div>
                    </div>
                </div>

                <div className="nova-postagem-wrapper">
                <Link to="/NovaPostagem" className="btn-nova-postagem">
                    + Nova Postagem
                </Link>
                </div>
            </div>

            <Footer />

        </div>
    );
}

