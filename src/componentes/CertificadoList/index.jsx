import "./styles.css";
import logo from "./assets/certificLogo.svg";
import { Link } from "react-router-dom";

export default function CertificadosList() {
  const certificados = [
    { id: 1, titulo: "Segurança Digital" },
    { id: 2, titulo: "Proteção contra Golpes Online" },
    { id: 3, titulo: "Navegação Segura" },
    { id: 4, titulo: "Boas Práticas Online" },
    { id: 5, titulo: "Segurança Digital Financeira" },
  ];

  return (
    <div className="certificados-list">
      {certificados.map((c) => (
        <Link 
            key={c.id} 
            to={`/certificado/${c.id}`}
            state={{ titulo: c.titulo }}
            className="cert-item"
        >
          <img src={logo} alt="" className="cert-icon" />
          <p>{c.titulo}</p>
        </Link>
      ))}
    </div>
  );
}