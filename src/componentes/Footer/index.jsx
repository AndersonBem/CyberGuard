import './styles.css';
import House from './assets/house.svg';
import { Link } from 'react-router-dom';
import Quiz from './assets/quiz.svg';
import Alerta from './assets/alerta.svg';
import Certificado from './assets/certificado.svg';
import Perfil from './assets/perfil.svg';

export default function Footer({ text, children }){
    return (
        <div>
        <footer className="app-footer">
            <div className="btn-footer-home">
                <Link to='/'>
                    <img src={Alerta} alt='Logo de Alerta' />
                </Link>
                <Link to='/quiz'>
                    <img src={Quiz} alt='Logo de quiz' />
                </Link>
                <Link to='/'>
                    <img src={House} alt='Logo da casa' />
                </Link>
                <Link to='/meuscertificados'>
                    <img src={Certificado} alt='Logo de certificado' />
                </Link>
                <Link to='/bemvindocom'>
                    <img src={Perfil} alt='Logo de Perfil' />
                </Link>
            </div>
        </footer>
        </div>
    )
}
