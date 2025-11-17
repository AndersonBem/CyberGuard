import { useState } from "react";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";

export default function MissoesDiarias() {

    const [popupAberto, setPopupAberto] = useState(false);

    // missões
    const missoes = [
        { id: 1, titulo: "Analise um QR code antes de clicar.", desc: "Decida se ele é seguro ou perigoso." },
        { id: 2, titulo: "Aprenda a montar uma senha difícil de adivinhar.", desc: "Use letras, números e símbolos." },
        { id: 3, titulo: "Ajuste as configurações de privacidade de uma rede social.", desc: "Mostre só o necessário." },
        { id: 4, titulo: "Analise um link antes de clicar.", desc: "Decida se ele é seguro ou perigoso." }
    ];

    // estado das missões concluídas
    const [concluidas, setConcluidas] = useState({});

    function toggleConcluir(id) {
        setConcluidas(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    return (
        <div className="app-shell">
            <Header />

            <div className="app-content">
                <div className="container-missoes">
                    <h3 className="titulo-principal">Missões Diárias</h3>

                    <ul className="lista-dias">
                        {[
                            "Segunda-feira", "Terça-feira", "Quarta-feira",
                            "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"
                        ].map((dia) => (
                            <li className="item-dia" key={dia}>
                                <p className="nome-dia">{dia}</p>

                                <button className="link-visualizar" onClick={() => setPopupAberto(true)}>
                                    clique para visualizar suas missões
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* POP-UP */}
            {popupAberto && (
                <div className="popup-overlay" onClick={() => setPopupAberto(false)}>
                    <div
                        className="popup-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="popup-titulo">Suas Missões</h2>

                        <div className="missao-lista">
                            {missoes.map((m) => (
                                <div
                                    key={m.id}
                                    className={`missao-card ${concluidas[m.id] ? "concluida" : ""}`}
                                >
                                    <div className="missao-textos">
                                        <p className="missao-titulo">{m.titulo}</p>
                                        <p className="missao-desc">{m.desc}</p>
                                    </div>

                                    {/* BOLINHA DE CHECK — CLICÁVEL */}
                                    <button
                                        className={`missao-circle ${concluidas[m.id] ? "checked" : ""}`}
                                        onClick={() => toggleConcluir(m.id)}
                                    >
                                        {concluidas[m.id] ? "✔" : "•"}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button className="btn-fechar" onClick={() => setPopupAberto(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
