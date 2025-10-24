import './styles.css';
import House from './assets/house.svg';

export default function Footer({ text, children }){
    return (
        <div>
        <footer className="app-footer">
            <button className="btn-footer-home">
                <img src={House} alt='Logo da casa' />
            </button>
        </footer>
        </div>
    )
}
