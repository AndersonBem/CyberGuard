import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup";
import "./styles.css";

export default function VideoAula(){

    const { id } = useParams();
    const { state } = useLocation();
    const titulo = state?.titulo ?? "Título do vídeo";
    const desc   = state?.desc   ?? "Descrição do vídeo";
    return (
    <DeviceMockup>
      <div className="app-shell">
        <Header />
        <div className="app-content">
        
          <section className="video" aria-labelledby="video-title">
            <Link to="/aprenda" className="back" aria-label="Voltar">← Voltar</Link>
            <div className="video-card">

              <div className="player-wrap">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
                  title={titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              

              <h2 id="video-title">{titulo}</h2>
              <p className="video-desc">{desc}</p>
              
              
            </div>
            
            
          </section>
        </div>

        <Footer />
      </div>
    </DeviceMockup>
  );
}