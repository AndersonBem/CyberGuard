
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";

export default function BasePage(){
    return (

        <div className="app-shell">
            <Header />
            <div className="app-content">
                {/* conteúdo da tela (ou pode ficar vazio) */}
            </div>
            <Footer />
        </div>
 

    )
}