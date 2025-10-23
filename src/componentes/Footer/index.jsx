import './styles.css';
import House from './assets/house.svg';

export default function Footer({ text, children }){
    return (
        <div>
        <footer class="app-footer">
            <button class="btn-footer-home">
                <img src={House} alt='Logo da casa' />
            </button>
        </footer>
        </div>
    )
}