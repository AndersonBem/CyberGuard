import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import quizIcon from "./assets/quiz.svg";
import CardLaranja from "../../componentes/CardLaranja";

export default function QuizPerguntas() {
  const quizzes = [
    { id: 1, label: "Resposta Incorreta", 
      correct: false, 
      explanation: "Porque X, Y, Z..." },
    { id: 2, label: "Resposta Correta",   correct: true,  explanation: "Correta pois A, B, C..." },
    { id: 3, label: "Resposta Incorreta", correct: false, explanation: "Não atende ao critério tal..." },
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
          Título do quiz selecionado: <br />
          Pergunta 1:<br />
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
