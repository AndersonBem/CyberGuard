import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";
import CardLaranja from "../../componentes/CardLaranja";
import qrcodemeio from "./assets/qrcodemeio.png";

export default function DetectorQrcodes() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <section className="DetectordeQRcodefalso" aria-labelledby="DetectordeQRcodefalso-title">
          <h2 id="DetectordeQRcodefalso-title">Detector de QR code falso </h2>

          <CardLaranja>
        

           <img className= "qrcode-imagem" src={qrcodemeio} alt="qrcodemeio" />
          <button type="button" className="qrcode-container" onClick={() => alert("Botão clicado!")}>
        ESCANEAR QR CODE
      </button>
        
          </CardLaranja>
        </section>
      </div>
      <Footer />
    </div>
  );
}
