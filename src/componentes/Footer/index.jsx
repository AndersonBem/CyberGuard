import './styles.css';

export default function Footer({ text, children }){
    return (
        <div>
            <footer className="footer-box">
                <p>
                    {text} <a href='#'>{children}</a>
                </p>
                <p className="footer-terms">
                Ao cadastrar, você concorda com os 
                <strong> Termos de Serviço </strong>
                e a <strong>Política de Privacidade</strong>, 
                incluindo o <strong>uso de cookies</strong>.
                </p>
            </footer>
        </div>
    )
}