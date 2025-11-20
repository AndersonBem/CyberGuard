import React from "react";
import "./styles.css";


const Certificados = () => {
  // Simulação de certificados (pode vir de API depois)
  const certificados = [
    { id: 1, tipo: "Arquivo", icon: <certificLogo size={24} />, link: "/meuscertificados" },
    { id: 2, tipo: "QRCode", icon: <certificLogo size={24} />, link: "/meuscertificados" },
    { id: 3, tipo: "Link", icon: <certificLog size={24} />, link: "/meuscertificados" },
  ];

  return (
    <div className="certificados-container">
      <h3 className="certificados-titulo">SEUS CERTIFICADOS</h3>

      <div className="certificados-icones">
        {certificados.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="certificado-botao"
            title={item.tipo}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificados;
