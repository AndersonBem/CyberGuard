import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import quizIcon from "./assets/quiz.svg";
import CardLaranja from "../../componentes/CardLaranja";

export default function QuizPerguntas() {
  const quizzes = [
    { id: 1, label: "Usar datas comemorativas, como aniversário", 
      correct: false, 
      explanation: "Datas como aniversário, são informações fáceis de se obter, por isso não são senhas seguras" },
    { id: 2, label: "Senha compostas por números, letras e símbolos",
      correct: true,  
      explanation: "Usar letras, números e símbolos torna a senha muito mais difícil de adivinhar, reduzindo invasões e aumentando sua segurança online" },
    { id: 3, label: "Sempre uso a mesma senha em todos os cadastros", 
      correct: false, 
      explanation: "Usar a mesma senha em todos os sites facilita invasões: se um serviço for vazado, todos os seus outros acessos ficam comprometidos." },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [feedback, setFeedback] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [explanation, setExplanation] = useState("");

  
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showModal]);

  const handleConfirm = () => {
    const item = quizzes.find(q => q.id === selectedId);
    if (!item) return;
    const ok = item.correct;
    setFeedback(ok ? "correto" : "incorreto");
    setExplanation(item.explanation || "");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const nextPath = "/FimQuiz"; 

  return (
    <>
      <Header />

      <CardLaranja className="cardlaranja-espaco">

        <div className="cert-banner">
          <div className="cert-badge">
            <img src={quizIcon} alt="Quiz" />
          </div>
        </div>


        <p className="quiz-subtitle">
          Como você cadastra suas senhas?<br />
        </p>


        <div className="quiz-options">
          {quizzes.map((q) => (
            <button
              key={q.id}
              type="button"
              className={`quiz-btn ${selectedId === q.id ? "is-selected" : ""}`}
              onClick={() => {
                setSelectedId(q.id);
                setFeedback(null);
              }}
              aria-pressed={selectedId === q.id}
            >
              <div className="quiz-left">
                <span className="quiz-number">{q.id}</span>
                <span className="quiz-text">
                  <span className="quiz-sublabel">{q.label}</span>
                </span>
              </div>

              <div className="quiz-right">
                <div
                  className={`quiz-circle ${
                    selectedId === q.id ? "quiz-circle--active" : ""
                  }`}
                />
              </div>
            </button>
          ))}
        </div>


        <div className="quiz-actions">
          <button
            type="button"
            className="confirm-btn"
            onClick={handleConfirm}
            disabled={!selectedId}
          >
            Conferir resposta
          </button>
        </div>
      </CardLaranja>

      {showModal && (
        <div className="quiz-modal-overlay" onClick={closeModal}>
          <div
            className={`quiz-modal ${feedback === "correto" ? "correct" : "incorrect"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              {feedback === "correto" ? "✓" : "✕"}
            </div>

            <h2 className="modal-title">
              {feedback === "correto" ? "RESPOSTA CORRETA" : "RESPOSTA INCORRETA"}
            </h2>

            <div className="modal-body">
              <strong>Explicação:</strong>
              <p>{explanation || "Sem explicação disponível no momento."}</p>
            </div>

            {feedback === "incorreto" ? (

              <button
                type="button"
                className="modal-next modal-next--left modal-next--danger"
                onClick={closeModal}
                aria-label="Tentar novamente"
              >
                ←
              </button>
            ) : (

              <Link
                to={nextPath}
                className="modal-next modal-next--right modal-next--primary"
                aria-label="Próximo"
              >
                →
              </Link>
            )}
          </div>
        </div>
      )}


      <Footer />
    </>
  );
}
