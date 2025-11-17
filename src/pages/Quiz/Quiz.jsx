import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import quizIcon from "./assets/quiz.svg";
import CardLaranja from "../../componentes/CardLaranja";
import { Link } from "react-router-dom";

export default function Quiz() {

    const quizzes = [
        { id: 1, path: "/quizperguntas", label: "1", texto: "Segurança e senhas"},
        { id: 2, path: "/quizperguntas", label: "2", texto: "Links desconhecidos"},
        { id: 3, path: "/quizperguntas", label: "3", texto: "Pagamentos online"}
    ];

  return (
    <>
      <Header />

      <CardLaranja className="cardlaranja-espaco">
        {/* Ícone do quiz */}
        <div className="cert-banner">
          <div className="cert-badge">
            <img src={quizIcon} alt="Quiz" />
          </div>
        </div>


        {/* Subtítulo */}
        <p className="quiz-subtitle">
          SELECIONE O QUIZ ABAIXO PARA <br /> COMEÇARMOS:
        </p>

        {/* Botões */}
        <div className="quiz-options">
          {quizzes.map((quiz) => (
            <Link key={quiz.id} to={quiz.path} className="quiz-btn">
              <span className="quiz-num">{quiz.label}</span>
              <span className="quiz-texto">{quiz.texto}</span>
            </Link>
          ))}
        </div>
      </CardLaranja>

      <Footer />
    </>
  );
}
