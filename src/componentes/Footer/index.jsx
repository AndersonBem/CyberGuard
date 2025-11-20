import './styles.css';
import House from './assets/house.svg';
import { Link } from 'react-router-dom';
import Quiz from './assets/quiz.svg';
import Comunidade from './assets/comunidade.svg';
import Analise from './assets/analise.svg';
import Perfil from './assets/perfil.svg';


export default function footer({ text, children }){
    return (
        <div>
        <footer className="app-footer">
            <div className="btn-footer-home">
                <Link to='/bemvindocom' state={{ fromFooter: true }}>
                    <img src={Comunidade} alt='Logo de comunidade' />
                </Link>
                <Link to='/quiz' state={{ fromFooter: true }}>
                    <img src={Quiz} alt='Logo de quiz' />
                </Link>
                <Link to='/' state={{ fromFooter: true }}>
                    <img src={House} alt='Logo da casa' />
                </Link>
                <Link to='/CentraldeAnalises' className='analise' state={{ fromFooter: true }}>
                    <img src={Analise} alt='Logo de analise' />
                </Link>
                <Link to='/Perfil' state={{ fromFooter: true }}>
                    <img src={Perfil} alt='Logo de Perfil' />
                </Link>
            </div>
        </footer>
        </div>
    )
}
