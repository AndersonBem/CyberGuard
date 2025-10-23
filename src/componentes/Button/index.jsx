import { Link } from 'react-router-dom'
import './styles.css'
import GoogleIcon from './assets/google.svg'


export default function Botao({ texto, to, tipo, icone }) {
  const iconSrc = icone ?? (tipo === 'google' ? GoogleIcon : null)

  return (
    <Link to={to} className={`btn-${tipo}`}>
      {iconSrc && <img src={iconSrc} alt="" className="btn-icone" />}
      {texto}
    </Link>
  )
}