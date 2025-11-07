// src/componentes/AulaList/index.jsx
import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listPlaylistItems } from "../../services/youtube";

export default function AulasList() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function carregar(pagina = "") {
    try {
      setLoading(true);
      setErro("");
      const data = await listPlaylistItems({ pageToken: pagina, maxResults: 10 });
      const novos = (data.items || [])
        .map((item) => {
          const sn = item.snippet;
          return {
            id: sn?.resourceId?.videoId || item.contentDetails?.videoId,
            titulo: sn?.title ?? "",
            desc: sn?.description ?? "",
            thumb:
              sn?.thumbnails?.high?.url ||
              sn?.thumbnails?.medium?.url ||
              sn?.thumbnails?.default?.url,
          };
        })
        .filter(v => !!v.id); // garante que tem videoId
      setVideos((prev) => [...prev, ...novos]);
      setNextPageToken(data.nextPageToken || "");
    } catch (e) {
      console.error(e);
      setErro("Não foi possível carregar os vídeos agora. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar(); // primeira página
  }, []);

    console.log("API KEY:", import.meta.env.VITE_YT_API_KEY);
    console.log("PLAYLIST:", import.meta.env.VITE_YT_PLAYLIST_ID);


  return (
    <div className="aulas-card">
      {erro && <p className="erro-aulas">{erro}</p>}

        {videos.map((v) => (
          <Link
            key={v.id}
            to={`/videoaula/${v.id}`}
            state={{ titulo: v.titulo, desc: v.desc }}
            className="aula-item"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="thumb">
              <img
                src={v.thumb || `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={`Miniatura: ${v.titulo}`}
                loading="lazy"
              />
            </div>
            <div className="texto">
              <h3>{v.titulo}</h3>
              <p>{v.desc?.length > 90 ? v.desc.slice(0, 90) + "..." : v.desc}</p>
              {/* remova a linha de traços */}
            </div>
          </Link>
        ))}


      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        {loading ? (
          <button className="btn-carregar" disabled>Carregando…</button>
        ) : nextPageToken ? (
          <button className="btn-carregar" onClick={() => carregar(nextPageToken)}>Carregar mais</button>
        ) : (
          videos.length > 0 && <span style={{ opacity: 0.7 }}>Fim da lista</span>
        )}
      </div>
    </div>
  );
}
