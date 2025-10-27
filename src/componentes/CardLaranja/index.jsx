import "./styles.css";

export default function CardLaranja({ children, className = "" }) {
  return (
    <div className={`card-laranja ${className}`}>
      {children}
    </div>
  );
}
