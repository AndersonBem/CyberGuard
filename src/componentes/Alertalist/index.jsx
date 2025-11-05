import "./styles.css";

const Alertalist = ({ mensagem }) => {
  return (
    <div className="alerta-container">
      <p className="alerta-texto">{mensagem}</p>
    </div>
  );
};

export default Alertalist;
