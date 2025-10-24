import "./styles.css"
import { Link } from "react-router-dom";


export default function AulasList() {
  const videos = [
    { id: "Rs-kKkzx5yg", 
        titulo: "Golpe em Compras Online", 
        desc: "Fazer compras online é um jeito fácil de ter acesso à vários produtos sem sair de casa. Recebeu uma oferta imperdível? Pode ser golpe!" 
    },
    { id: "K1UJcgf-VZo",  
        titulo: "Golpe da Falsa atualização do WhatsApp: cuidado!",     
        desc: "Atenção! Golpistas estão enviando mensagens falsas sobre atualizações do WhatsApp para tentar te enganar." 
    },
    { id: "qlovkH2FoQs",  
        titulo: "Golpe da falsa atualização do WhatsApp: cuidado!",     
        desc: "Se você receber uma notificação ou mensagem dizendo que precisa clicar em um link para atualizar o aplicativo, não clique! Pode ser golpe." 
    },
    { id: "_EmcS0YW76s",  
        titulo: "Golpe Phishing | BB",     
        desc: "Phishing: a pescaria que você não quer cair!" 
    },
    { id: "RrwNCVzLrRM",  
        titulo: "Golpe do Falso Advogado: saiba como se proteger",     
        desc: "Você sabe como age um golpista que se passa por advogado? Neste vídeo, explicamos como funciona o golpe do falso advogado, uma prática criminosa que tem enganado clientes e causado prejuízos. " 
    },
  ];

    return (
        <div className="aulas-card">
        {videos.map(v => (
            <Link
            key={v.id}
            to={`/videoaula/${v.id}`}
            state={{ titulo: v.titulo, desc: v.desc }}
            className="aula-item"     // mantém seu layout/estilo
            style={{ textDecoration: "none", color: "inherit" }}
            >
            <div className="thumb">
                <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={`Miniatura: ${v.titulo}`}
                />
                <span className="linha" />
            </div>
            <div className="texto">
                <h3>{v.titulo}</h3>
                <p>{v.desc}</p>
            </div>
            </Link>
      ))}
    </div>
  );
}