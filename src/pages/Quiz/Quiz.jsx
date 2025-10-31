import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import quizIcon from "./assets/quiz.svg";
import CardLaranja from "../../componentes/CardLaranja";
import { Link } from "react-router-dom";

export default function Quiz() {

    const quizzes = [
        { id: 1, path: "/quiz/1", label: "1" },
        { id: 2, path: "/quiz/2", label: "2" },
        { id: 3, path: "/quiz/3", label: "3" }
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
              {quiz.label}
            </Link>
          ))}
        </div>
      </CardLaranja>

      <Footer />
    </>
  );
}
