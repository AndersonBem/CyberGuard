
import AulasList from "../../componentes/AulaList";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";


import "./styles.css"

export default function Aprenda(){
    return (

        <div className="app-shell">
            <Header />
            <div className="app-content">
                <section className="aprenda" aria-labelledby="aprenda-title">
                    <h2 id="aprenda-title">Aprenda</h2>
                    <AulasList />
                </section>
            </div>
            <Footer />
        </div>
 

    )
}