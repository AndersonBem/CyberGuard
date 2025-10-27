import './styles.css';
import House from './assets/house.svg';
import { Link } from 'react-router-dom';

export default function Footer({ text, children }){
    return (
        <div>
        <footer className="app-footer">
            <button className="btn-footer-home">
                <Link to='/'>
                    <img src={House} alt='Logo da casa' />
                </Link>
            </button>
        </footer>
        </div>
    )
}
