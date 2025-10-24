
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup";

export default function BasePage(){
    return (
    <DeviceMockup>
        <div className="app-shell">
            <Header />
            <div className="app-content">
                {/* conteúdo da tela (ou pode ficar vazio) */}
            </div>
            <Footer />
        </div>
 
    </DeviceMockup>
    )
}