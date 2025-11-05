
import "./styles.css";

const jogadores = [
  { id: 1, nome: "Leonardo", pontos: "10.000", foto: "https://i.pravatar.cc/50?img=1", posicao: 1 },
  { id: 2, nome: "Maria Aparecida", pontos: "8,000", foto: "https://i.pravatar.cc/50?img=2", posicao: 2 },
  { id: 3, nome: "", pontos: "5000", foto: "", posicao: 3 },
  { id: 4, nome: "", pontos: "", foto: "", posicao: 4 },
  { id: 5, nome: "", pontos: "", foto: "", posicao: 5 },
  { id: 6, nome: "", pontos: "", foto: "", posicao: 6 },
];

const medalhas = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const Rankinglists = () => {
  return (
    <div className="ranking-container">
      <h1 className="ranking-title">Ranking</h1>

      <div className="ranking-list">
        {jogadores.map((jogador) => (
          <div key={jogador.id} className="ranking-card">
            <div className="jogador-esquerda">
              {jogador.foto ? (
                <img
                  src={jogador.foto}
                  alt={jogador.nome || "Jogador"}
                  className="avatar"
                />
              ) : (
                <div className="avatar avatar-placeholder" />
              )}

              <div className="jogador-info">
                <p className="jogador-nome">{jogador.nome || "—"}</p>
                <p className="jogador-pontos">
                  {jogador.pontos ? `${jogador.pontos} Pontos` : ""}
                </p>
              </div>
            </div>

            <div className="medalha">
              {medalhas[jogador.posicao] || ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankinglists;
