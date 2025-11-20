import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Logo from "./assets/lococomunidade4.png";
import "./styles.css";


export default function BemVindoCon(){
    return (

        <div className="app-fundo-br">
            <Header />
            <img src={Logo} alt='Logo da Comunidade'/>
            <div className="app-content">


                <h5>Conheça o fórum da comunidade <span className="Span01">CyberGuard</span>!</h5>

                <Link to={'/comunidade'} className="botaoComunidade">Entrar na comunidade</Link>


                <Link className="Sair" to={'/'}> Sair </Link>


            </div>
            <Footer />
        </div>
 

    )
}