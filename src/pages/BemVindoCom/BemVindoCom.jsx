import { Link } from "react-router-dom";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import Logo from "./assets/logocomunidade.svg";
import "./styles.css";


export default function BemVindoCon(){
    return (

        <div className="app-fundo-br">
            <Header />
            <img src={Logo} alt='Logo da Comunidade'/>
            <div className="app-content">


                <h5>Conheça o fórum da comunidade <span className="Span01">CyberGuard</span>!</h5>

                <button className="botaoComunidade">Entrar na comunidade</button>


                <Link className="Sair" to={'/'}> Sair </Link>


            </div>
            <Footer />
        </div>
 

    )
}