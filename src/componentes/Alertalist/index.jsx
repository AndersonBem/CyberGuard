import "./styles.css";

const Alertalist = ({ mensagem }) => {
  return (
    <button className="alerta-container" onClick={() => alert("Botão clicado!")}>
      <p className="alerta-texto">{mensagem}</p>
    </button>
  );
};

export default Alertalist;
