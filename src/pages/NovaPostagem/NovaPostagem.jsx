import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Logo from "./assets/lococomunidade4.png";
import "./styles.css";


export default function NovaPostagem(){
    return (

        <div className="app-fundo-br">
            <Header />
            <img src={Logo} alt='Logo da Comunidade' className="logoTopo"/>
            <div className="app-content">

                
                <p className="texto-comunidade">
                    Compartilhe uma postagem com a comunidade:
                </p>

                
                <textarea
                    className="campo-postagem"
                    placeholder="Escreva sua postagem aqui..."
                />

                <Link to={'/comunidade'} className="botaoComunidade">Postar Agora</Link>


                <Link className="Sair" to={'/comunidade'}> Cancelar </Link>


            </div>
            <Footer />
        </div>
 

    )
}